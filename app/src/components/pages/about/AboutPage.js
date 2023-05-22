import { useState } from 'react';
import Header from '../../shared/Header';
import './about.css'

const slides = [
    {
        url: '/lake_lag_me.jpg',
        caption: 'A filled Lake Lag'
    },
    {
        url: '/sf_sea_lion_me.png',
        caption: 'Pier 39'
    },
    {
        url: '/sis_and_me.jpg',
        caption: 'My sister and me at the Big House!'
    },
    {
        url: '/trumpet_me.jpg',
        caption: "Playin' my trumpet!"
    },
];

export default function AboutPage() {
    const page = '';

    const [currentSlide, setCurrentSlide] = useState(0);

    return <>
        <Header page={page} />
        <div height="90%">
            <div className="intro">
                <div className='intro-pic-container'>
                    <div className="slideshow-button-container">
                        <button className='toggle-button slideshow-button' disabled={currentSlide === 0} onClick={() => setCurrentSlide(Math.max(currentSlide - 1, 0))}>Prev</button>
                        <button className='toggle-button slideshow-button' disabled={currentSlide === slides.length - 1} onClick={() => setCurrentSlide(Math.min(currentSlide + 1, slides.length - 1))}>Next</button>
                    </div>
                    {slides.map((slide, index) => (
                        currentSlide === index && <div key={`intro-pic-${index}`}>
                            <img className='intro-pic' src={slide.url} alt={slide.caption}></img>
                            <span margin='none'>{slide.caption}</span>
                            <br></br>
                        </div>
                    ))}
                </div>

                <div className='intro-text'>
                    <p>Hi! My name is Justin and I am a senior at the University of Michigan 〽️ studying computer science.
                    </p>
                    <p>I'm originally from Northern VA, where I graduated from <a href='https://tjhsst.fcps.edu/' rel='noreferrer' target='_blank'>Thomas Jefferson High School for Science and Technology</a>.
                        One of my fondest memories is making the varsity tennis team as a senior after barely missing the cut the previous three years.
                    </p>
                    <p>Currently, I am a machine learning student researcher for ProQuest. I am involved in various clubs and activities, including Rec Tennis, Chess Club, and the Michigan Data Science Team.
                        I love playing games, from board games like chess or Settlers of Catan to video games like Mario Bros.
                    </p>
                </div>
            </div>

        </div>
    </>
};