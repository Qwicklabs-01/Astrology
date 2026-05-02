import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import VedicForecast from './components/VedicForecast.jsx'
import Numerology from './components/Numerology.jsx'
import BirthChart from './components/BirthChart.jsx'
import Matchmaker from './components/Matchmaker.jsx'
import Panchang from './components/Panchang.jsx'
import VastuCompass from './components/VastuCompass.jsx'
import InstantAnswers from './components/InstantAnswers.jsx'

// Render the main App to the #root element for dev and full-page mode
const rootElement = document.getElementById('root')
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

// WordPress Integration Mounts
const mounts = [
  { id: 'forecast-root', component: <VedicForecast /> },
  { id: 'numerology-root', component: <Numerology /> },
  { id: 'birthchart-root', component: <BirthChart /> },
  { id: 'matchmaker-root', component: <Matchmaker /> },
  { id: 'panchang-root', component: <Panchang /> },
  { id: 'vastu-root', component: <VastuCompass /> },
  { id: 'oracle-root', component: <InstantAnswers /> },
];

mounts.forEach(({ id, component }) => {
  const el = document.getElementById(id);
  if (el) {
    createRoot(el).render(
      <StrictMode>
        {component}
      </StrictMode>
    );
  }
});
