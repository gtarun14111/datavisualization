import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const timelines = ['1W', '1M', '3M', '1Y', 'ALL',]

const backgroundDesign = (active, entry) => {
    if(active === entry){
        return (      
            { 
                width: 60,
                borderRadius: 7,
                backgroundColor: "blue"
            }
        )
    }
    else {
        return ( 
            {
                width: 60,
                borderRadius: 7,
                backgroundColor: "white",
                border: 0
            }
        )
    }
}

function TimelineButtonGroup() {
    const [active, setActive] = React.useState('3M');

  return (
    <ButtonGroup
    aria-label="outlined primary button group">
        {timelines.map((entry) => {
            return (
                <Button 
                sx= {backgroundDesign(active, entry)}
                variant = {active === entry ? "contained" : "outlined"}
                onClick={() => {
                    setActive(entry);
                }}
                >{entry}</Button>
            )
        })}
    </ButtonGroup>
  );
}

export default function Timeline() {
    return(
        <div className='timeline'>
            <span className='timelineHead'>Timeline</span>
            <TimelineButtonGroup />

        </div>
    )

}