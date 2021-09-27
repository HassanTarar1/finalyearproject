import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router-dom';
import {BrowserRouter, withRouter} from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
let h =useHistory();
  return (
    <BrowserRouter>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button onClick={
            ()=>{h.push("/areavote");} } color="inherit"> Home</Button>
          <Typography variant="h6" align="center"  textsize="100" className={classes.title}>
            vote
          </Typography>
          <Button onClick={
                ()=>{h.push("/Signin");}}
           className='mx-2' color='inherit'>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
    </BrowserRouter>
  );
}
