
import { useEffect, useState } from 'react';
import './MainProduct.css'
import { useCart } from '../../hooks/useCart';
const URL_PRODUCT='https://api-frontend-production.up.railway.app/api/products/';



export function MainProduct({IdProduct}){

    const { cartElm, addToCart ,removeFromCart} = useCart();
    const [color,setColor]=useState('')
    const[talla,setTalla]=useState('')
   

    const isInCart=cartElm.some(item=>item.productId===IdProduct)


    function handleChangeSelections(name,value){
        console.log({name,value});
        
        switch (name) {
            case 'Talla':

                setTalla(value)
               
                break;
            case 'Color':
                setColor(value)
                
                
                break;
        
            default:
                break;
        }
      
         
    }


    const [producto, setProduct]=useState([]);


    
    // useEffect simepre con [] vacios si no hay dependencias    
    useEffect(()=>{
        fetch(URL_PRODUCT+IdProduct)
        .then(res=>res.json())
        .then(res=>setProduct(res))
    },[setProduct])

    
    const [getProd]=producto
    const skuSpecifications=getProd ? getProd.skuSpecifications : []

    console.log(getProd);
    
      
        
    return (
        <main>
            <section className="prenda-principal" aria-labelledby="producto1">
                <div className="content-image"> 
                  {/* <h4 id="producto1">{getProd &&  getProd.productName }</h4> */}
                  <span id="title-product"></span>
                </div>
                <img src="https://cuerosvelezco.vteximg.com.br/arquivos/ids/277767/1037823-00-01-Tenis-de-cuero.jpg?v=638557041976600000" alt=""></img>
            </section>
            <aside className='especificaciones-section'>
                 {getProd &&  getProd.productName }
                
                {
                    isInCart && <button onClick={()=>{removeFromCart({
                    productId:getProd.productId,
                    productName:getProd.productName,
                    Talla:talla,
                    Color:color
                })}}>El item se enuentra agregado correctamente </button>
                }

                    {/* rendereizado condicionado */}
                    
                   {JSON.stringify(cartElm,null,2)}

                <ul>
                 {
                    skuSpecifications.map(skuSpecification=>(
                     <li key={skuSpecification.field.id}>
                        {skuSpecification.field.isActive &&
                        <div className='section-specification'>
                        <span className='title-specification'>{skuSpecification.field.name} </span>
                        {
                            skuSpecification.values.map(valueField=>(
                                    <div className='check-selection-specification'>
                                        <label htmlFor={valueField.id}>{valueField.name}</label>
                                        <input onClick={()=>{handleChangeSelections(skuSpecification.field.name,valueField.name)}} type={skuSpecification.field.type}  
                                        name={skuSpecification.field.name} id={valueField.id} 
                                        hidden/>
                                    </div>
                            ))
                        }
                        </div>
                         }   
                     </li> 
                    ))
                 }
                </ul>
                <button className='btn-add-to-card' onClick={()=>{ 


                    if(talla=='' || color==''){
                        alert('Porfavor reigstr talla y color')
                        return;
                    }
                    addToCart({
                    productId:getProd.productId,
                    productName:getProd.productName,
                    Talla:talla,
                    Color:color
                })}}>Agregar al carrito</button>
            </aside>
            
        </main>
    )
}