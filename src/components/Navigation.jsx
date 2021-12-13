import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <div className="navigation">
                <NavLink className={({isActive})=> isActive ? "nav-active":""} to="/">Accueil</NavLink>
                <NavLink className={({isActive})=> isActive ? "nav-active":""}  to="/news">News</NavLink>
                <NavLink className={({isActive})=> isActive ? "nav-active":""}  to="/a-propos">A propos</NavLink>
            </div>
        </div>
    );
};

export default Navigation;