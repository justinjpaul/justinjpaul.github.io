import { useState } from 'react';
import Header from '../../shared/Header';
import './about.css'

const slides = [
    {
        url: '/pics/lake_lag_me.jpg',
        caption: <>Standing in front of a filled <a referrer='noreferrer' target='_blank' href='https://stanforddaily.com/2023/01/09/so-much-more-alive-stanford-students-rejoice-over-full-lake-lag/'>Lake Lag</a>'</>
    },
    {
        url: '/pics/sf_sea_lion_me.png',
        caption: 'At Pier 39'
    },
    {
        url: '/pics/sis_and_me.jpg',
        caption: 'At the Big House with my sister!'
    },
    {
        url: '/pics/trumpet_me.jpg',
        caption: "Playin' my trumpet!"
    },
];

export default function AboutPage() {
    const page = '';

    const [currentSlide, setCurrentSlide] = useState(0);

    return <>
        <Header page={page} />
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
                    </div>
                ))}
            </div>

            <div className='intro-text'>
                <p>
                    Hi! My name is Justin and I am a senior at the University of Michigan 〽️ studying computer science.
                </p>
                <p>I'm originally from Northern VA, where I graduated from Thomas Jefferson High School for Science and Technology.
                    One of my fondest memories is making the varsity tennis team as a senior after barely missing the cut the previous three years.
                </p>
                <p>Currently, I am a machine learning student researcher for ProQuest. I am involved in various clubs and activities, including Rec Tennis, Chess Club, and the Michigan Data Science Team.
                    I love playing games, from board games like chess or Settlers of Catan to video games like Mario Bros.
                </p>
            </div>
        </div>
    </>
};