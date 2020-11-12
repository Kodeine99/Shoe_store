import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';

import FacebookIcon from '@material-ui/icons/Facebook';

import './SignInUpForm.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      width: '100%',
    },
  },
  FormControlLabel: {
    display: 'inline-flex',
    flexWrap: 'wrap',
    marginLeft: theme.spacing(1)
  },
  Link: {
    marginLeft: "auto",
    fontSize: '1rem',
    width: 'auto'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function LoginForm() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  const [state, setState] = React.useState({
    checked: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-secondary"
        label="Username or Email address *"
        variant="outlined"
        color="secondary"
      />
      <TextField
        id="outlined-secondary"
        label="Password"
        variant="outlined"
        color="secondary"
        type="password"
      />
      <div className="form-footer">
        <Button variant="outlined" color="secondary" type="submit">
          Sign In
        </Button>
        <FormControlLabel
          className={classes.FormControlLabel}
          control={<Checkbox 
            checked={state.checked} 
            onChange={handleChange} 
            name="checked"
          />}
          label="Remember Me"
        />
        <Link className={classes.Link } href="#" onClick={preventDefault} color="inherit">
          Forgot your password ?
        </Link>
      </div>
      <div className="form-choice">
        <p className="text-center">or sign in with</p>
      </div>
      <div className="more-signin">
        <Button
          className="btn btn-sign-g"
          href="#"
          onClick={preventDefault}
          color="primary">
          Login with Google
        </Button>
        <Button
          startIcon={<FacebookIcon/>}
          className="btn btn-sign-f"
          href="#"
          onClick={preventDefault}
          color="primary">
          Login with Facebook
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;
