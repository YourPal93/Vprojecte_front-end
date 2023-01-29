import React from 'react';
import { NavLink } from "react-router-dom";
import './Sidebar.css';

const Sidebar = () => {
    
    const menuData = [
        {
            path:"/my_page",
            name:"My page",
        },
        {
            path:"/feed",
            name:"Newsfeed",
        },
        {
            path:"/messenger",
            name:"My messenger",
        },
        {
            path:"/friends",
            name:"My friends",
        },
        {
            path:"/groups",
            name:"My groups",
        },
        {
            path:'/videos',
            name:'My videos',
        },
        {
            path:'/music',
            name:'My music',
        }
    ];

    return (
            <>
                <div className="sidebar">
                    {
                        menuData.map((item, index)=>(
                            <NavLink to={item.path} key={index} className="link">
                                <div className="link_text">{item.name}</div>
                            </NavLink>
                        ))
                    }
                </div>
            </>
    );
};

export default Sidebar;