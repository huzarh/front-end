import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function Tags(props) {
  const [resource, setResource] = React.useState('');
  return (
    <Stack spacing={10} sx={{ width: '100%' }}>
      {resource === 'Merhaba,Benim,adim,Hüzeyir' || (resource === 'Merhaba Benim adim Hüzeyir') ? props.val(true):(props.val(false),console.log(resource))}
      <Autocomplete
        // options={<button>fvfvd<button/>}
        multiple
        id="tags-outlined"
        options={all}
        sx={{background:'white'}}
        clearIndicator={<button>clier</button>}
        // value={top100Films}
        onChange={(event, newInputValue) => setResource(""+newInputValue)}
        getOptionLabel={(option) => option}
        // defaultValue={[top100Films[0]]}

        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="yaz"
          />
        )}
      />
    </Stack>
  );
}
const all = ['Merhaba','Benim','adim','Hüzeyir'];