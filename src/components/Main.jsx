import React, {useEffect, useState} from 'react';
import axios from "axios";
import mage from '../assets/cookie_icon.png'
const src = "https://api.lanyard.rest/v1/users/835837384297545748"
const Main = () => {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        axios
            .get(src)
            .then(data => {
                setArticles(data.data.data)
                console.log(data.data.data)
            })
    }, [])

    return (
        <div className="flex items-center flex-col text-white gap-[20px]">
            <div className="relative">
                <img src={mage} alt="avatar" className="main__image"/>
                <div className="circle circle__pos"></div>
            </div>
            <h1>diziSXD</h1>
            <p>Strive not for <span className="text-yellow-500">succes</span>, but for the values it gives.</p>
        </div>
    );
};

export default Main;