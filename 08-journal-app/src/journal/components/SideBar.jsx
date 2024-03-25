import { TurnedInNot } from "@mui/icons-material"
import { Box, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"

export const SideBar = ({ drawerWidth = 240 }) => {
  return (
    <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >

        <Drawer
            variant='permanent'
            open
            sx={{
                display: { sx: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
            }}
        >
            <Toolbar>
                <Typography variant="h6" noWrap component='div'>
                    Jackson Ramon
                </Typography>
            </Toolbar>

            <List>
                {
                    ['Enero', 'Febrero', 'Marzo', 'Abril'].map( text => (
                        <ListItem key={ text } disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={ text }/>
                                    <ListItemText secondary={ 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint dolore doloribus nihil illo at quo magni magnam. Provident asperiores sit molestiae similique nam officia, odio architecto minus non accusamus cum!' }/>
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                     ) )
                }
            </List>

        </Drawer>

    </Box>
  )
}
