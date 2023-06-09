import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import GetData from '../../shared/GetData';
import FormatDate from '../../shared/FormatDate';


const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        const dataPoint = payload[0].payload;
        return (
            <div className="custom-tooltip">
                <p><b>{`${dataPoint.event}`}</b></p>
                <p>{FormatDate(dataPoint.date)}</p>
                <p>{`${dataPoint['pre-rating']} => ${dataPoint['post-rating']}`}</p>

            </div>
        );
    }

    return null;
};


const ChessGraph = () => {
    const [data, setData] = useState([]);
    const url = '/tourneys_fuzzed.json';
    const [filteredData, setFilteredData] = useState([])

    useEffect(() => {
        GetData({ url, setData });
    }, []);

    useEffect(() => {
        setFilteredData(data.filter((obj) => obj.hasOwnProperty('pre-rating')).reverse());
    }, [data, setFilteredData])


    return (
        <>
            <ResponsiveContainer aspect={1.5}>
                <LineChart
                    width={500}
                    height={300}
                    data={filteredData}
                    margin={{
                        top: 5,
                        // right: 10,
                        left: 20,
                        bottom: 75,
                    }}
                >
                    <XAxis dataKey="date" angle={-45} textAnchor="end" interval={70} tickMargin={10} >
                    </XAxis>
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />
                    <Legend verticalAlign='top' />
                    <Line type="monotone" strokeWidth={2} dataKey="post-rating" stroke="#8884d8" dot={false}/>
                </LineChart>
            </ResponsiveContainer>
            {/* <MultiRangeSlider
                min={0}
                max={data.length - 1}
                values={timeRange}
                onChange={handleSliderChange}
                onAfterChange={handleSliderChange}
                thumbColor="#007bff"
                trackColor="#ccc"
            /> */}

        </>
    );
}

export default ChessGraph
