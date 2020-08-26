import React from "react"
import Paper from '@material-ui/core/Paper'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Topics from './Topics'
import Chatbox from './Chatbox'
const useStyles = makeStyles((theme) => ({
    root: {
      margin: '50px',
      padding: theme.spacing(3,2),
      textAlign: 'center',
      },
    flex: {
        display: 'flex'
    }
  }));
  

export default function Dashboard(){
    const classes = useStyles();

        return(<div>
            
            <Paper className = {classes.root}>
            <Typography variant= "h4" component="h4">
                OSN chat app
            </Typography>
            <Typography component="h5">
                Topic
            </Typography>
            
            <div className = {classes.flex}>
            <Topics/>
            <Chatbox/>
            </div>

            </Paper>
        </div>)
    
}
