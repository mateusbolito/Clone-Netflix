import React from 'react';
import './Header.css';

export default ({black}) => {
    return( 
        <header className={black ? 'black' : ''}> 
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"></img>
                    
                </a>
            </div>
            <div className="header--user">
                <a href='/'>
                <img src="https://cdn-icons-png.flaticon.com/512/743/743230.png"></img>

                </a>
               
            </div>
        </header>

    );
}
