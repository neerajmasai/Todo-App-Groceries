
import './App.css';
import TextBox from './components/TextBox';
import BtnCart from './components/BtnCart';
import BtnWish from './components/BtnWish';
import BtnDisplay from './components/BtnDisplay';
import CartListContainer from './components/CartListContainer';
import WishListContainer from './components/WishListContainer';
import { useState } from 'react';


function App() {

  /* textbox state */
  const [text, setText] = useState("");

  /* cart state */
  const [cartlist, setCartList] = useState([]);

  /* wish list state */
  const [wishlist, setWishList] = useState([]);

  /* active display list */
  const [toggle, setToggle] = useState(true); 

  const handleChange = (e) => {
    /* update text */
    setText(e.target.value);
  }

  const handleBtnCartClick = () => {
    /* update cart list */
    setCartList([text, ...cartlist]);
  }

  const handleBtnWishClick = () => {
    /* update wish list */
    setWishList([text, ...wishlist]);
  }

  const toggleBtn = (btn) => {
    /* toggler for which list to show */
    return () => {
      setToggle(!btn);
    }
  }

  return (
    <>
    <div className="App">
      <div className="Top">
        <TextBox handleChange={handleChange}/>
        <div className="Buttons">
          <BtnCart handleBtnCartClick={handleBtnCartClick}/>
          <BtnWish handleBtnWishClick={handleBtnWishClick}/>
        </div>
      </div>
      <div className="Bottom">
        <BtnDisplay toggle={toggle} toggleBtn={toggleBtn}/>
        <div className="List-Container">
          {toggle ? <CartListContainer cartlist={cartlist}/> : <WishListContainer wishlist={wishlist}/>}          
        </div>
        
      </div>
    </div>
    </>
  );
}

export default App;
