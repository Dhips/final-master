//Allows uses to give feedback on WebApp
import React from 'react';

import './index.css';
import FeedbackImg from '../../images/Feedback.jpg';

const Feedback = () => (
    <div className='hc'>
        <h1 className='ha' style = {{textAlign: 'center', padding: '5px', paddingBottom: '5px'}} >Any feedback?</h1>
        <img className="pictur" src={FeedbackImg} alt="Feedback" /> 
        <h2 className='hc' style = {{textAlign: 'center', padding: '30px', paddingTop: '20px'}}>
            Click<a href="https://forms.gle/YegvsqEsEx5kmRDJ7" rel="noreferrer" target="_blank"> here </a>for the feedback form!
        </h2> 
    </div>
);

export default Feedback;
