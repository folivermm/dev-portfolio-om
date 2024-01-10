import React from 'react';
import './work.css';
import restaurant from '../../assets/restaurantres.png';
import movies from '../../assets/moviess.png';
import flashcards from '../../assets/flashcardsImg.png';
import decoder from '../../assets/decoderImg.png';
import library from '../../assets/libraryImg.png';
import homes from '../../assets/homesImg.png';

const Work = () => {
    const handleSeeMoreClick = () => {
        window.open('https://github.com/folivermm', '_blank');
    };
    return (
        <section id="work">
            <h2 className="workTitle">My Portfolio</h2>
            <div className="workImgs">
                {[
                    {
                        src: movies,
                        alt: 'movies',
                        description: 'BackEnd-built server and accessed data through a SQL database',
                        sourceCodeUrl: 'https://github.com/folivermm/movies-back-end',
                        liveSiteUrl: 'https://client-movies.onrender.com'
                    },

                    {
                        src: restaurant,
                        alt: 'restaurant',
                        description: 'Full-stack web application allows you to manage reservations for a restaurant ',
                        sourceCodeUrl: 'https://github.com/folivermm/starter-restaurant-reservation',
                        liveSiteUrl: 'https://restaurant-reservation-frontend-l9hu.onrender.com'
                    },
                    {
                        src: flashcards,
                        alt: 'flashcards',
                        description: 'Client- worked with rendering and state management using React ',
                        sourceCodeUrl: 'https://github.com/folivermm/flashcards',
                    },
                    {
                        src: decoder,
                        alt: 'decoder',
                        description: 'Client- built tricky algorithms as well as wrote unit tests with Mocha and Chai.',
                        sourceCodeUrl: 'https://github.com/folivermm/decoder-ring',
                    },
                    {
                        src: library,
                        alt: 'library',
                        description: 'Client- worked with large datasets and built algorithms based on those datasets',
                        sourceCodeUrl: 'https://github.com/folivermm/library',
                    },
                    {
                        src: homes,
                        alt: 'homes',
                        description: 'Full-stack web application listing homes and realtor information',
                        sourceCodeUrl: 'https://github.com/folivermm/homes',
                        liveSiteUrl: 'https://homes-client.onrender.com'
                    },
                ].map((item, index) => (
                    <div key={index} className="workItem">
                        <div className="imageContainer">
                            <div className="descriptionBox">
                                <p className="imageDescription">{item.description}</p>
                            </div>
                            <img src={item.src} alt={item.alt} className="workImg" />
                            <div className="hoverOverlay">
                                <a href={item.sourceCodeUrl} className="sourceCodeButton" target="_blank" rel="noopener noreferrer">Source Code</a>
                                {item.liveSiteUrl && (
                                    <a href={item.liveSiteUrl} className="liveSiteButton" target="_blank" rel="noopener noreferrer">Live Site</a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button className="workBtn" onClick={handleSeeMoreClick}>See More</button>
        </section>
    );
};

export default Work;
