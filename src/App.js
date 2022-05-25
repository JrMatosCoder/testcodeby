import React from "react";
import api from './api.json';
import Card from './Components/Card';

function App() {
  const [product,setProduct] = React.useState(null);
  const [total, setTotal] = React.useState(null);

  
  React.useEffect(()=>{
      setProduct(api.items);
      if(product){
        const precos = product && product.map((product)=>{return product.sellingPrice})
        const soma = precos.reduce(function(soma, i) {
            return soma + i;
      });
        setTotal(soma)
      }
  },[product])

  return (
    <section className="container">
      <header className="header">
        <h1>Meu carrinho</h1>
      </header>
     {product && (
       <>
          {product && product.map((product)=>(
            <Card key={product.productId}
            image={product.imageUrl}
            title={product.name}
            price={product.price.toLocaleString('pt-br')}
            sellingPrice={product.sellingPrice}
            />
          ))}
          <div className="total">
              <h2>Total</h2>
              <h2>{total && total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h2>
          </div> 
          {total > 10 &&(
            <p className="freteFree">Parabéns, sua compra tem frete grátis !</p>
          )}
          <button>Finalizar compra</button>
        </>
     )}
    </section>
  );
}

export default App;
