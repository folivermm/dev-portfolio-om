import React from 'react'
import './work.css'
import restaurant from "../../assets/restaurant.jpeg"
import movies from "../../assets/movies.jpeg"
import flashcards from "../../assets/flashcards.jpeg"
import decoder from "../../assets/decoder.jpeg"
import library from "../../assets/library.jpeg"
import homes from "../../assets/homes.jpeg"

const Work = () => {
    return (
        <section id='work'>
            <h2 className='workTitle'>My Portolio</h2>
            <span className='workDescription'>Created Applications Quiero salir a rumbiar y bailr todo la noche</span>
            <div className='workImgs'>
                <img src={movies} alt='movies' className='workImg' />
                <img src={restaurant} alt='restaurant' className='workImg' />
                <img src={flashcards} alt='flashcards' className='workImg' />
                <img src={decoder} alt='decoder' className='workImg' />
                <img src={library} alt='library' className='workImg' />
                <img src={homes} alt='homes' className='workImg' />
            </div>
            <button className='workBtn'>See More</button>
        </section>
    )
}

export default Work