import React, { Fragment } from 'react';
import {
  Grid,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox
} from '@material-ui/core';

function InfoForm() {
  return (
    <Fragment>
      <Typography variant='title' gutterBottom style={{ textAlign: 'center' }}>
        Personal Info
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id='firstName'
            name='firstName'
            label='First name'
            fullWidth
            autoComplete='fname'
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id='lastName'
            name='lastName'
            label='Last name'
            fullWidth
            autoComplete='lname'
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id='middleName'
            name='middleName'
            label='Middel name'
            fullWidth
            autoComplete='mname'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='address1'
            name='address1'
            label='Address line 1'
            fullWidth
            autoComplete='address-line1'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id='mobile'
            name='mobile'
            label='Mobile'
            fullWidth
            autoComplete='mobile'
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id='city'
            name='city'
            label='City'
            fullWidth
            autoComplete=' city'
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField required id='state' name='state' label='State' fullWidth />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id='zip'
            name='zip'
            label='Zip code'
            fullWidth
            autoComplete=' zip-code'
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id='country'
            name='country'
            label='country'
            fullWidth
            autoComplete='country'
          />
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={10}>
          <FormControlLabel
            control={
              <Checkbox color='primary' name='saveAddress' value='yes' />
            }
            label='Remember this details'
          />
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default InfoForm;
