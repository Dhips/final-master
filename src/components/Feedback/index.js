//Allows uses to give feedback on WebApp
import React from 'react';

import './index.css';
import FeedbackImg from '../../images/Feedback.jpg';

const Feedback = () => (
    <div>
        <h1>Would really appreciate your feedback!</h1>
        <img className="image" src={FeedbackImg} alt="Feedback" /> 
        <a href="https://forms.gle/YegvsqEsEx5kmRDJ7">
           <h2>
               Click here for the feedback form!
           </h2>
        </a>
    </div>
);

export default Feedback;
