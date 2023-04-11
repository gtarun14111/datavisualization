import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { VictoryScatter, VictoryChart, VictoryAxis } from 'victory';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 300,
  bgcolor: 'background.paper',
  border: '0',
  borderRadius: '2%',
  boxShadow: 24,
  p: 4,
};


const bubbleData = [
    {
      x: "Jan",
      amount: 0.18,
      category: "Users",
      y: 864
    },
    {
      x: "Feb",
      amount: 190.18,
      category: "Product",
      y: 364
    },
    {
      x: "Mar",
      amount: 667.22,
      category: "Sales",
      y: 312
    },
    {
      x: "Apr",
      amount: 544.62,
      category: "Product",
      y: 714
    },
    {
      x: "May",
      amount: 190.18,
      category: "Product",
      y: 664
    },
    {
      x: "Jun",
      amount: 832.69,
      category: "Team",
      y: 419
    },
    {
      x: "Jul",
      amount: 458.11,
      category: "Users",
      y: 834
    },
    {
      x: "Aug",
      amount: 635.61,
      category: "Sales",
      y: 567
    },
    {
      x: "Sep",
      amount: 846.18,
      category: "Team",
      y: 463
    },
    {
      x: "Oct",
      amount: 631.57,
      category: "Product",
      y: 554
    },
    {
      x: "Nov",
      amount: 716,
      category: "Product",
      y: 597
    },
    {
      x: "Dec",
      amount: 379.96,
      category: "Team",
      y: 903
    }
  ];

  bubbleData.map(Object => {
    Object.size = Object.amount / 20;
  })

