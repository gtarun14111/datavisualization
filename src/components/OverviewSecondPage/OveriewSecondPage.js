import CardSection from "./CardSection"
import './SecondPage.css';
import BubbleChartSection from "./BubbleChartSection";

export default function SecondPage() {
    return (
        <div className="dashboard">
            <CardSection />
            <BubbleChartSection />
        </div>
    )
}