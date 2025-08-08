import {createContext,useState} from "react";



export const CartContext=createContext()

export function CartProvider({children}){
    const localStg=JSON.parse(window.localStorage.getItem('cart'))
    const [cartElm,setElmCart]= useState(localStg || [])
    let contador=0
    if(localStg){
        contador= localStg.reduce((prev,current)=>prev+parseInt(current.quantity),0)
        
        console.log(localStg);
        
    }
    const [totalElementos,setTotalElementos]=useState(contador)
    const updateLocalStorage=(cart)=>{
        window.localStorage.setItem('cart',JSON.stringify(cart))
    }

    const addToCart=product=>{
        const productInCartIndex=cartElm.findIndex(item=>
            item.productId===product.productId && item.Color==product.Color && item.Talla==product.Talla
        )
        if(productInCartIndex >= 0){
            const newCart=structuredClone(cartElm)
            newCart[productInCartIndex].quantity+=1
            setTotalElementos(prevState=>prevState+1)
            updateLocalStorage(newCart)

            return setElmCart(newCart)
        }

      
        setElmCart(prevState=>{
            updateLocalStorage([...prevState,
            {
            ...product,
            quantity:1
            
            }])
            return([
                ...prevState,
                {
                ...product,
                quantity:1
                }
                
            ])
    
        })
       
        setTotalElementos(prevState=>prevState+1)
    }

    const clearCart=()=>{
        setElmCart([])
        setTotalElementos(0)
        updateLocalStorage([])
    }
    const removeFromCart=product=>{
        const newArrToLocal=[]
        setElmCart(prevState=>prevState.filter((item)=> {
            if(item.productId===product.productId){
                
                setTotalElementos(
                    prevState=>((
                        prevState-parseInt(product.quantity)) < 0 ) || 
                        (isNaN(prevState) || isNaN(product.quantity) ) ? 0 : (prevState-parseInt(product.quantity)) )
            }
            if(item.productId!=product.productId){
                newArr.push(product)
            }
            return item.productId!=product.productId
        }
            
        ))
        updateLocalStorage(newArrToLocal)
        // setTotalElementos(cartElm.reduce((ant,current)=>ant.quantity+current.quantity))
         
       
    }

    return (
        <CartContext.Provider value={{cartElm,addToCart,clearCart,removeFromCart,totalElementos}}>
            {children}
        </CartContext.Provider>
    )
}