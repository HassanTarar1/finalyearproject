import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Row from "@material-ui/core/TableRow";

import TableContainer from '@material-ui/core/TableContainer';



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '100%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <TableContainer maxWidth="sm">
      <CardHeader
        avatar={
          <Avatar aria-label="VOTE" className={classes.avatar}>
            PTI
          </Avatar>
        }
        
        title=""
        subheader=""
      />
      <CardMedia
        className={classes.media}
        image="https://seeklogo.com/images/P/pakistan-tehreek-e-insaf-logo-FE1F052649-seeklogo.com.png"
        title=""
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Canidate: Ali Nawaz warraich
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <Button variant="contained" color="Primary" >
  Vote
</Button>
        
      
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          
         
        </CardContent>
      </Collapse>
      </TableContainer>
      <TableContainer>
      <CardHeader
        avatar={
          <Avatar aria-label="VOTE" className={classes.avatar}>
            PTI
          </Avatar>
        }
        
        title=""
        subheader=""
      />
      <CardMedia
        className={classes.media}
        image="https://seeklogo.com/images/P/pakistan-tehreek-e-insaf-logo-FE1F052649-seeklogo.com.png"
        title=""
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Canidate: Ali Nawaz warraich
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <Button variant="contained" color="Primary" >
  Vote
</Button>
        
      
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          
         
        </CardContent>
      </Collapse>
      </TableContainer>
    </Card>

    
  );
}
