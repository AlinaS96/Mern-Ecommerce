import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Link } from 'react-router-dom'
export default function UserWidget() {
    return (<>
     
        <List sx={{ width: '100%', maxWidth: 420, bgcolor: 'background.paper', boxShadow:'5px 5px 5px #e0e0e0', margin:'20px 0px 20px 20px' }}>
            <Typography sx={{marginLeft:'20px', fontWeight:'600', fontSize:'18px'}}>New Join Members</Typography>
            {[{ title: "Anna kellar", prof: "Software Engineer" }, { title: "Brant fabian", prof: "Art director" }].map((arrItem) => (
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary={`${arrItem.title}`}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    {arrItem.prof}
                                </Typography>
                            </React.Fragment>
                        }
                    />
                    <Button sx={{ backgroundColor: '#e0e0e0', color: 'gray', margin: '15px' }} variant="contained" startIcon={<RemoveRedEyeIcon />}>
                        Display
                    </Button>
                </ListItem>
            ))}
        </List> 
    </>);
}