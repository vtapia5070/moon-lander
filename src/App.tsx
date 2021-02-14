import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import { StateProvider } from './shared/context';
import { QueryInputFields } from './components/QueryInputFields';

import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0047bb',
    },
  },
});

const App = () => (
  <div className="App">
    <ThemeProvider theme={theme}>
      <StateProvider>
        <QueryInputFields />
      </StateProvider>
    </ThemeProvider>
  </div>
);

export default App;
