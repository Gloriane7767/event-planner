import EventPlanner from './Components/EventPlanner';
import { ThemeProvider } from './Components/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <EventPlanner />
    </ThemeProvider>
  );
}

export default App;