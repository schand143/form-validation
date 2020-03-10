import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  withStyles,
  Grid,
  Button,
  TextField,
  IconButton,
  InputAdornment,
  Checkbox,
  FormControlLabel
} from '@material-ui/core';
import {
  Visibility,
  VisibilityOff,
  AccountBox,
  Lock
} from '@material-ui/icons';

const styles = () => ({
  homeForm: {
    marginTop: '20%',
    padding: '25px',
    height: '60vh'
  },
  btnLogin: {
    padding: '5px',
    margin: '10px auto'
  },
  textField: {
    margin: '30px auto 30px auto'
  }
});

class Home extends Component {
  state = {
    password: '',
    showPassword: true,
    checked: false
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
    this.setState({ [prop]: event.target.checked });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    return (
      <div className='homeForm'>
        <Grid container>
          <Grid container spacing={16}>
            <Grid item xs={12} spacing={36}></Grid>
            <Grid item xs={12}>
              <h1 style={{ textAlign: 'center' }}>Login Form</h1>
            </Grid>
            <Grid container>
              <Grid item xs={1}></Grid>
              <Grid item xs={4} spacing={16}>
                <TextField
                  id='account'
                  className='textField'
                  variant='outlined'
                  label='Account'
                  value={this.state.account}
                  onChange={this.handleChange('account')}
                  style={{ margin: '10px auto' }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <AccountBox />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id='outlined-adornment-password'
                  className='textField'
                  variant='outlined'
                  type={this.state.showPassword ? 'text' : 'password'}
                  label='Password'
                  value={this.state.password}
                  onChange={this.handleChange('password')}
                  style={{ margin: '10px auto' }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <Lock />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton
                          aria-label='Toggle password visibility'
                          onClick={this.handleClickShowPassword}
                        >
                          {this.state.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={1}></Grid>
              <Grid xs={5}></Grid>
              <Grid item xs={3} spacing={16}>
                <Link to='/Complete'>
                  <Button
                    variant='extendedFab'
                    aria-label='Delete'
                    className='btnLogin'
                    style={{ margin: '10px auto' }}
                  >
                    Sign in
                  </Button>
                </Link>
              </Grid>
              <Grid xs={4}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checked}
                      onChange={this.handleChange('checked')}
                      color='default'
                      value='checked'
                    />
                  }
                  label='Remember me'
                  style={{ margin: '10px auto' }}
                />
              </Grid>
              <Grid item xs={2}></Grid>
              <Grid item xs={3}>
                <label style={{ margin: '10px auto' }}>Forget password?</label>
              </Grid>

              <Grid item xs={4}>
                <Link to='/signup'>
                  <label
                    style={{
                      color: 'white',
                      textDecoration: 'underline',
                      margin: '10px auto'
                    }}
                  >
                    Register new account?
                  </label>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
