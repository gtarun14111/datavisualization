import { VictoryAxis, VictoryChart, VictoryScatter} from 'victory';
import React from 'react';
import BubbleComponent from './BubbleComponent';
import BubbleChartComponentStyle from './BubbleChartComponentStyles';


export default function BubbleChart() {
    const bubbleData = [
        { x: -1, y: 8, size: 91, category: "design1", name: "Investments", time: {
            "3 month": "$76,644"
        } },
        { x: 4, y: 1.8, size: 18, category: "design1" },
        { x: 1.15, y: 9, size: 41, category: "design2", name: "Development", amount: "$31,657" },
        { x: 3, y: 8, size: 32, category: "design2", name: "Finance", amount: "$23,657" },
        { x: -0.5, y: 4.8, size: 37, category: "design2", name: "Business", amount: "$21,987" },
        { x: 3, y: 1, size: 32, category: "design2" },
        { x: 1, y: 1.3, size: 25, category: "design2" },
        { x: 4.7, y: 3.3, size: 18, category: "design3" },
        { x: 1.3, y: 6, size: 20, category: "design3" },
        { x: 4.2, y: 2.3, size: 18, category: "design3" },
        { x: 0.6, y: 3.4, size: 17, category: "design4" },
        { x: -3, y: 6, size: 29, category: "design4" },
        { x: 6, y: 8, size: 32, category: "design4" },
        { x: 5, y: 0.4, size: 37, category: "design4" },
        { x: -0.3, y: 6.3, size: 29, category: "design5" },
        { x: 4.4, y: 5, size: 22, category: "design6" },
        { x: 0.8, y: 7.4, size: 27, category: "design6" },
        { x: 0.4, y: 8, size: 22, category: "design6" },
        { x: 5.11, y: 4.4, size: 23, category: "design6" },
    ];
    return(
        <>
        <div className='bubbleChart'>
            <div className='bubbleGraph'>
            <BubbleChartComponentStyle />
            <svg width="100%" height="100%">
                <circle cx="50%" cy="50%" r="30vh" fill="#fff"/>
                <circle cx="50%" cy="50%" r="35vh" stroke="rgba(255, 255, 255, 0.3)" stroke-width="2vh" fill="none" />
                <VictoryChart
                standalone={false}
                padding={0}
                width={800}
                height={600}
                domain={{x: [-3, 8], y: [-5, 12]}}>
                    <VictoryScatter
                    standalone={false}
                    data={bubbleData}
                    dataComponent={<BubbleComponent />}
                    />
                    <VictoryAxis 
                    style={{ 
                        axis: {stroke: "transparent"}, 
                        ticks: {stroke: "transparent"},
                        tickLabels: { fill:"transparent"} 
                      }} />
                </VictoryChart>
            </svg>
            </div>
                        
        </div></>

    )
}
