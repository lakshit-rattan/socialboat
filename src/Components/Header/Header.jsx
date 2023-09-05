import {
  AppBar,
  Avatar,
  Container,
  createTheme,
  TextField,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import profilepic from '../../Assets/account.jpeg';
import logo from '../../Assets/logo.jpg';
import Content from '../Content/Content';

const Header = () => {
  const [searchText, setSearchText] = useState('');

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#d9b08c',
      },
      secondary: { main: '#106466' },
      type: 'dark',
    },
  });

  const inputEvent = (e) => {
    const data = e.target.value;
    setSearchText(data);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="inherit" position="sticky">
        <Container>
          <Toolbar>
            <img
              src={logo}
              alt="Logo"
              height={50}
              width={70}
              style={{ borderRadius: 12 }}
            />
            <div
              style={{
                width: '100vw',
                display: 'flex',
                justifyContent: 'center',
                marginInline: '15px',
              }}
            >
              <TextField
                className="searchBox"
                color="primary"
                label="Search"
                type="search"
                size="small"
                variant="outlined"
                value={searchText}
                onChange={inputEvent}
              />
            </div>
            <Avatar
              style={{
                height: 40,
                width: 40,
                cursor: 'pointer',
              }}
              src={profilepic}
              alt="PROFILE"
            />
          </Toolbar>
        </Container>
      </AppBar>
      {searchText === '' ? <></> : <Content name={searchText} />}
    </ThemeProvider>
  );
};

export default Header;
