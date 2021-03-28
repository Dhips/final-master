//Background of the project
import React from 'react';

import './index.css';
import HomeImg from '../../images/Home.jpg';

const Home = () => (
    <div>
        <h1>Hi there! Welcome to MyDSM</h1>
        <hr />
        <img className="images" src={HomeImg} alt="Home" />
        <h2> This project is aimed for Project Managers, such as yourself, who are in Multi-National Companies working on 
            New Product Development. The usage of MyDSM (My Decision Support Model) will allow
            you to have a better idea on the project continuity for New Product Development. Hope you find this useful and 
            I implore you to leave some feedback after trying this system out!
        </h2>
        <br></br>
        <h3>
            Yours Truly,
        </h3>
        <h4>
            Dhipan<br></br>
            Student<br></br>
            4th Year Mechanical, Material and Manufacturing Engineering <br></br>
            University of Nottingham Malaysia<br></br>
        </h4>
    </div>
);
 

export default Home;