import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

const StyledAccordion = styled(Accordion)({
    
    width: '100%',
    color: '#fff !important',
    backgroundColor: '#a51b0b',
    textDecoration: 'none',
    padding: 1,
    margin: 0,
  });

const StyledAccordionSummary = styled(AccordionSummary)({
    color: '#fff !important',
    backgroundColor: '#a51b0b',
    padding: 1,
    width: '9rem',
    margin: 0,
    //borderRadius: 4,
  });

  const StyledAccordionTypography = styled(Typography)({
    color: '#fff !important',
    backgroundColor: '#a51b0b',
    fontSize: '13px',
    '&:hover': {
        color: "#C78C19 !important",
        transform: 'scale(1.1)',  
        
    }
  });

  const StyledAccordionDetails = styled(AccordionDetails)({
    display: 'flex',
    flexDirection: 'column',
    color: '#fff !important',
    backgroundColor: '#a51b0b',
    width: '100%',
    textDecoration: 'none',
    fontSize: '16px',
    fontColor: '#fff !important',
    height: '20%',

    '& > a:hover': {
     color: '#C78C19 !important',
     transform: 'scale(1.03)',    
    }

    ,'& > a:active': { 
      color: '#C78C19!important',
      transform:'scale(1.03)',    
    }
    
  });

 

export default function SimpleAccordion(props) {

  return (
    <div>
      <StyledAccordion>
        <StyledAccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:"white", fontSize: "18px"}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <StyledAccordionTypography >{props.titulo.toUpperCase()}</StyledAccordionTypography>
        </StyledAccordionSummary>

        <StyledAccordionDetails>
                <Link to={`/${props.titulo.toUpperCase()}`}style={{textDecoration: "none", color: "white", paddingBottom: ".6rem"}}>Listar</Link>
                <Link to={`/${props.titulo.toUpperCase()}/Adicionar`}style={{textDecoration: "none", color: "white", paddingBottom:".6rem"}}>Adicionar</Link>
                <Link to={`/${props.titulo.toUpperCase()}/Editar`}style={{textDecoration: "none", color: "white"}}>Editar</Link>
        </StyledAccordionDetails>
      </StyledAccordion>
    </div>
  );
}