 import React from 'react';

 import Drawer from '@material-ui/core/Drawer';
 import List from '@material-ui/core/List';
 import ListItem from '@material-ui/core/ListItem';


 const sideDrawer = (props) => {
   return (
     <Drawer
        anchor='right'
        open={props.open}
        onClose={() => props.onClose(false)}
     >
        <List component='nav'>
            <ListItem button onClick={() => console.log('Fea')}>
                Event starts in
            </ListItem>
            <ListItem button onClick={() => console.log('Fea')}>
                Venue NFO
            </ListItem>
            <ListItem button onClick={() => console.log('Fea')}>
                Hightlight
            </ListItem>
            <ListItem button onClick={() => console.log('Fea')}>
                Pricing
            </ListItem>
            <ListItem button onClick={() => console.log('Fea')}>
                Location
            </ListItem>
        </List>
     </Drawer>

   );
 }

 export default sideDrawer;
