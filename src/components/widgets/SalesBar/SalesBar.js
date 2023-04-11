import { VictoryArea, VictoryBar, VictoryChart, VictoryAxis } from "victory";
import './SalesBar.css';

export default function SalesBar() {
    const salesFigure = "10,430";
    const barData= [
        { x: 1, y: 200 },
        { x: 2, y: 203 },
        { x: 3, y: 205 },
        { x: 4, y: 204 },
        { x: 5, y: 260 },
        { x: 6, y: 204 },
        { x: 7, y: 220 },
        { x: 8, y: 206 },
        { x: 9, y: 212 },
        { x: 10, y: 216 },
        { x: 11, y: 215 },
        { x: 12, y: 192 },
        { x: 13, y: 233 },
        { x: 14, y: 245 },
        { x: 15, y: 174 },
        { x: 16, y: 196 },
        { x: 17, y: 194 },
        { x: 18, y: 192 },
        { x: 19, y: 196 },
        { x: 20, y: 212 },
        { x: 21, y: 226 },
        { x: 22, y: 205 },
        { x: 23, y: 205 },
        { x: 24, y: 204 },
        { x: 25, y: 260 },
        { x: 26, y: 204 },
        { x: 27, y: 220 },
        { x: 28, y: 206 },
        { x: 29, y: 212 },
        { x: 30, y: 216 },
        { x: 31, y: 215 },
        { x: 32, y: 192 },
        { x: 33, y: 233 },
        { x: 34, y: 245 },
        { x: 35, y: 174 },
        { x: 36, y: 196 },
        { x: 37, y: 194 },
        { x: 38, y: 192 },
        { x: 39, y: 196 },
        { x: 40, y: 212 },
        { x: 41, y: 226 },
        { x: 42, y: 205 },
        { x: 43, y: 105 },
        { x: 44, y: 204 },
        { x: 45, y: 160 },
        { x: 46, y: 204 },
        { x: 47, y: 220 },
        { x: 48, y: 106 },
        { x: 49, y: 112 },
        { x: 50, y: 116 },
        { x: 51, y: 115 },
        { x: 52, y: 132 },
        { x: 53, y: 253 },
        { x: 54, y: 145 },
        { x: 55, y: 174 },
        { x: 56, y: 196 },
        { x: 57, y: 194 },
        { x: 58, y: 192 },
        { x: 59, y: 196 },
        { x: 60, y: 112 },
        { x: 61, y: 126 },
        { x: 62, y: 105 },
    ]

    barData.forEach(object => {
        object.y0 = '30';
      });

    return(
        <>
        <div className="salesBar">
            <div className="salesChartHeading">
                Sales Figure
                <br />
                <h5>${salesFigure}</h5>
            </div>
            <svg style={{ height: 0, width: 0 }}>
                <defs>
                    <linearGradient id="solids" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FFA63F" />
                        <stop offset="13%" stopColor="#FFA63F"/>
                        <stop offset="13%" stopColor="#FF708B"/>
                        <stop offset="42%" stopColor="#FF708B"/>
                        <stop offset="43%" stopColor="#8676FF"/>
                        <stop offset="100%" stopColor="#8676FF"/>
                    </linearGradient>
                        <radialGradient id="earningGradient" fx="71%" fy="31%" >
                            <stop offset="0%" stopColor="#FFE3D3" />
                            <stop offset="96%" stopColor="rgba(179, 0, 183, 0.1)" />
                            <stop offset="100%" stopColor="rgba(255, 137, 119, 0.1)" />
                        </radialGradient>
                </defs>
            </svg>
            <div className="salesChart">
                <VictoryChart
                height={400}
                width={11000}
                padding={{ top: 0, bottom: 0, left: 18, right: 18 }}
                >

                <VictoryBar
                    data={barData}
                    barWidth={170}
                    height={20}
                    style={{ data: {
                        fill: ({ datum }) => {
                        if(datum.x > 18 && datum.x < 24) {
                            return "#FF708B";
                        }
                        else  {
                            return "#DBDFF1";
                        }
                        
                    }
                    }}}
                    padding={{ top: 0, bottom: 0, left: 40, right: 40 }}
                />
                <VictoryArea 
                    data= {[
                        {x: 1, y: 20},
                        {x: 62, y: 20} 
                    ]}
                    style={{
                      data: {fill: "url(#solids)"}
                    }}
                    height={20}
                    padding={{ top: 0, bottom: 0, left: 38, right: 38 }}
                />
                <VictoryAxis style={{ 
                  axis: {stroke: "transparent"}, 
                  ticks: {stroke: "transparent"},
                  tickLabels: { fill:"transparent"} 
                }} />
                </VictoryChart>
            
            </div>
        </div>
        </>
    )
}