import productData from '../../productData'
import { ADD_TO_CART, ADJUST_ITEM_QTY, 
    BUY_PRODUCT, LOAD_CURRENT_ITEM,
     REMOVE_FROM_CART} from './product-types'


const initialState = {
    productItem:productData,
    cart: [],
    currentItem: null,
    }

const productReducer = (state=initialState,action)=>{
//   let cart = state.cart;
    switch(action.type){
        case BUY_PRODUCT:return{
            ...state,
            productItem:state.productItem
        }

        case ADD_TO_CART:
            const item = state.products.find(
                (product) => product.id === action.payload.id
              );

              // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
      item.id === action.payload.id ? true : false
    );

            return{
                ...state,
                cart: inCart
                  ? state.cart.map((item) =>
                      item.id === action.payload.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                    )
                  : [...state.cart, { ...item, qty: 1 }],
            }
            case REMOVE_FROM_CART:
                return {}
                case ADJUST_ITEM_QTY:
                    return {}
                    
                    case LOAD_CURRENT_ITEM:
                        return {}
            default:
                return state;
    }
}

export default productReducer;
