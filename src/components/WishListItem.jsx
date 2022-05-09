
import '../App.css';
import { useState } from 'react';

function WishListItem({item}) {
  const [itemState, setItemState] = useState(true);
  return (
    <>
    <div className="Wish-List-Item">
        {itemState ? <h3 onClick={() => {setItemState(!itemState)}}>{item}</h3>
        : <h3 onClick={() => {setItemState(!itemState)}} style={{textDecoration: "line-through", opacity: "50%"}}>{item}</h3>}
    </div>
    </>
  );
}

export default WishListItem;
