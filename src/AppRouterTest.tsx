import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import MainContainerTest from './components/MainContainerTest';
import NavigationBar from './components/NavigationBar';
import { Error404 } from './pages/Error404';
import Home from './pages/Home';
import slime from './resources/img/slime.png'
import './App.css';
import './Mobile.css';

export default function AppRouterTest() {
    const getPage = (page: any): React.ComponentType<any> => {
        function SetLayout() {
            return (
                <>
                    {/* <BreadcrumbNav /> */}
                    {page}
                </>
            )
        }
        return (SetLayout)
    }

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <MainContainerTest>
                <Switch>
                    <Route exact path="/" component={getPage(<Home />)} />
                <Route path="*">
                    <Error404 page />
                </Route>
                </Switch>
            </MainContainerTest>
        </BrowserRouter>
    )
}