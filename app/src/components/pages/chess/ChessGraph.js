import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import GetData from '../../shared/GetData';
import FormatDate from '../../shared/FormatDate';
import { useWindowSize } from "@uidotdev/usehooks";

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        const dataPoint = payload[0].payload;
        return (
            <div className="custom-tooltip">
                <p className='on-graph'><b>{`${dataPoint.event}`}</b></p>
                <p className='on-graph'>{FormatDate(dataPoint.date)}</p>
                <p className='on-graph'>{`${dataPoint['pre-rating']} => ${dataPoint['post-rating']}`}</p>

            </div>
        );
    }

    return null;
};


const ChessGraph = () => {
    const [data, setData] = useState([]);
    const url = '/tourneys_fuzzed.json';
    const [filteredData, setFilteredData] = useState([])
    const windowSize = useWindowSize()

    function scale (number, inMin, inMax, outMin, outMax) {
        return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }

    function updateAspect() {
        return windowSize.width > 800 ? 1.5 : windowSize.width < 700 ? .9 : scale(windowSize.width, 700, 800, 1, 1,5)
    }

    useEffect(() => {
        GetData({ url, setData });
    }, []);

    useEffect(() => {
        setFilteredData(data.filter((obj) => obj.hasOwnProperty('pre-rating')).reverse());
    }, [data, setFilteredData])
    return (
        <>
            <ResponsiveContainer aspect={updateAspect()} width='100%' height='auto'>
                <LineChart
                    width='500'
                    height='300'
                    data={filteredData}
                    margin={{
                        top: 5,
                        left: 15,
                        bottom: 75,
                    }}
                >
                    <XAxis dataKey="date" angle={-45} textAnchor="end" interval={70} tickMargin={10} >
                    </XAxis>
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />
                    {/* <Legend iconType='plainline' layout='bottom' verticalAlign='bottom'/> */}
                    <Line type="monotone" strokeWidth={2} dataKey="post-rating" name="Rating" stroke="#659db8" dot={false}/>
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
