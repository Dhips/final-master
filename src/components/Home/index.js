//Background of the project
import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';
import HomeImg from '../../images/Home.jpg';



const Home = () => (
    <div>
        <h1 className='ha'>Hi there! Welcome to MyDSM</h1>
        <hr />
        <img className="pictur" src={HomeImg} alt="Home" />
        <br></br>
        <h3 className='hb'> This project is aimed for Project Managers, such as yourself, who are in Multi-National Companies working on 
            New Product Development. The usage of MyDSM (My Decision Support Model) will allow
            you to have a better idea on the project continuity for New Product Development. Hope you find this useful and 
            I implore you to leave some feedback after trying this system out!
        </h3>
        <br></br>
        <h3 className='hb'>Click <Link to="../signup">here</Link> to get started!
        </h3>
        <br></br>
        <h4 className='hd'>
            Yours Truly,
        </h4>
        <h5 className='he'>
            Dhipan<br></br>
            Student<br></br>
            4th Year Mechanical, Material and Manufacturing Engineering <br></br>
            University of Nottingham Malaysia<br></br>
        </h5>
    </div>
);
 

export default Home;