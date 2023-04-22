import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {searchEngines} from '../hooks/constants'

export default function ComboBox({values, setValue}) {
    return (
      <Autocomplete
        disablePortal
        fullWidth
        id="combo-box"
        options={searchEngines}
        renderInput={(params) => <TextField {...params} variant="outlined" color='secondary' label="Search Engine" />}
        onChange={(event, newValue) => {
          setValue({...values, ['engine']: newValue});
        }}
        value={values.engine}
      />
    );
  }