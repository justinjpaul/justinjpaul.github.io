import { useState, useEffect } from 'react';
import Header from '../../shared/Header';
import GetData from '../../shared/GetData';
import ChessMap from './ChessMap';
import ChessGraph from './ChessGraph';

import './chess.css'

function format_elem(li) {
    return (
        <>
            <ul style={{ "listStyleType": "none", "margin": "none", "justifyContent": "center", "paddingLeft":"5px", "paddingRight":"5px" }}>
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


export default function ChessPage() {
    const page = 'chess';
    const url = "/chess_stats.json";
    const [data, setData] = useState([]);
    const [toggleMap, setToggleMap] = useState(false)
    const [timeRange, setTimeRange] = useState([0, data.length - 1]);

    useEffect(() => {
        GetData({ url, setData });
    }, []);


    return <>
        <Header page={page} />
        <div className="chess-container">
            <div className="left-component">
                {data.length > 0 && <MakeStats data={data} />}
            </div>
            <div className="right-component">
                <div className="toggle-container">
                    {!toggleMap && <span className='toggle-text'>Look at my progression!</span>}
                    {toggleMap && <span className='toggle-text'>Look where I have played!</span>}
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