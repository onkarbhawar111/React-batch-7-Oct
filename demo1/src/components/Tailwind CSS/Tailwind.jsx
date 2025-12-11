import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";


const Tailwind = () => {
    const [toggle, setToggle] = useState(true)
    function handleClick(){
        setToggle(!toggle)
    }
  return (
    <div className="text-white ">
        <div className="flex justify-between">
        <div className="font-bold text-2xl">OnkarTech</div>
        <div className="p-2" onClick={handleClick}>{toggle ? <IoMdClose /> : <IoMenu />}</div>
        </div>
        <div className={toggle ? 'fixed border-r border-r-gray-700 p-4 ease-in-out duration-500' : 'fixed -left-full'}>
            <ul>
                <li className="p-5 border-b-2">Home</li>
                <li className="p-5 border-b-2">About</li>
                <li className="p-5 border-b-2">Contact Us</li>
            </ul>
        </div>
        <button className="bg-sky-500 p-1 w-30 rounded-2xl">Add</button>
    </div>
  )
}

export default Tailwind