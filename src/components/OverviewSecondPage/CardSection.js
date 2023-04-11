import DynamicTable from "../widgets/DynamicTable/DynamicTable"
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IndicatorTable from "../widgets/IndicatorTable/IndicatorTable";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const indexHeadStyle = {
  fontSize: '3vh',
  lineHeight: '0.5rem',
  fontWeight: 400,
  color: "white",
  position: 'relative',
  top: '-0.5vh',
}

function CompositeIndexCard(props) {
  return (
    <Card elevation={7} sx={{ backgroundColor: '#8676FF'}}>
      <CardContent sx={{ padding: '18px', color: 'white'}}>
        <Typography variant="caption" sx={{ fontSize: '9.3px', fontWeight: "300" }} >
          Total Earning
        </Typography>
      <Typography sx={indexHeadStyle} variant="h5" color="#383874" component="div">
            $12,875
            <span className="changeIndicator" style={{display: "inline-flex", color: "#38F261", fontSize: "0.5rem"}}><ArrowDropDownIcon fontSize="small"/>2%</span>
        </Typography>
        <Typography variant="caption" sx={{ fontSize: '8.3px', opacity: '0.6' }}>
          Compared to $21,490 last year
        </Typography>
      <Divider  sx={{ backgroundColor: '#6B5ED2'}}/>
        <Typography variant="caption" sx={{ fontSize: '9.3px', fontWeight: "300" }} >
          Sales
        </Typography>
      <Typography sx={indexHeadStyle} variant="h5" color="#383874" component="div">
            $43,123
            <span className="changeIndicator" style={{display: "inline-flex", color: "#38F261", fontSize: "0.5rem"}}><ArrowDropDownIcon fontSize="small"/>2%</span>
        </Typography>
        <Typography variant="caption" sx={{ fontSize: '8.3px', opacity: '0.6' }}>
          Compared to $21,490 last year
        </Typography>
      </CardContent>
    </Card>
  );
}

function IndicatorTableCard(props) {
    return (
      <Card elevation={7} sx={{ borderRadius: 4}} >
        <CardContent sx={{ padding: '9px 18px 9px 18px',
      "&:last-child": { padding: "9px 18px 9px 18px" } }}>
          <IndicatorTable />
        </CardContent>
      </Card>
    );
  }

export default function CardSection() {
    return (
      <div className="cardSection">
            
      <Typography variant="h6" sx={{color: "#000000"}}>
        Design Faster
      </Typography>
            <DynamicTable />
            <CompositeIndexCard />
            <IndicatorTableCard />
        </div>
    )
}