export default function DisplayChart(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
        <svg  style={{ height: 0, width: 0 }}>
            <defs>
                <filter id="purpleShadow" >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="3.01631"/>
                    <feGaussianBlur stdDeviation="1.1069"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.517647 0 0 0 0 0.0509804 0 0 0 0 0.886275 0 0 0 0.0393604 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13697_124"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="7.24861"/>
                    <feGaussianBlur stdDeviation="2.66004"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.517647 0 0 0 0 0.0509804 0 0 0 0 0.886275 0 0 0 0.056545 0"/>
                    <feBlend mode="normal" in2="effect1_dropShadow_13697_124" result="effect2_dropShadow_13697_124"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="13.6485"/>
                    <feGaussianBlur stdDeviation="5.00862"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.517647 0 0 0 0 0.0509804 0 0 0 0 0.886275 0 0 0 0.07 0"/>
                    <feBlend mode="normal" in2="effect2_dropShadow_13697_124" result="effect3_dropShadow_13697_124"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="24.3466"/>
                    <feGaussianBlur stdDeviation="8.93452"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.517647 0 0 0 0 0.0509804 0 0 0 0 0.886275 0 0 0 0.083455 0"/>
                    <feBlend mode="normal" in2="effect3_dropShadow_13697_124" result="effect4_dropShadow_13697_124"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="45.5376"/>
                    <feGaussianBlur stdDeviation="16.711"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.517647 0 0 0 0 0.0509804 0 0 0 0 0.886275 0 0 0 0.10064 0"/>
                    <feBlend mode="normal" in2="effect4_dropShadow_13697_124" result="effect5_dropShadow_13697_124"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="109"/>
                    <feGaussianBlur stdDeviation="40"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.517647 0 0 0 0 0.0509804 0 0 0 0 0.886275 0 0 0 0.14 0"/>
                    <feBlend mode="normal" in2="effect5_dropShadow_13697_124" result="effect6_dropShadow_13697_124"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect6_dropShadow_13697_124" result="shape"/>
                </filter>

            </defs>
        </svg>
      <Button onClick={handleOpen} sx={props.sx}>
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.17 16.0025C4.3766 15.4169 4.75974 14.9099 5.2666 14.5512C5.77346 14.1926 6.37909 14 7 14C7.62091 14 8.22654 14.1926 8.7334 14.5512C9.24026 14.9099 9.6234 15.4169 9.83 16.0025H20V18.0025H9.83C9.6234 18.588 9.24026 19.095 8.7334 19.4537C8.22654 19.8123 7.62091 20.0049 7 20.0049C6.37909 20.0049 5.77346 19.8123 5.2666 19.4537C4.75974 19.095 4.3766 18.588 4.17 18.0025H0V16.0025H4.17ZM10.17 9.00245C10.3766 8.41692 10.7597 7.90988 11.2666 7.55124C11.7735 7.1926 12.3791 7 13 7C13.6209 7 14.2265 7.1926 14.7334 7.55124C15.2403 7.90988 15.6234 8.41692 15.83 9.00245H20V11.0025H15.83C15.6234 11.588 15.2403 12.095 14.7334 12.4537C14.2265 12.8123 13.6209 13.0049 13 13.0049C12.3791 13.0049 11.7735 12.8123 11.2666 12.4537C10.7597 12.095 10.3766 11.588 10.17 11.0025H0V9.00245H10.17ZM4.17 2.00245C4.3766 1.41692 4.75974 0.909884 5.2666 0.55124C5.77346 0.192596 6.37909 0 7 0C7.62091 0 8.22654 0.192596 8.7334 0.55124C9.24026 0.909884 9.6234 1.41692 9.83 2.00245H20V4.00245H9.83C9.6234 4.58798 9.24026 5.09502 8.7334 5.45366C8.22654 5.8123 7.62091 6.0049 7 6.0049C6.37909 6.0049 5.77346 5.8123 5.2666 5.45366C4.75974 5.09502 4.3766 4.58798 4.17 4.00245H0V2.00245H4.17ZM7 4.00245C7.26522 4.00245 7.51957 3.89709 7.70711 3.70956C7.89464 3.52202 8 3.26767 8 3.00245C8 2.73723 7.89464 2.48288 7.70711 2.29534C7.51957 2.10781 7.26522 2.00245 7 2.00245C6.73478 2.00245 6.48043 2.10781 6.29289 2.29534C6.10536 2.48288 6 2.73723 6 3.00245C6 3.26767 6.10536 3.52202 6.29289 3.70956C6.48043 3.89709 6.73478 4.00245 7 4.00245ZM13 11.0025C13.2652 11.0025 13.5196 10.8971 13.7071 10.7096C13.8946 10.522 14 10.2677 14 10.0025C14 9.73723 13.8946 9.48288 13.7071 9.29534C13.5196 9.10781 13.2652 9.00245 13 9.00245C12.7348 9.00245 12.4804 9.10781 12.2929 9.29534C12.1054 9.48288 12 9.73723 12 10.0025C12 10.2677 12.1054 10.522 12.2929 10.7096C12.4804 10.8971 12.7348 11.0025 13 11.0025ZM7 18.0025C7.26522 18.0025 7.51957 17.8971 7.70711 17.7096C7.89464 17.522 8 17.2677 8 17.0025C8 16.7372 7.89464 16.4829 7.70711 16.2953C7.51957 16.1078 7.26522 16.0025 7 16.0025C6.73478 16.0025 6.48043 16.1078 6.29289 16.2953C6.10536 16.4829 6 16.7372 6 17.0025C6 17.2677 6.10536 17.522 6.29289 17.7096C6.48043 17.8971 6.73478 18.0025 7 18.0025Z" fill="#A1A3D4"/>
        </svg>
        </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Sales Figures
          </Typography>
            <VictoryChart
            width={600}
            >
            <VictoryAxis 
                style= {{
                    axis: { stroke: "transparent" },
                    tickLabels: { fill: "rgba(56, 56, 116, 0.4)"},
  grid: { stroke: '#F1F1F5', strokeWidth: 1 },
                }}
                />
                <VictoryScatter 
                    data={bubbleData}
                    style= { {data: { 
                        fill: ({ datum }) => {
                            if(datum.category === "Users") {
                                return "#FAE634";
                            }
                            else if(datum.category === "Sales") {
                                return "#A46CE9";
                            }
                            else if(datum.category === "Product") {
                                return "#FC717D";
                            }
                            return "#695DFB";
                        },
                        filter: ({ datum }) => {
                            if(datum.category === "Sales") {
                                return "url(#purpleShadow)";
                            }
                            return null;
                        },
                        zIndex: 10,
                        mixBlendMode: "multiply",
                        height: 100,
                     }}}
                />
                
 
  <VictoryAxis dependentAxis
          style={{ 
            ticks: {stroke: "transparent"},
            axis: { stroke: "transparent" },
            tickLabels: { fill: "rgba(56, 56, 116, 0.4)" }
             }}
             domain={[0, 1000]}
             />
          
            </VictoryChart>
        </Box>
      </Modal>
    </div>
  );
}