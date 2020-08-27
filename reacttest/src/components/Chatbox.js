import React from "react"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

let flex = {
    display: "flex",

}


export default function Chatbox(){
    const [textValue, changeTextValue] = React.useState('')
    return(<div style = {flex}>
        <TextField 
        className = "chatBox" label="Send a Chat" value = {textValue} onChange ={ e => changeTextValue(e.target.value)}/>
        <Button variant="contained" color="primary">
        Send
        </Button>
        
        
        </div>)
}
