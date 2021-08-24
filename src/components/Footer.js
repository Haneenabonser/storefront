import React from 'react'
import { Navbar, Container, Nav} from 'react-bootstrap';

// import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
// import { MenuIcon } from '@material-ui/icons/Menu'
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//     root: {
//         background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//         border: 0,
//         borderRadius: 3,
//         boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//         color: 'white',
//         height: 48,
//         padding: '0 30px',
//     },
// });

function Footer() {
    // const classes = useStyles();

    return (
        <div>
            <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand style={{ marginLeft:'37%', fontSize:'15px', color: 'GrayText'}}>CopyRights &copy;Haneen's 2021</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
            {/* <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>
                </Toolbar>
            </AppBar> */}
        </div>
    )
}

export default Footer;

