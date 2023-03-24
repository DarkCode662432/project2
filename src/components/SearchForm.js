import './SearchForm.css';

var catValue = '', searchValue = '';

function SearchForm(props){
  return (
    <form className='search-form'>
      <select id="cat" defaultValue={null} onChange={(e)=>{catValue=e.target.value;props.func(searchValue, catValue)}}>
        <option value=''>None_</option>
        <option value="smartphones">Smart Phones</option>
        <option value="laptops">Laptops</option>
        <option value="fragrances">Fragrances</option>
        <option value="skincare">Skin Care</option>
        <option value="groceries">Groceries</option>
        <option value="home-decoration">Home Decoration</option>
      </select>
      
      <input type="text" id="search" placeholder='Search' onChange={(e)=>{searchValue=e.target.value;props.func(searchValue, catValue)}}/>
    </form>
  );
}

export default SearchForm;
