import { Autocomplete, Grid, styled, TextField } from '@mui/material'
import React, { Fragment } from 'react';

const AutoComplete = styled(Autocomplete)(() => ({
  width: 300,
  marginBottom: '16px',
}));

const suggestions = [{ label: 'Date' }, { label: 'Subject' }];

const AutocompleteCombo = () => {

  return (
    <>
      <Fragment>
        <Grid container justifyContent="center">
          <AutoComplete
            // sx={{ ml: 2 }}
            options={suggestions}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (
              <TextField {...params} label="Date/Subject" variant="outlined" fullWidth />
            )}
          />
        </Grid>
      </Fragment>
    </>
  );
};

export default AutocompleteCombo;
