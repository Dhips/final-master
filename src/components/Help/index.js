//To explain briefly what people can do in this web application
import React from 'react';
import './index.css';

import HelpImg from '../../images/Help.jpg';
import YoutubeEmbed from "../YoutubeEmbed";

const HelpPage = () => (
    <div>
        <h1>How do I use this website?</h1>
        <img className="images" src={HelpImg} alt="Help" />
        <h2>
            <ul>
                <li>
                    <ol>
                        Step 1 || Create an account and Sign In
                    </ol>
                    <ol>
                        Step 2 || Click DSM, fill in the title and SWOT parameters
                    </ol>
                    <ol>
                        Step 3 || Select Performance Indicators
                    </ol>
                    <ol>
                        Step 4 || Rate Performance Indicators to
                        get the importance of different indicators
                        to your project
                    </ol>
                    <ol>
                        Step 5 || Print to get a report!
                    </ol> 
                    <ol>
                        Step 6 || Give some feedback &#128516; 
                    </ol>
                </li>                
            </ul>
            <br></br>
        </h2>
       <h1 textAlign='center'>Watch the video below if you want to learn more!</h1>
       <YoutubeEmbed embedId="rokGy0huYEA" />
    </div>
);

export default HelpPage;

/* To only allow authenticated users to use this
const condition = authUser => !!authUser;
                <li>
                    Click on Account to change your password
                    or reset your password in case it is
                    forgotten.
                </li>
export default withAuthorization(condition)(HomePage);
*/
