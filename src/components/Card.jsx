import React, { useRef } from 'react';
import CardImage from '../assets/ny.png';
import html2canvas from 'html2canvas';

const Card = ({ resulations }) => {


    const divRef = useRef(null);

    const handleSaveImage = () => {

        html2canvas(divRef.current).then((canvas) => {
            const image = canvas.toDataURL('image/png');
            console.log(image);

            const link = document.createElement('a');
            link.href = image;
            link.download = 'nyr.png';
            link.click();

        });
    };
    return (
        <div>
            <div className="card" ref={divRef}>
                <img src={CardImage} alt="Greetings Image" className='top-image' />
                <div className='container'>
                    <h1>My 2024 Resolutions are:</h1>
                    <ul>
                        {resulations.map((resolution, index) => (
                            <li key={index}>🎯 {resolution}</li>
                        ))}
                    </ul>
                </div>
                <div className='branding'>Craft yours: nyr.uthsob.me</div>
            </div>
            <div className='btn-group'>
                <button className='share-btn' onClick={handleSaveImage}>Save Image</button>
                <button className='share-btn'><a href="https://github.com/uthsobcb/new-year-resolution">Github</a></button>
            </div>
        </div>
    );
}

export default Card;
