
import '../App.css';
import WishListItem from './WishListItem';
import {v4 as uuid} from "uuid";

function WishListContainer({wishlist}) {
  return (
    <>
    <div className="Wish-List-Container">
        {
            wishlist.map(item => {
                return <WishListItem key={uuid()} item={item}/>
            })
        }
    </div>
    </>
  );
}

export default WishListContainer;
