import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import logo from '../../assest/image/download.svg'
import {FaAppleAlt } from 'react-icons/fa';
import {AiOutlineApple,AiOutlineQuestion } from 'react-icons/ai';
import {MdOutlineBakeryDining} from 'react-icons/md';
import {GiBeachBag,GiShoulderBag,GiLoincloth,GiUsaFlag} from 'react-icons/gi';
import { connect } from "react-redux";

const Navbar = ({cart}) => {

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);



    const data = [
        {
          value: 1,
          text: 'Grocery',
          icon:<FaAppleAlt/>
        },
        {
          value: 2,
          text: 'Grocery Two',
          icon: <AiOutlineApple/>
        },
        {
          value: 3,
          text: 'Bakery',
          icon:<MdOutlineBakeryDining/>
        
        },
        {
          value: 4,
          text: 'Makeup',
          icon: <GiShoulderBag/>
        },
        {
            value: 5,
            text: 'Bag',
            icon: <GiBeachBag/>
          },
          {
            value: 6,
            text: 'Clothing',
            icon:<GiLoincloth/>
          }
      ];


      const [selectedOption, setSelectedOption] = useState(null);


      const handleChange = e => {
        setSelectedOption(e);
      }
     

    return (
     <div className='flex mt-8'>
     <div className="flex ml-20">
     <div className=''>
     <img src={logo} className='mr-20' alt='logo'/>
     </div>
     <Select
     className="w-48 cursor-pointer"
       placeholder="Select Option"
       value={selectedOption}
       options={data}
       onChange={handleChange}
       getOptionLabel={e => (
         <div style={{ display: 'flex', alignItems: 'center' }}>
           {e.icon}
           <span>{e.text}</span>
         </div>
       )}
     />

     {selectedOption && <div style={{ marginTop: 20, lineHeight: '25px' }}>
      
     </div>}
   </div>

<div className='flex ml-56'>
<div class="mr-16">
<button 
type="button" class=" px-6 py-2.5 
bg-white text-black font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800
 active:shadow-lg transition duration-150 ease-in-out">
 offer
 </button>
</div>

<div className="mr-16">
<button type="button" class="flex  py-2.5 
bg-white text-black font-medium text-xl leading-tight
 uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700
  focus:shadow-lg focus:outline-none focus:ring-0
   active:bg-blue-800 active:shadow-lg transition duration-150 
   ease-in-out"> <AiOutlineQuestion className='mr-7'/>Need Help</button>
</div>    

<div class="mr-16">
<button type="button" class=" flex px-6 py-2.5 
bg-white text-black font-medium text-xl leading-tight
 uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700
  focus:shadow-lg focus:outline-none focus:ring-0
   active:bg-blue-800 active:shadow-lg transition duration-150 
   ease-in-out"> <GiUsaFlag className='mr-7'/>English</button>
</div>


<div class="mr-16">
<button type="button" class=" px-6 py-2.5 
bg-white text-black font-medium text-xl leading-tight
 uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700
  focus:shadow-lg focus:outline-none focus:ring-0
   active:bg-blue-800 active:shadow-lg transition duration-150 
   ease-in-out">Join</button>
</div>

</div>
<div className="">{cartCount}</div>
     </div>
    );
};


const mapStateToProps = (state) => {
  return {
    cart: state.product.cart,
  };
};

export default connect(mapStateToProps)(Navbar);