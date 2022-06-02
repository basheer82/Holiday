import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import SingleTour from './SingleTour'
import Error from './Error'
import Navbar from './Navbar'
import Buttons from './Buttons'
import Slider from './Slider'
import Welcome from './Welcome'
import Grid from './Grid'

import Location from './Location'
import SelectedLocation from './SelectedLocation'
import Hotel from './Hotel'
import Footer from './Footer'

function App() {
return( 
  <Router>
  <Navbar/>
  <Buttons/> 
  
  <Switch>
    <Route exact path = '/'>
     <Slider/>
      <Welcome/>
      <Grid/>
      <Location/>
    </Route>
    <Route path = '/Location/:location'>
    <SelectedLocation/>
    </Route>
    <Route path = '/tour/:id'>
      <SingleTour/>
    </Route>
    <Route path = '/Hotel'>
    <Hotel/>
    </Route>
    <Route path="*">
      <Error />
    </Route>
  </Switch>

  <Footer/>
 </Router>
)
}
export default App;
