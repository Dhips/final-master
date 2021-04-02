//To display previously completed DSM reports
import React from 'react';

import './index.css';
import ArchiveImg from '../../images/Archive.jpg';

const Archive = () => (
    <div>
        <h1 className ='ha'>Archive</h1>
        <img className="pictur" src={ArchiveImg} alt="Archive" />
    </div>
);

export default Archive;