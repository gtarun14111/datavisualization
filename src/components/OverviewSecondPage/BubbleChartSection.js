import BubbleChart from "../widgets/BubbleChart/BubbleChart";
import Informer from "./BubbleChartOptions/Informer.js";
import Timeline from "./BubbleChartOptions/Timeline";
import SideButtons from "./BubbleChartOptions/SideButtons";

export default function BubbleChartSection() {
    return(
    <div className="bubbleGrid">
        <BubbleChart />
        <Informer />
        <Timeline />
        <SideButtons />
    </div>)
}