import * as React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DynamicPieChart from './DynamicPieChart';
import LineGraphTable from './LineGraphTable';


export default function DynamicTable() {
    const style = {
        height: 'calc(58px + 13.7vw)',
    }
  return (
    <Card sx={style} elevation={5} alignItems="center">
      <CardContent>
        <DynamicPieChart />
        <Typography sx={{ fontSize: '0.7rem', textAlign: 'center', marginTop: "6px" }} color="#383874">
          Total earning
        </Typography>
        <Typography sx={{ fontSize: '1rem', lineHeight: '0.5rem', fontWeight: 600, textAlign: 'center', position: 'relative', top: '-0.5vh'}} variant="h5" color="#383874" component="div">
            $12,875
            <span className="changeIndicator" style={{display: "inline-flex", color: "#00B929", fontSize: "0.5rem"}}><ArrowDropDownIcon fontSize="small"/>2%</span>
        </Typography>
        <Typography sx={{ mb: 1.5, fontSize: '0.5rem', textAlign: 'center', opacity: '0.6' }}  color="#383874">
          Compared to $21,504 last year
        </Typography>
        <Typography variant="body2">
            <LineGraphTable />            
        </Typography>
      </CardContent>
    </Card>
  );
}