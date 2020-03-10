import React from 'react';
import { Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';

function Complete() {
  return (
    <Grid container xs={12} spacing={32}>
      <Grid item xs={1}></Grid>
      <Grid item xs={10}>
        <Header title={'Congratulations'} subtitle={'Login Succesfull!'} />
      </Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <FontAwesomeIcon icon={faSmile} color='#BEE1FF' size='10x' />
      </Grid>
    </Grid>
  );
}

export default Complete;
