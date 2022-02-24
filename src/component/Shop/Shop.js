import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux'
import { productItem } from '../../redux/Product/product-actions';
import Cart from './Cart';
import Products from './Products';

const Shop = (props) => {
    const [data, setData] = useState([])
    useEffect(() => {
        setData([...props.productItem])
    },[])
   
    return (
       <>
       <div className='pl-8'>
       <div className='grid grid-cols-3 gap-4 p-12'>
       {
        data.map(pd=> (
            <Products product={pd}/>
        )
           
        )
    }






       </div>
    </div>
  
       </>
    );
};


const mapStateToProps = state =>{
    return {
        productItem: state.product.productItem
       
    }
}


export default connect(mapStateToProps)(Shop);