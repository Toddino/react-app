import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { fetchNewsAPI } from './redux/api/newsAPI';
import NavigationBar from './components/NavigationBar';
import { themeState } from './redux/reducers/themeSlice';

function App() {
    const state = useAppSelector(themeState).isDark

    console.log(process.env["WDS_SOCKET_HOST"]||"NULL")
    console.log(process.env)

    const test = true;

    return (
        <div>
            content
        </div>
    );
}

export default App;
