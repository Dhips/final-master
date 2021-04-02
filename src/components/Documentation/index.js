import React from 'react'

import './index.css';
import SWOT from '../../documents/Lee, Sai On Ko - 2000 - Building balanced scorecard with SWOT analysis, and implementing “Sun Tzu’s The Art of Business Management.pdf';
import PI from '../../documents/Lew, Chin - 2020 - Decision support model mitigating scope variability in engineering R&D projects.pdf';
import PR from '../../documents/Progress Report.pdf';

export default function Documentation() {
    return (
        <div>
            <h1 className='ha'> Documentation </h1>
            <br></br>
            <div>
                <h3 style={{ paddingLeft: '28px', fontSize:'2vw', marginBottom: '0px' }}>1 Sundram, Chin - 2021 - Decision support model mitigating scope variability in engineering R&D projects</h3>
                <p style={{ paddingLeft: '28px', fontSize:'1.25vw' }}>This details further information on how to make current on-the-shelf DSM's more effective and efficient.</p>
                <p style={{ paddingLeft: '28px', fontSize:'1.25vw' }}>Refer to pg 11 and pg 21 for quick reference.</p>
                <iframe src={PR} className='pdf' title="Decision support model mitigating scope variability in engineering R&D projects"></iframe>
            </div>
            <br></br>
            <div>
                <h3 style={{ paddingLeft: '28px', fontSize:'2vw', marginBottom: '0px' }}>2 Lew, Chin - 2020 - Decision support model mitigating scope variability in engineering R&D projects</h3>
                <p style={{ paddingLeft: '28px', fontSize:'1.25vw' }}>This details the Performance Indicators and the Performance Indicators Ranking Table.</p>
                <p style={{ paddingLeft: '28px', fontSize:'1.25vw' }}>Refer to pg 8 and pg 9 for quick reference.</p>
                <iframe src={PI} className='pdf'title="Lew, Chin - 2020 - Decision support model mitigating scope variability in engineering R&D projects" ></iframe>
            </div>
            <br></br>
            <div>
                <h3 style={{ paddingLeft: '28px', fontSize:'2vw', marginBottom: '0px' }}>3 Lee, Ko - 2000 - Building balanced scorecard with SWOT analysis, and implementing “Sun Tzu’s The Art of Business Management</h3>
                <p style={{ paddingLeft: '28px', fontSize:'1.25vw' }}>This details further information on how to make the SWOT analysis more efficient.</p>
                <p style={{ paddingLeft: '28px', fontSize:'1.25vw' }}>Refer to pg 4 and pg 6 for quick reference.</p>
                <iframe src={SWOT} className='pdf' title="Building balanced scorecard with SWOT analysis, and implementing “Sun Tzu’s The Art of Business Management"></iframe>
            </div>
            <br></br>

        </div>
    )
}
