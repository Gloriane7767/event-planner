import EventPlanner from './Components/EventPlanner';
import { ThemeProvider } from './Components/ThemeContext';
import { EventsProvider } from './Components/EventsContext';
import { AuthProvider } from './Components/AuthContext';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <EventsProvider>
          <BrowserRouter>
            <EventPlanner />
          </BrowserRouter>
        </EventsProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;