import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ContactPage from './../components/ContactPage';
import HomePage from './../components/HomePage';
import PortfolioPage from './../components/PortfolioPage';
import PortfolioItemPage from './../components/PortfolioItemPage';
import NotFoundPage from './../components/NotFoundPage';
import Header from './../components/Header';


class AppRouter extends React.Component {
    render (){
        return (
    <BrowserRouter>
    <div>
    <Header />
    <Switch>
        <Route path='/' exact component={HomePage}/>
        <Route path='/portfolio' exact component={PortfolioPage}/>
        <Route path='/portfolio/:id' component={PortfolioItemPage}/>
        <Route path='/contact' component={ContactPage}/>
        <Route component={NotFoundPage} />
    </Switch>
    </div>
    </BrowserRouter>)
    }
}

export default AppRouter;