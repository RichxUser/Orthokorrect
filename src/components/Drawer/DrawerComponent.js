import React from "react";
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton } from "@mui/material";
import ListIcon from '@mui/icons-material/List';
const PAGES = ["Agence", "Services", "Contact", "Devis", "LogIn", "LogOut"]

export default function DrawerComponent() {
  const [openDrawer, setOpenDrawer] = React.useState(false)

  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {
            PAGES.map((page, index) => (
              <ListItem disablePadding>
                <ListItemButton onClick={()=> setOpenDrawer(false)} key={index}>
                  <ListItemIcon>
                    <ListItemText>{page}</ListItemText>
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            ))
          }

        </List>
      </Drawer>
      <IconButton sx={{ color: '#4B3C99', marginLeft: 'auto' }} onClick={() => setOpenDrawer(!openDrawer)}>
        <ListIcon />
      </IconButton>
    </React.Fragment>
  );
}
