import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
// import { browserHistory } from 'react-router'

/**
 * 引入页面
 */

//登录页面
import WrappedNormalLoginForm from '@/views/login/index.jsx';
import LayoutIndex from '@/views/layout/index.jsx';

//私有路由，验证是否登陆
const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} component= {() => (
        Cookies.get('Admin-Token')?
            <Component></Component>
            :<Redirect to="/login"/>
    )}/>
)

const RouterConfig = () => (
    <Router basename="/">
        <Switch>
            <Route path="/login" component={WrappedNormalLoginForm}></Route> 
            <PrivateRoute exact path="/" component={LayoutIndex}></PrivateRoute> 
        </Switch>
    </Router>
)

export default RouterConfig;