import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { fetchNews, newsState } from './redux/reducers/newsSlice';
import { fetchNewsAPI } from './redux/api/newsAPI';

function App() {
  const dispatch = useAppDispatch();
  const state = useAppSelector(newsState).news

  useEffect(() => {
    dispatch(fetchNews())
  }, [])

  console.log(process.env["REACT_HOST"]||"NULL")
  console.log(process.env)

  return (
    <div className="App">
        <header>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>We now have Auth!</h1>
        </header>
    </div>
  );
}

export default App;
