import React from 'react'
import Chip from '@material-ui/core/Chip';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography'
class Topics extends React.Component{
    render(){
        return(
            <div className = "topicsWindow">
                     <List>
                {
                    ['topic'].map(topic => (
                        <ListItem key = {topic} button>
                            <ListItemText primary = {topic}/>
                        </ListItem>
                    ))
                }
               

                </List>
            </div>
        )
    }
}

export default Topics;