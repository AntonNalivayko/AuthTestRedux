import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Profile, Login } from './components';



const App = () => {

    return (

        <>
            <Router>
                    <Switch>
                        <Route exact path='/' component={Login} /> 
                        <Route exact path='/profile' component={Profile} />
                    </Switch>
            </Router>
        </>
    )
};

export default App;

































{/* <Route exact path='/signup' component={Signup} />
                    <Route exact path='/facebook' component={Facebook} />
                    <Route exact path='/google' component={Google} />
                    <Route exact path='/reset-password' component={ResetPassword} />
                    <Route exact path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm} />
                    <Route exact path='/activate/:uid/:token' component={Activate} /> */}