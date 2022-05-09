
import '../App.css';

function BtnCart({handleBtnCartClick}) {
  return (
    <>
    <div className="Btn-Cart">
        <button onClick={handleBtnCartClick}>Add To Cart</button>
    </div>
    </>
  );
}

export default BtnCart;
