import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import './App.css';
import CovidSpreadTableByAge from './components/CovidSpreadTableByAge/CovidSpreadTableByAge';
import DeathsList from './components/DeathList/DeathList';
import VaccinatedInfoList from './components/VaccinatedInfoList/VaccinatedInfoList';
import vaccinated from "./vaccinated.PNG";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h5>COVID-19 IN BULGARIA</h5>
        <div className="Accordion-container">
          <Accordion expanded={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Разпространение на COVID-19 по възрастови групи</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <CovidSpreadTableByAge />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Ваксинирани срещу COVID-19 по възрастови групи</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <img width={830} height={90} src={vaccinated} alt="Vaccinanted" />
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>Ваксинирани хоспитализирани и починали от COVID-19 по възрастови групи</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <VaccinatedInfoList />
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <Typography>Починали от COVID-19 по възрастови групи</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <DeathsList />
            </AccordionDetails>
          </Accordion>
          <div className="App-small-text">* Данните са взети от <a href="https://data.egov.bg/data/resourceView/18851aca-4c9d-410d-8211-0b725a70bcfd" target="_blank" rel="noreferrer">Портал за отворени данни</a> и е възможно да има неточности!</div>
          <div className="App-small-text">* Сайтът е разработен само с информативна цел!</div>
        </div>
      </header>
    </div>
  );
}

export default App;
