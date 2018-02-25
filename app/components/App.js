let React = require('react');
let Popular = require('./Popular');
let ReactRouter = require('react-router-dom');
let Router = ReactRouter.BrowserRouter;
let Route = ReactRouter.Route;
let Home = require('./Home');
let Navbar = require('./Navbar');
let Battle = require('./Battle');
let Results = require('./Results');
let Switch = ReactRouter.Switch;


class App extends React.Component {
    render () {
        return (
            <Router>
                <div className='container'>
                    <Navbar/>
                    <Switch>
                        <Route path='/' exact component={Home}/>
                        <Route path='/popular' component={Popular}/>
                        <Route exact path='/battle' component={Battle}/>
                        <Route path='/battle/results' component={Results}/>
                        <Route render={function () {
                            return <h1>404</h1>;
                        }}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

module.exports = App;