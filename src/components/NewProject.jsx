import { useRef,  } from "react"
import Input from "./Input"
import Modal from "./Modal";
export default function NewProject({onAdd,onCancel}){
    const modal = useRef();
  const title  =useRef();
  const discription = useRef();
  const dueDate = useRef();
  
   function handleSave(){
  const enteredTitle = title.current.value;
  const enteredDiscription = discription.current.value;
  const enteredDate =  dueDate.current.value;
  if(enteredDate.trim() === '' || enteredDiscription.trim()==='' || enteredTitle.trim()===''){
   modal.current.open();
   return;
  }
   onAdd({
    title : enteredTitle,
    discription : enteredDiscription,
    date : enteredDate,
   });
   }
  
    return <>
    <Modal ref={modal} Closing= 'Okay'>
     <h2 className='text-xl font-bold text-stone-500 mt-4 mb-4'>Invalid Input</h2>
     <p className='text-stone-400 mb-4'>oops ... you have entered the wrong input</p>
     <p className='text-stone-400 mb-4'>Make sure you have added all the input fields correctly...</p>

    </Modal>
 <div className="w-[35rem] mt-16">
        
        <menu className="flex item-center justify-end gap-4 my-4">
            <li>
                <button onClick={onCancel} className="py-2 text-stone-800 hover:text-stone-950">Cancel</button>
                </li>
            <li>
                <button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
                </li>
        </menu>
        <div>
           <Input  label="title" ref={title}  />
           <Input ref={discription}  label="Description" textArea/>
           <Input  ref={dueDate}  label="Due Date" type= 'date'/>
        </div>
       
    </div>
    </>
   
}