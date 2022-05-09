
import '../App.css';

function TextBox({handleChange}) {
  
  return (
    <>
    <div className="Text-Box">
        <h2>Add Your Groceries:</h2>
        <input onChange={(event) => handleChange(event)}type="text" name="textbox" id="textbox" placeholder="Start typing a list item..."/>
    </div>
    </>
  );
}

export default TextBox;
