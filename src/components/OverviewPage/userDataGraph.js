import { VictoryPie } from "victory";

function UserDeatil(props) {

    const percent = props.percentage;
    const color = props.color;
    return(
        <div className="userGraph">
            <div>

        <svg width={55} height={55}>
        <text x="50%" y="50%" textAnchor="middle" dy=".3em"> {percent}% </text>
        <VictoryPie
            standalone={false}
            width={55} height={55}
            innerRadius={26}
            cornerRadius={26}
            padding={0}
            data={[
                { x: "user", y: percent, label: "" },
                { x: "rest", y: 100-percent, label: "" },
            ]}
            style={{
                data: {
                    fill: ({ datum }) => {
                        if(datum.x === "user") {
                            return color;
                        }
                        else  {
                            return "#DBDFF1";
                        }
                    }
                }}}
                labels={() => null}
                />
        </svg>
                </div>
        <div className="text">
            <span id="amnt">{props.amount}</span>
            <br />
            <span id="name">{props.type}</span>
        </div>
    </div>

    )
}

export default function UserGraph(props) {
    return(
    <div className="userGraphSection">
    <UserDeatil percentage={27} amount={props.activeUser} type="Active Users" color="#023AFF"/>
    <UserDeatil percentage={67} amount={props.newUser} type="New Users" color="#00B929"/>
    </div>
    )
}