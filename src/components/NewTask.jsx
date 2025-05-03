import { useState } from "react";

export default function NewTask({ onAddTask, }) {
  const [enteredTask, setEnteredTask] = useState('');

  function handleTask(event) {
    setEnteredTask(event.target.value);
  }
let error;
  function handleClick() {
   if(enteredTask === ''){
   error =<p>Enter a Value</p>
   }
   else{
    onAddTask(enteredTask);
    setEnteredTask('');
   }
   
  }

  return (
    <div className="flex items-center gap-4">
     <input
        value={enteredTask}
        onChange={handleTask}
        type="text"
        className="w-64 px-2 py-1 rounded-small bg-stone-200"
       
      />
      <button
        onClick={handleClick}
        className="text-stone-800 hover:text-stone-950"
      >
        Add Task
      </button>
      {error ? error :''}
    </div>
  );
}
