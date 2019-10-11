import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './components/Nav'
import AboutMe from './pages/AboutMe'
import Portfolio from './pages/Portfolio'
import Footer from './components/Footer'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path='/' exact component={AboutMe}/>
          <Route path='/portfolio' component={Portfolio}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
