import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AdjustIcon from '@mui/icons-material/Adjust';
import CommitIcon from '@mui/icons-material/Commit';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import SettingsInputComponentOutlinedIcon from '@mui/icons-material/SettingsInputComponentOutlined';
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


const iconsArray = [
    [<AddIcon />, <RemoveIcon />],
    [<AdjustIcon />],
    [<TimelineOutlinedIcon />,<CommitIcon />, <SettingsInputComponentOutlinedIcon />]
    ]

const buttonGroupStyle = {
    borderRadius: 3,
    backgroundColor: "white",
    border: "0 !important",
    color: "#5A5A89",
    boxShadow: "0px 100px 80px rgba(108, 73, 172, 0.07), 0px 41.7776px 33.4221px rgba(108, 73, 172, 0.0503198), 0px 22.3363px 17.869px rgba(108, 73, 172, 0.0417275), 0px 12.5216px 10.0172px rgba(108, 73, 172, 0.035), 0px 6.6501px 5.32008px rgba(108, 73, 172, 0.0282725), 0px 2.76726px 2.21381px rgba(108, 73, 172, 0.0196802)"
}

export default function SideButtons() {
    return(
        <div className='sideButtons'>
        {
        iconsArray.map((iconsArray) => {
            return ( 
                
    <ButtonGroup
    aria-label="outlined primary button group"
    orientation='vertical'
    variant = "text"
    elevation={4}
    sx={buttonGroupStyle}
    >
        {iconsArray.map((entry) => {
            return (
                <Button 
                elevation={4}
                sx={buttonGroupStyle}>{entry}</Button>
            )
        })}
    </ButtonGroup>
            )
        })
        }
        </div>
    )

}