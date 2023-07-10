import React, {useState} from 'react';
import { BiSolidCookie, BiLogoReact, BiLogoTailwindCss, BiLogoJavascript, BiCodeAlt } from "react-icons/bi";
import { BsFillCircleFill } from "react-icons/bs";
const Header = () => {

    const [open, setOpen] = useState(false);
    const [aboutModal, setAboutModal] = useState(false)
    const [contactModal, setContactModal] = useState(false)



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
                    <li onClick={() => setAboutModal(!aboutModal)} className="cursor-pointer hover:text-purple-400 duration-300">About me</li>
                    <li onClick={() => setContactModal(!contactModal)} className="cursor-pointer hover:text-blue-400 duration-300">Contact</li>
                    <li className="cursor-pointer hover:text-emerald-400 duration-300">Portfolio</li>
                </ul>
            </aside>

            <div className={`${aboutModal ? 'about__modal-open' : 'about__modal-close'} bg-[#303030] about__modal md:block`}>
                <div className="about__modal_padding">
                    <div className="about__modal_container px-4 relative">
                        <div onClick={() => setAboutModal(!aboutModal)} className="modal__close cursor-pointer">
                            <BiCodeAlt size={30} />
                        </div>
                        <h1 className="text-purple-300 text-center">About me</h1>
                        <p className="text-white font-medium">Hello, I am a self-taught frontend developer. I love creating websites and communicating in <span className="text-[#5866ef]">Discord</span>. I have been developing for 1 year. And I really like the following technologies: <span className="text-[#61dafb]">React js</span>, <span className="text-[#38bdf8]">Tailwind</span>, <span className="text-[#ffd72f]">JavaScript</span></p>
                    </div>
                </div>
            </div>

            <div className={`${contactModal ? 'about__modal-open' : 'about__modal-close'} bg-[#303030] about__modal`}>
                <div className="about__modal_padding">
                    <div className="about__modal_container px-4 relative">
                        <div onClick={() => setContactModal(!contactModal)} className="modal__close cursor-pointer">
                            <BiCodeAlt size={30} />
                        </div>
                        <h1 className="text-blue-400 text-center">Contact</h1>
                        <ul>
                            <li>Email: <a href="mailto:priveta22@mail.ru" className="text-[#9e9eff]">priveta22@mail.ru</a></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>


        </div>

    );
};

export default Header;