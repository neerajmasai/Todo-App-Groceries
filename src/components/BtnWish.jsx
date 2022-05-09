
import '../App.css';

function BtnWish({handleBtnWishClick}) {
  return (
    <>
    <div className="Btn-Wish">
        <button onClick={handleBtnWishClick}>Save To Wish List</button>
    </div>
    </>
  );
}

export default BtnWish;
