import React from 'react'
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography'

let flex = {
    display: "flex",
}
let chip
class ChatWindow extends React.Component{
    render(){
        return(
            <div className = "chatWindow">
                    {
                        [{from: 'user', msg: 'hello'}].map((chat,i) => (
                            <div style = {flex} key={i}>
                                <Chip label = {chat.from} className = {chip}/>
                                <Typography variant = 'p'>{chat.msg}</Typography>

                            </div>
                        ))
                    }
           
            </div>
        )
    }
}

export default ChatWindow;