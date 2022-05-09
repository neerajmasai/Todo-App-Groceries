
import '../App.css';

function BtnDisplay({toggle, toggleBtn}) {
  return (
    <>
    <div className="Btn-Cart">
        <button onClick={toggleBtn(toggle)}>{toggle ? "Show Wish List" : "Show Cart List"}</button>
    </div>
    </>
  );
}

export default BtnDisplay;
