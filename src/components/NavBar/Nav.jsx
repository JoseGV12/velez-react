
import { NavElements } from "./NavElements"
import './Nav.css'
import { useState } from "react"
import { useCart } from "../../hooks/useCart"

function CardItem(Cart){
    return (
        <li>
            Nombre producto: {Cart && Cart.productName}
            Talla: {Cart && Cart.Talla}
            Color: {Cart && Cart.Color}
            Cantidad :<button>-</button> <span>{Cart && Cart.quantity}</span> <button>+</button> <button>Remover</button>
        </li>
    )
}

export function Nav(){
    const [showCart,setShowCart]=useState(false)
    const classToShow=showCart ? 'show-cart' : 'hide-cart';
    function handleClickCart(){
        setShowCart(!showCart)
    }

        const { cartElm, addToCart ,removeFromCart,totalElementos} = useCart();
    return (

        <>
            <nav className="navegacion">
                <NavElements initialClassName="lft-items">
                    <a href="/" className={"logo"} aria-label="Inicio">
                        VÉLEZ   
                    </a>
                </NavElements>
                <NavElements initialClassName="mid-items">
                    <ul className="items-menu">
                        <li><a href="#home">HOME</a></li>
                        <li><a href="#shop">SHOP</a></li>
                        <li><a href="#faq">FAQ</a></li>
                    </ul>
                </NavElements>
                <NavElements initialClassName="rgt-items shop-cart">
                    <button aria-label="Ver carrito de compras" onClick={handleClickCart}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round" 
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                          
                        </svg>
                         {totalElementos}
                    </button>
                </NavElements>
                <NavElements initialClassName="rgt-items navigation-mobile">
                    <div className="icon-menu-mobile">
                        <button aria-label="Abrir menú de navegación">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                            </svg>
                        </button>
                    </div> 
                </NavElements>
                
            </nav>
            <aside className={'cart-aside '+classToShow}>
                   CARRO DE COMPRAS

                    <ul>
                        {
                            cartElm.map((elm)=>
                                CardItem(elm)
                            )
                        }
                    </ul>

                    <button>Finalizar compra</button>

            </aside>
        </>
        
    )
}