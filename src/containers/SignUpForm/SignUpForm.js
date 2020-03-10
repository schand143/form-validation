import React, { Component, Fragment } from 'react';
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Grid
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import UserInfoForm from '../../component/UserInfoForm/UserInfoForm';
import InfoForm from '../../../src/component/InfoForm/InfoForm';

import './SignUpForm.css';

const steps = ['Account Information', 'Personal Information'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <UserInfoForm />;
    case 1:
      return <InfoForm />;
    default:
      throw new Error('Unknown step!');
  }
}

class SignUpForm extends Component {
  state = {
    activeStep: 0
  };

  handleNext = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep + 1
    });
  };

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  render() {
    const { activeStep } = this.state;

    return (
      <Fragment>
        <main className='signup-layout'>
          <Paper className='signup-paper'>
            <Typography variant='display1' align='center'>
              Sign up
            </Typography>
            <Stepper activeStep={activeStep} className='signup-stepper'>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <Fragment>
              {activeStep === steps.length ? (
                <Fragment>
                  <Grid container xs={12} spacing={32}>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={6}>
                      <Typography
                        variant='headline'
                        gutterBottom
                        style={{ textAlign: 'center' }}
                      >
                        Congratulation! Registration is successfull
                      </Typography>
                    </Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}>
                      <FontAwesomeIcon
                        icon={faSmile}
                        color='#BEE1FF'
                        size='10x'
                      />
                    </Grid>
                    <Grid item xs={4}></Grid>

                    <div
                      style={{
                        color: '#0275D8',
                        fontStyle: 'italic',
                        margin: '30px auto'
                      }}
                    >
                      Redirected to homepage after 5 seconds…
                    </div>
                  </Grid>
                </Fragment>
              ) : (
                <Fragment>
                  {getStepContent(activeStep)}
                  <Grid container xs={12}>
                    <Grid item xs={7}></Grid>
                    <Grid item xs={5}>
                      {activeStep !== 0 && (
                        <Button
                          onClick={this.handleBack}
                          className='signup-btn'
                        >
                          Back
                        </Button>
                      )}
                      <Button
                        variant='contained'
                        color='primary'
                        onClick={this.handleNext}
                      >
                        {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                      </Button>
                    </Grid>
                  </Grid>
                </Fragment>
              )}
            </Fragment>
          </Paper>
        </main>
      </Fragment>
    );
  }
}

export default SignUpForm;
