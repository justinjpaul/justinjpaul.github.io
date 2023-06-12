import { useState } from 'react';
import Header from '../../shared/Header';
import ChessMap from './ChessMap';
import ChessGraph from './ChessGraph';

import './chess.css'

function format_elem(li) {
    return (
        <>
            <ul style={{ "listStyleType": "none", "margin": "none", "justifyContent": "center", "padding": ".5em" }}>
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
        <>
        <img src='/pics/usa-flag-xs.png' alt='USA Flag' height='13px' width='auto'></img>
            &nbsp;(<a target='_blank' rel='noreferrer' href='https://www.uschess.org/index.php/Press/2014-All-America-Chess-Team-Announced.html'>2014 </a>
            and
            <a target='_blank' rel='noreferrer' href='https://new.uschess.org/news/2017-all-american-team-announced'> 2017</a>)&nbsp;
        <img src='/pics/usa-flag-xs.png' alt='USA Flag' height='13px' width='auto'></img>
        </>
    ],
    [
        "I have played all over!",
        <>
            <img src='/pics/uae-flag-xs.png' alt='UAE Flag' height='13px' width='auto'></img>&nbsp;
            &nbsp;<img src='/pics/south-africa-flag-xs.png' alt='South Africa Flag' height='13px' width='auto'></img>&nbsp;
            &nbsp;<img src='/pics/greece-flag-xs.png' alt='Greece Flag' height='13px' width='auto'></img>
        </>
    ]
]

export default function ChessPage() {
    const page = 'chess';
    const [toggleMap, setToggleMap] = useState(false)

    return <>
        <Header page={page} />
        <div className="chess-container main-body">
            <div className="left-component">
                {data.length > 0 && <MakeStats data={data} />}
            </div>
            <div className="right-component">
                <div className="toggle-container">
                    <div className="toggle-button-container">
                        {!toggleMap && <div>
                            <span className='toggle-text'>Look at my rating progression!</span>
                            <p style={{color: '#659db8', alignSelf: 'center', display: 'flex', marginBottom: '0em', marginTop: '.2em'}}>Click/hover over the graph for more info</p>
                            </div>}
                        {toggleMap && <span className='toggle-text'>Look where I have played!</span>}
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