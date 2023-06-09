import { useState } from 'react';
import Header from '../../shared/Header';
import ChessMap from './ChessMap';
import ChessGraph from './ChessGraph';

import './chess.css'

function format_elem(li) {
    return (
        <>
            <ul style={{ "listStyleType": "none", "margin": "none", "justifyContent": "center", "paddingLeft": "5px", "paddingRight": "5px" }}>
                {li.map(function (elem, i) {
                    return (
                        <li margin-inline-block="10em" overflow-wrap="true" key={`${elem}:${i}`} >{elem}</li>
                    );
                })}
            </ul >
        </>
    );
}



function MakeStats({ data }) {
    if (!data) {
        return null;
    }


    return (
        data.map(function (elem, i) {
            return (
                <div className="chess-stats" key={`${elem}:${i}`}>
                    {format_elem(elem)}
                </div>
            );
        })
    );
}

const data = [
    [
        "US Chess rating: 2424",
        "State Ranking (VA) 2nd"
    ],
    [
        "US Chess National Master",
        "World Chess Federation FIDE Master "
    ],
    [
        "National Blitz Ranking (U21): 13th"
    ],
    [
        "Multiple National and State Championships"
    ],
    [
        "US Chess All American Team",
        <>🇺🇸 (
            <a target='_blank' rel='noreferrer' href='https://www.uschess.org/index.php/Press/2014-All-America-Chess-Team-Announced.html'>2014 </a>
            and
            <a target='_blank' rel='noreferrer' href='https://new.uschess.org/news/2017-all-american-team-announced'> 2017</a>
            ) 🇺🇸</>
    ],
    [
        "I have played all over!",
        "🇦🇪 🇿🇦 🇬🇷"
    ]
]

export default function ChessPage() {
    const page = 'chess';
    const [toggleMap, setToggleMap] = useState(false)

    return <>
        <Header page={page} />
        {!toggleMap && <h1 className='toggle-text'>Look at my progression!</h1>}
        {toggleMap && <h3 className='toggle-text'>Look where I have played!</h3>}
        <div className="chess-container">
            <div className="left-component">
                {data.length > 0 && <MakeStats data={data} />}
            </div>
            <div className="right-component">
                <div className="toggle-container">
                    <div className="toggle-button-container">
                        <button className='toggle-button' disabled={!toggleMap} onClick={() => setToggleMap(false)}>Graph</button>
                        <button className='toggle-button' disabled={toggleMap} onClick={() => setToggleMap(true)}>Map</button>
                    </div>
                </div>
                <div className='toggle-show'>
                    {toggleMap && <ChessMap />}
                    {!toggleMap && <ChessGraph />}
                </div>
            </div>
        </div>
    </>
};