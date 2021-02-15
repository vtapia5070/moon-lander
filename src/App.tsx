import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';

import { StateProvider } from './shared/context';
import { QueryInputFields } from './components/QueryInputFields';
import { HistoricalConversions } from './components/HistoricalConversions';
import { ConversionRate } from './components/ConversionRate';

import './App.scss';

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
        <Card className="contentWrapper">
          <QueryInputFields />
          <Divider variant="middle" />
          <ConversionRate />
          <Divider variant="middle" />
          <HistoricalConversions />
        </Card>
      </StateProvider>
    </ThemeProvider>
  </div>
);

export default App;
