import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import BarChartIcon from '@mui/icons-material/BarChart';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

export default function Indicators(props) {
    return(
        <>     
            <div className='indicator'>
                <div className='indicatorIcon' style={{ background:"#8676FF"}}>
                <svg width="16.81" height="16.81" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.8747 17.3643L8.4107 12.8283L12.1814 16.6003L16.3907 
                    12.391L14 10.0003H20.6667V16.667L18.276 14.2763L12.1814 20.371L8.4107 
                    16.6003L5.1107 19.899C6.60858 22.1535 8.90753 23.7542 11.5417 
                    24.3768C14.1758 24.9994 16.9481 24.5973 19.2969 23.2519C21.6456 
                    21.9066 23.395 19.7187 24.1906 17.1315C24.9862 14.5444 24.7686 
                    11.7515 23.5817 9.3189C22.3948 6.88628 20.3275 4.99583 17.7988 
                    4.03065C15.27 3.06547 12.4688 3.09775 9.96295 4.12095C7.45707 5.14415 
                    5.4339 7.08173 4.30341 9.54107C3.17292 12.0004 3.01966 14.7975 3.8747 
                    17.3657V17.3643ZM1.82403 19.4417L1.8107 19.4283L1.81603 19.423C1.05594 
                    17.7163 0.664303 15.8686 0.666698 14.0003C0.666698 6.63633 6.63603 0.666992 
                    14 0.666992C21.364 0.666992 27.3334 6.63633 27.3334 14.0003C27.3334 21.3643 
                    21.364 27.3337 14 27.3337C8.57337 27.3337 3.9067 24.0937 1.82403 19.4417Z" fill="white"/>
                </svg>
                </div>
                <div className='indicatorText'>
                    <span id="name">Total earnings</span><br />
                    <span id="amnt">{props.earnings}</span>
                </div>                             
            </div>
            <div className='indicator'>
                <div className='indicatorIcon' style={{ background:"#66C8FF"}}>
                <svg width="16.81" height="16" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.666687 22.6667H27.3334V25.3333H0.666687V22.6667ZM0.666687 
                    4L7.33335 8.66667L14 0L20.6667 8.66667L27.3334 4V20H0.666687V4ZM3.33335
                     9.12133V17.3333H24.6667V9.12133L20.1067 12.3133L14 4.37333L7.89335 
                     12.3133L3.33335 9.12V9.12133Z" fill="white"/>
                </svg>
                </div>
                <div className='indicatorText'>
                    <span id="name">Sales</span><br />
                    <span id="amnt">{props.sales}</span>
                </div>
                
                
            </div>
            <div className='indicator'>
                <div className='indicatorIcon' style={{ background:"#FF9066"}}><BarChartIcon /></div>
                <div className='indicatorText'>
                    <span id="name">Purchase</span><br />
                    <span id="amnt">{props.purchase}</span>
                </div>
            </div>
        </>
    )
}