import EventPlanner from './Components/EventPlanner';
import { ThemeProvider } from './Components/ThemeContext';
import { EventsProvider } from './Components/EventsContext';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider>
      <EventsProvider>
        <BrowserRouter>
          <EventPlanner />
        </BrowserRouter>
      </EventsProvider>
    </ThemeProvider>
  );
}

export default App;