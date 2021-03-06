import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

//Pages
import ImagesPage from './Pages/ImagesPage/ImagesPage.component.jsx';
import AuthPage from './Pages/Auth/Auth.component.jsx';

//Material UI
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#3DB46D',
        contrastText: '#fff',
      },
      secondary: {
        main: '#EB5757',
        contrastText: '#fff',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Switch>
          <Route exact path="/" component={ImagesPage} />
          <Route exact path="/auth" component={AuthPage} />
          <Route path="*" component={() => <h1>404 NOT FOUND</h1>} />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
