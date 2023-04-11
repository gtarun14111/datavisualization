import { VictoryPie, } from 'victory';
import './DynamicTable.css';

const outerData = [
    { x: "presentation", y: 21, color: "#8676FF" },
    { x: "development", y: 62, color: "#FF708B" },
    { x: "rest", y: 17, color: "#DBDFF1" }
]

const innerData = [
    { x: "research", y: 87, color: "#FFBA69" },
    { x: "rest", y: 17, color: "#DBDFF1" }
]

export default function DynamicPieChart() {
    return(
        <div className='dynamicPie'>
        <svg width={80} height={80}>
            <g>
                <circle width={40} height={40} fill="#F4F6FF" cx="50%" cy="50%" r={20}></circle>
            </g>
            <g>                
            <circle width={30} height={30} fill="#8676FF" cx="50%" cy="50%" r={10}></circle>
            </g>
            <g>                
            <circle width={30} height={30} fill="#F4F6FF" cx="50%" cy="50%" r={8}></circle>
            </g>
            <g> 
            <polygon width={30} height={30} cx="50%" cy="50%" points="40 45, 40 35, 35 40, 45 40" fill="none" stroke="#8676FF" />
            </g>
            <VictoryPie
                standalone={false}
                innerRadius={36}
                data={outerData} 
            style={{
                data: {
                    fill: ({ datum }) => { return(datum.color) }
                }}}
                radius={40}
                cornerRadius={({ datum }) => datum.y * 20}
                padding={0}
                labels={() => null}
                width={80} height={80}
            />
            <VictoryPie
                standalone={false}
                innerRadius={28}
                radius={32}
                cornerRadius={34}
                padding={0}
                labels={() => null}
                width={80} height={80}
                data={innerData} 
            style={{
                data: {
                    fill: ({ datum }) => { return(datum.color) }
                }}}
            />
        </svg>
        </div>
    )
}