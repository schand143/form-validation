import React, { Fragment } from 'react';
import {
  Grid,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox
} from '@material-ui/core';

function UserInfoForm() {
  return (
    <Fragment>
      <Typography variant='title' gutterBottom style={{ textAlign: 'center' }}>
        Account Information
      </Typography>
      <Grid container spacing={28}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <TextField required id='username' label='Username' fullWidth />
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <TextField required id='userPassword' label='Password' fullWidth />
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <TextField
            required
            id='confirmPassword'
            label='Confirm password'
            fullWidth
          />
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={6}>
          <FormControlLabel
            control={
              <Checkbox color='secondary' name='policyAgreement' value='yes' />
            }
            label='Agree all the policies'
          />
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </Fragment>
  );
}

export default UserInfoForm;
