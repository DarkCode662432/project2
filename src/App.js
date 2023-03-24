import './App.css';
import { Component } from 'react';
import ProductContainer from './components/ProductContainer';
import Products from './components/Products.api';
import SearchForm from './components/SearchForm';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {products:Products.map((product)=>{
      return (
        <ProductContainer product={product} key={product.id}/>
      );})
    }
    this.updateProducts = this.updateProducts.bind(this);
  }

  updateProducts(searchValue, catValue){
    if(searchValue !== '' && catValue !== ''){
      this.setState({products:Products.map((product)=>{
          if(product.category === catValue && product.title.substr(0, searchValue.length).toLowerCase() === searchValue){
            return (<ProductContainer product={product} key={product.id}/>)
          }else{
            return null;
          }
      })});
    }else if(catValue !== ''){
      this.setState({products:Products.map((product)=>{
          if(product.category === catValue){
            return (<ProductContainer product={product} key={product.id}/>)
          }else{
            return null;
          }
      })});
    }else if(searchValue !== ''){
      this.setState({products:Products.map((product)=>{
          if(product.title.substr(0, searchValue.length).toLowerCase() === searchValue){
            return (<ProductContainer product={product} key={product.id}/>)
          }else{
            return null;
          }
      })});
    }else{
      this.setState({products:Products.map((product)=>{
        return (<ProductContainer product={product} key={product.id}/>)
      })});
    }
  }

  render() {
    return (    
    <div className='container'>
      <SearchForm func={this.updateProducts}/>
      {this.state.products}
    </div>
    );
  }
}

export default App;




/*
import './App.css';
import { useState } from 'react';
import ProductContainer from './components/ProductContainer';
import Products from './components/Products.api';
import SearchForm from './components/SearchForm';


function App() {
  const [products, setproducts] = useState(Products.map((product)=>{
    return (
      <ProductContainer product={product} key={product.id}/>
    );
  }));

  
  function updateProducts(searchValue, catValue){
    if(searchValue !== '' && catValue !== ''){
      setproducts(Products.map((product)=>{
          if(product.category === catValue && product.title.substr(0, searchValue.length).toLowerCase() === searchValue){
            return (<ProductContainer product={product} key={product.id}/>)
          }else{
            return null;
          }
      }))
    }else if(catValue !== ''){
      setproducts(Products.map((product)=>{
          if(product.category === catValue){
            return (<ProductContainer product={product} key={product.id}/>)
          }else{
            return null;
          }
      }))
    }else if(searchValue !== ''){
      setproducts(Products.map((product)=>{
          if(product.title.substr(0, searchValue.length).toLowerCase() === searchValue){
            return (<ProductContainer product={product} key={product.id}/>)
          }else{
            return null;
          }
      }))
    }else{
      setproducts(Products.map((product)=>{
        return (<ProductContainer product={product} key={product.id}/>)
      }))
    }
  }


  return (
    <div className='container'>
      <SearchForm func={updateProducts}/>
      {products}
    </div>
  );
}

export default App;
*/




