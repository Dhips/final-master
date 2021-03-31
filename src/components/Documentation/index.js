import React from 'react'
import Report from '../../documents/hi.pdf';

export default function Documentation() {
    return (
        <div>
            <iframe src={Report} className='pdf'height="auto" width="80%" ></iframe>
        </div>
    )
}
