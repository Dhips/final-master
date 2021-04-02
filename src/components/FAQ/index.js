import React from 'react';
import './index.css';
import { Link } from 'react-router-dom'

import Grid from '@material-ui/core/Grid';

const FAQ = () => (
    <div>
        <h1 style ={{marginBottom: '-20px'}}>FAQ</h1>
        <Grid container spacing={3}>
            <Grid item xs={6} >
                <h2>
                    <ul>
                        <li>1 How do I use this website and where can I get more information?</li>
                        <ul >Visit <Link to="../help">Help and Support</Link> or watch this introductory <a href="https://www.youtube.com/watch?v=D60LPXcfQHY&t=3s&ab_channel=DhipanRaj" rel="noreferrer" target="_blank">video</a>.</ul>
                        <ul style ={{marginTop: '-5px'}}>You can also refer more in the 1st Paper in <Link to="../documentation">Documentation</Link> by Sundram, Chin - 2021 - Decision support model mitigating scope variability in engineering R&D projects.</ul>
                        <br></br>
                        <li>2 What does the SWOT table do?</li>
                        <ul>You can refer more in the 3rd Journal on Sun in <Link to="../documentation">Documentation</Link> by Lee, Ko - 2000 - Building balanced scorecard with SWOT analysis, and implementing “Sun Tzu’s The Art of Business Management.</ul>
                        <br></br>
                        <li>3 How do I complete the SWOT table?</li>
                        <ul>Visit <Link to="../help">Help and Support</Link> or watch the SWOT section in the <a href="https://www.youtube.com/watch?v=D60LPXcfQHY&t=3s&ab_channel=DhipanRaj" rel="noreferrer" target="_blank">video</a>.</ul>
                        <br></br>
                        <li>4 What does the PI Indicators do?</li>
                        <ul>You can refer more in the 2nd Journal in <Link to="../documentation">Documentation</Link> by Lew, Chin - 2020 - Decision support model mitigating scope variability in engineering R&D projects.</ul>
                        <br></br>
                        <li>5 How do I complete the PI Indicators?</li>
                        <ul>Visit <Link to="../help">Help and Support</Link> or watch this introductory <a href="https://www.youtube.com/watch?v=D60LPXcfQHY&t=3s&ab_channel=DhipanRaj" rel="noreferrer" target="_blank">video</a>.</ul>
                    </ul>
                </h2>
            </Grid>
            <Grid item xs={6}>
                <h2>
                    <ul>
                        <li>6 What does the PI Table do?</li>
                        <ul>You can refer more in the 2nd Journal in <Link to="../documentation">Documentation</Link> by Lew, Chin - 2020 - Decision support model mitigating scope variability in engineering R&D projects.</ul>
                        <br></br>
                        <li>7 How do I complete the PI Table?</li>
                        <ul>Visit <Link to="../help">Help and Support</Link> or watch the PI Table section in the <a href="https://www.youtube.com/watch?v=D60LPXcfQHY&t=3s&ab_channel=DhipanRaj" rel="noreferrer" target="_blank">video</a>.</ul>
                        <br></br>
                        <li>8 How do I complete the feedback form?</li>
                        <ul>Visit <Link to="../feedback">Feedback</Link> or watch the Feedback section in the <a href="https://www.youtube.com/watch?v=D60LPXcfQHY&t=3s&ab_channel=DhipanRaj" rel="noreferrer" target="_blank">video</a>.</ul>
                        <br></br>
                        <li>9 Where do I get further information?</li>
                        <ul>Visit <Link to="../help">Help and Support</Link> or watch this introductory <a href="https://www.youtube.com/watch?v=D60LPXcfQHY&t=3s&ab_channel=DhipanRaj" rel="noreferrer" target="_blank">video</a>.</ul>
                        <br></br>
                        <li>10 Who do I contact for any support or information?</li>
                        <ul>Visit <Link to="../contactus">Contact Us</Link> to drop us an email.</ul>
                    </ul>
                </h2>
            </Grid>
        </Grid>
    </div>
);

export default FAQ;