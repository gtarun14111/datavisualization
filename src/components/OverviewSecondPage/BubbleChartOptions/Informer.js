import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import BarChartIcon from '@mui/icons-material/BarChart';

const informerData = [
    {
        name: "Trend goods",
        amount: "204",
        icon: <ControlPointIcon />
    },
    {
        name: "Shopping views",
        amount: "65,540",
        icon: <RemoveRedEyeOutlinedIcon />
    },
    {
        name: "Store dynamics",
        amount: "324",
        icon: <BarChartIcon />
    },
];


export default function Informer() {
    return (
        <div className="informerArea">
            {
                informerData.map((informerDetails) => {
                    return (
                        <div className="informer">
                            <div className='informerIcon'>{informerDetails.icon}</div>
                            <span className='informerName'>{informerDetails.name}</span>
                            <span className='informerAmount'>{informerDetails.amount}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}