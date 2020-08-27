import React from "react"
import Paper from '@material-ui/core/Paper'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Topics from './Topics'
import ChatWindow from './ChatWindow'
import Chatbox from './Chatbox'
import {CTX} from './Store'

const useStyles = makeStyles((theme) => ({
    root: {
      margin: '50px',
      padding: theme.spacing(3,2),
      textAlign: 'center',
      },
    flex: {
        display: 'flex',

    }
  }));
  

export default function Dashboard(){
    const classes = useStyles();


    const [allChats] = React.useContext(CTX);
    console.log([allChats])
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
            <ChatWindow/>
            
            </div>
            <div className = {classes.flex}>
            <Chatbox/>
            </div>
            </Paper>
        </div>)
    
}
