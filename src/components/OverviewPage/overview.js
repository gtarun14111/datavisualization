import UserGraph from "./userDataGraph.js";
import Map from "../widgets/Map/map.js";
import SalesBar from "../widgets/SalesBar/SalesBar.js";
import './overview.css';
import Indicators from "./indicators.js";


export default function Overview() {
    const totalusers = "2,431,340";
    const sales = "1,205,677";
    const purchase = "48,430,039";
    const earnings = "540,549";
    const activeUsers = "92,980";
    const newUsers = "22,652";
    const salesFigures = "10,430";


    return (
        <>
        <div className="grid">
            <div className="infoOverview">
                <div className="heading">
                    WSTF Front-End Hackathon
                </div>
                <div className="totalUser">
                    <div className="userHeadline">All users<a> DETAIL {">"} </a><br /></div>
                    <div className="userAmount">{totalusers}</div>
                </div>
                <div className="indicatorsGroup">
                    <Indicators sales={sales} purchase={purchase} earnings={earnings}/>
                </div>
                <div className="userGraphs">
                    <UserGraph activeUser={activeUsers} newUser={newUsers} />
                </div>
            </div>
            <div className="MapSection">
                <Map />
            </div>
            <div>
            </div>
        </div>
                <div className="totalSales">
                    <SalesBar />
                </div>
        </>
    )
}