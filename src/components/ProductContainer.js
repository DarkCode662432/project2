import './ProductContainer.css'

function Product(props){
    return (
    <div className='product-container'>
      <div className='img'><img src={props.product.thumbnail} alt={props.product.title} /></div>
      <div className="description">
        <h3 className="title">{props.product.title}</h3>
        <p>{props.product.description}</p>
        <span>{props.product.price}$</span>
        <button>BUY NOW!</button>
      </div>
    </div>
  );
}


export default Product;
