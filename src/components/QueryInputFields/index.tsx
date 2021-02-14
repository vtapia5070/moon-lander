import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';

import './styles.scss';

export const QueryInputFields = () => (
  <Card className="queryInputFields">
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <Autocomplete
          freeSolo
          className="autoComplete"
          disableClearable
          options={[].map((option) => option)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Base Currency"
              margin="normal"
              variant="outlined"
              InputProps={{ ...params.InputProps, type: 'search' }}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Autocomplete
          className="autoComplete"
          freeSolo
          disableClearable
          options={[].map((option) => option)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Target Currency"
              margin="normal"
              variant="outlined"
              InputProps={{ ...params.InputProps, type: 'search' }}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Autocomplete
          className="autoComplete"
          freeSolo
          disableClearable
          options={[].map((option) => option)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Amount"
              margin="normal"
              variant="outlined"
              InputProps={{ ...params.InputProps, type: 'search' }}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} sm={12}>
        <Button className="button" variant="contained" color="primary">
          Get Conversions
        </Button>
      </Grid>
    </Grid>
  </Card>
);
