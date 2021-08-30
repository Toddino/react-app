import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { fetchNewsAPI } from './redux/api/newsAPI';
import { Container, Content } from 'rsuite';
import NavigationBar from './components/NavigationBar';
import { themeState } from './redux/reducers/themeSlice';
// import 'rsuite/dist/styles/rsuite-default.css';

function App() {
    const state = useAppSelector(themeState).isDark

    console.log(process.env["WDS_SOCKET_HOST"]||"NULL")
    console.log(process.env)

    const test = true;

    return (
        <Container>
            <NavigationBar />
            <Content>
                Content
            </Content>
        </Container>
    );
}

export default App;
