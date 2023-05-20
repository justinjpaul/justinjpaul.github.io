import { useState, useEffect } from 'react';
import Header from '../../shared/Header';
import GetData from '../../shared/GetData';
import ChessMap from './ChessMap';

import './chess.css'

function format_elem(li) {
    return (
        <>
            <ul style={{ "listStyleType": "none", "margin": "none", "justifyContent": "center" }}>
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

    useEffect(() => {
        GetData({ url, setData });
        console.log(data)
    }, []);


    return <>
        <Header page={page} />
        <div className="chess-container">
            <div className="left-component">
                {data.length > 0 && <MakeStats data={data} />}
            </div>
            <div className="right-component">
                <ChessMap />

            </div>

        </div>
    </>
};