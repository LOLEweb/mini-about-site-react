import React, {useState} from 'react';
import { BiSolidCookie, BiCookie } from "react-icons/bi";
import { BsFillCircleFill } from "react-icons/bs";
import { ImHtmlFive2 } from "react-icons/im";
const Header = () => {

    const [open, setOpen] = useState(false);



    return (
        <div>
            <div className="bg-[#303030] flex items-center fixed w-full justify-between navbar py-4 px-5 shadow-neutral-900 shadow-md">
                <div onClick={() => setOpen(!open)} className="cursor-pointer hover:scale-125 duration-200">
                     <BiSolidCookie size={45} color="fff"/>
                </div>


                <div className="cursor-pointer">
                    <BsFillCircleFill size={45} color="fff" />
                </div>
            </div>
            {/*className="bg-[#303030] sidebar"*/}

            <aside className={`${open ? 'md:w-[30vw] w-full' : 'w-0'} bg-[#303030] sidebar`}>
                <ul className="flex flex-col text-center gap-[41px] items-center whitespace-nowrap">
                    <li className="cursor-pointer hover:text-purple-400 duration-300">About me</li>
                    <li className="cursor-pointer hover:text-blue-400 duration-300">Contact</li>
                </ul>
            </aside>
        </div>

    );
};

export default Header;