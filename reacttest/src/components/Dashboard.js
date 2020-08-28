import React from "react"
import Paper from '@material-ui/core/Paper'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import {CTX} from './Store'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles((theme) => ({
    root: {
      margin: '50px',
      padding: theme.spacing(3,2),
      textAlign: 'center',
      },
    flex: {
        display: 'flex',

    },  
    chip: {
    },
    topicsWindow:{
        width: '30%',
        height:'300px',
        borderRight: '1px solid grey',
    },
    chatWindow:{
        width: '70%',
        padding: '10px',
        height:'300px',
    },
    chatBox:{
        width: '85%',
    
    },
    button:{
        width: '15%',
    },
  }));
  

export default function Dashboard(){
    const classes = useStyles();
    

    const {allChats, sendChatAction, user} = React.useContext(CTX);
    const topics = Object.keys(allChats)
    console.log([allChats])
    const [activeTopic, changeActiveTopic] = React.useState("general")
    const [textValue, changeTextValue] = React.useState('')

        return(<div>
            
            <Paper className = {classes.root}>
            <Typography variant= "h4" component="h4">
                OSN chat app
            </Typography>
            <Typography component="h5">
                {activeTopic}
            </Typography>

            <div className = {classes.flex}>
                <div className = {classes.topicsWindow}>
                <List>
                {
                    topics.map(topic => (
                        <ListItem onClick= {e => changeActiveTopic(e.target.innerText)}key = {topic} button>
                            <ListItemText primary = {topic}/>
                        </ListItem>
                    ))
                }
                </List>
                </div>
                <div className = {classes.chatWindow}>
                    {
                        allChats[activeTopic].map((chat,i) => (
                            <div className = {classes.flex} key={i}>
                                <Chip label = {chat.from} className = {classes.chip}/>
                                <Typography variant = 'p'>{chat.msg}</Typography>

                            </div>
                        ))
                    }
           
            </div>
         
            </div>
            

            <div className = {classes.flex}>
                <TextField 
                className = {classes.chatBox}
                label="Send a Chat" 
                value = {textValue} 
                onChange ={ e => changeTextValue(e.target.value)}
                />
                <Button
                variant="contained" 
                color="primary"
                className = {classes.Button}
                onClick = { ()=> {
                    sendChatAction({from:user, msg: textValue, topic: activeTopic});
                    changeTextValue('');
                }
                    }>
                
                Send
                </Button>
            </div>
            </Paper>
        </div>)
}