//Allows uses to give feedback on WebApp
import React from 'react';

import './index.css';
//import FeedbackImg from '../../images/Feedback.jpg';
//<img className="pictur" src={FeedbackImg} alt="Feedback" /> 

const Feedback = () => (
    <div className='hc'>
        <h1 className='ha' style = {{textAlign: 'center', padding: '5px', paddingBottom: '5px'}} >Any feedback?</h1>
        <div class="center" style ={{paddingBottom:'10px'}}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/vH9_AFg_Uk8?start=302" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        <h2 className='hc' style = {{textAlign: 'center', padding: '30px', paddingTop: '20px'}}>
            Click<a href="https://forms.gle/YegvsqEsEx5kmRDJ7" rel="noreferrer" target="_blank"> here </a>for the feedback form!
        </h2> 
    </div>
);

export default Feedback;
