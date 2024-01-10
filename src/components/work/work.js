import React from 'react';
import './work.css';
import restaurant from '../../assets/restaurantres.png';
import movies from '../../assets/moviess.png';
import flashcards from '../../assets/flashcardsImg.png';
import decoder from '../../assets/decoderImg.png';
import library from '../../assets/libraryImg.png';
import homes from '../../assets/homesImg.png';

const Work = () => {
    return (
        <section id="work">
            <h2 className="workTitle">My Portfolio</h2>
            {/* <span className="workDescription">
                Created Applications Quiero salir a rumbiar y bailr toda la noche
            </span> */}
            <div className="workImgs">
                {[
                    { src: movies, alt: 'movies', description: 'BackEnd-built server and accessed data through a SQL database ' },
                    {
                        src: restaurant,
                        alt: 'restaurant',
                        description: 'Full-stack web application allows you to manage reservations for a restaurant ',
                    },
                    {
                        src: flashcards,
                        alt: 'flashcards',
                        description: 'Client- worked with rendering and state management using React ',
                    },
                    { src: decoder, alt: 'decoder', description: 'Client- built tricky algorithms as well as wrote unit tests with Mocha and Chai. ' },
                    { src: library, alt: 'library', description: 'Client- worked with large datasets and built algorithms based on those datasets ' },
                    { src: homes, alt: 'homes', description: 'Full-stack web application listing homes and realtor information' },
                ].map((item, index) => (
                    <div key={index} className="workItem">
                        <div className="descriptionBox">
                            <p className="imageDescription">{item.description}</p>
                        </div>
                        <img src={item.src} alt={item.alt} className="workImg" />
                    </div>
                ))}
            </div>
            <button className="workBtn">See More</button>
        </section>
    );
};

export default Work;
