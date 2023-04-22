import "./style.css";

const Buttons = ({tasks, hideDoneTasks, toggleHideDoneTasks, setAllDone}) => (
  <div className="buttons">
    
    {tasks.length > 0 && (
      <>
<button onClick={toggleHideDoneTasks} className="buttons__button">
    {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
    </button>
    <button 
    onClick={setAllDone}
    className="buttons__button" 
    disabled={tasks.every(({ done })=> done) }>
    Ukończ wszystkie
    </button>
      </>
  )} 
  </div>
);

export default Buttons;
