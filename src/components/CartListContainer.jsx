
import '../App.css';
import CartListItem from './CartListItem';
import {v4 as uuid} from "uuid";

function CartListContainer({cartlist}) {
  return (
    <>
    <div className="Cart-List-Container">
        {
            cartlist.map((item) => {
                return <CartListItem key={uuid()} item={item}/>
            })
        }
    </div>
    </>
  );
}

export default CartListContainer;
