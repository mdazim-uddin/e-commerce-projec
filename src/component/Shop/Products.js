import React from 'react';
import { BsCart4 } from 'react-icons/bs';
import currencyFormatter from 'currency-formatter';
import { connect } from 'react-redux'
// import { addToCart} from "../../../redux/Shopping/shopping-actions";
 import { addToCart } from '../../redux/Product/product-actions';
// import { addToCart } from './actions/cartActions'
// import { productItem } from '../../redux/Product/product-actions';
const Products = (props) => {
    const {image,title,price,discount,id}=props.product
    console.log("pro",props)


    return (
        <div>
        <div class="">
        <div class="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img class="rounded-t-lg" src={image}alt=""/>
          </a>
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">{title}</h5>
          </div>
          <div className='flex py-8'>
            <p className='text-2xl mx-12'><span>{currencyFormatter.format(price, { code: 'USD' })}</span></p>
            <p className='text-2xl '><span>{currencyFormatter.format(discount, { code: 'USD' })}</span></p>
            <button 
            onClick={() => addToCart(id)}
             type="button" class="flex px-6  py-2.5 m-auto
            bg-white text-black font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg 
            focus:bg-blue-700 focus:shadow-lg focus:outline-none
             focus:ring-0 active:bg-blue-800
            active:shadow-lg transition duration-150 ease-in-out">
            <BsCart4 className='pr-4 text-3xl'></BsCart4>
             cart
            </button>
            
          </div>
        </div>
      </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
   
  };
};


export default connect(null, mapDispatchToProps) (Products) ;