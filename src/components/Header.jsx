import React, {useState} from 'react';
import { BiSolidCookie, BiLogoReact, BiLogoTailwindCss, BiLogoJavascript, BiCodeAlt } from "react-icons/bi";
import { BsFillCircleFill } from "react-icons/bs";
const Header = () => {

    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false)



    return (
        <div>
            <div className="bg-[#303030] flex items-center fixed w-full justify-between navbar py-4 px-5 header__shadow z-50">
                <div onClick={() => setOpen(!open)} className="cursor-pointer hover:scale-125 duration-200">
                     <BiSolidCookie size={45} color="fff" />
                </div>


                <div className="cursor-pointer">
                    <BsFillCircleFill size={45} color="fff" />
                </div>
            </div>
            {/*className="bg-[#303030] sidebar"*/}

            <aside className={`${open ? 'md:w-[30vw] w-full' : 'w-0'} bg-[#303030] sidebar`}>
                <ul className="flex flex-col text-center gap-[41px] items-center whitespace-nowrap">
                    <li onClick={() => setOpenModal(!openModal)} className="cursor-pointer hover:text-purple-400 duration-300">About me</li>
                    <li className="cursor-pointer hover:text-blue-400 duration-300">Contact</li>
                </ul>
            </aside>

            <div className={`${openModal ? 'block' : 'hidden'} bg-[#303030] about__modal`}>
                <div className="about__modal_padding">
                    <div className="about__modal_container px-4 relative">
                        <div onClick={() => setOpenModal(!openModal)} className="modal__close">
                            <BiCodeAlt size={25} />
                        </div>

                        <h1 className="text-purple-300 text-center">About me</h1>
                        <p className="text-white font-medium">Hello, I am a self-taught frontend developer. I love creating websites and communicating in <span className="text-[#5866ef]">Discord</span>. I have been developing for 1 year. And I really like the following technologies: <span className="text-[#61dafb]">React js</span>, <span className="text-[#38bdf8]">Tailwind</span>, <span className="text-[#ffd72f]">JavaScript</span></p>
                        {/*<div className="">
                            <h3>My best trio</h3>
                            <BiLogoReact  size={40} color="#61dafb"/>
                            <BiLogoTailwindCss  size={40} color="#38bdf8"/>
                            <BiLogoJavascript  size={40} color="#ffd72f"/>
                        </div>*/}

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Header;