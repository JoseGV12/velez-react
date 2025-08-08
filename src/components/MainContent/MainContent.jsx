import './MainContent.css'


export function MainContent({initialClassName}){
    return (
        <main className={initialClassName}>
            <div className='productsContainer'> 
                <h4>Lista de articulos </h4>

                <ul className='productsList'>
                    <li key={1}>
                        <img
                            src={'https://cuerosvelezco.vteximg.com.br/arquivos/ids/277767/1037823-00-01-Tenis-de-cuero.jpg?v=638557041976600000'}
                            alt={'Prenda destacada'}
                        />
                        <div>
                            <strong>{'Ejemplo1'}</strong> - ${8999}
                        </div>
                        <div>
                            <button
                            >
                            ADD TO CART
                            </button>
                        </div>
                    </li>
                    <li key={2}>
                        <img
                            src={'https://cuerosvelezco.vteximg.com.br/arquivos/ids/277767/1037823-00-01-Tenis-de-cuero.jpg?v=638557041976600000'}
                            alt={'Prenda destacada'}
                        />
                        <div>
                            <strong>{'Ejemplo1'}</strong> - ${8999}
                        </div>
                        <div>
                            <button
                            >
                            ADD TO CART
                            </button>
                        </div>
                    </li>
                     <li key={3}>
                        <img
                            src={'https://cuerosvelezco.vteximg.com.br/arquivos/ids/277767/1037823-00-01-Tenis-de-cuero.jpg?v=638557041976600000'}
                            alt={'Prenda destacada'}
                        />
                        <div>
                            <strong>{'Ejemplo1'}</strong> - ${8999}
                        </div>
                        <div>
                            <button
                            >
                            ADD TO CART
                            </button>
                        </div>
                    </li>
                </ul>
                
            </div>
        </main>
    )
}