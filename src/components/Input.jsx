import { forwardRef } from "react";
const Input = forwardRef(function Input ({label, textArea,...props},ref){
    const classes = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focuse-border-stone-600" ;

    return  <p className="flex flex-col gap-10 my-4">
        <label className="text-sm font-bold uppercase text-stone-800">{label}</label>
        {textArea ? <textarea className={classes} ref={ref}
        {...props} />: <input ref={ref} className={classes} {...props}/>}
    </p>
})
export default Input;