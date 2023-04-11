import styled from "styled-components/macro";
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';

const StyledDiv = styled.div`
height: 100vh;
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
`;

export default function BlankPage() {
    return (
        <StyledDiv className="blankPage">
            <ReportGmailerrorredIcon />
            Click on the overview section to view!
        </StyledDiv>
    )
}