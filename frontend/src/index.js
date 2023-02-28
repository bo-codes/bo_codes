import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App'
import GithubSection from "./components/githubSection/GithubSection";
import { NavigationProvider } from "./context/navigation";
import "./index.css"
import './store'


const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
  <BrowserRouter>
    <App/>
    {/* <GithubSection /> */}
  </BrowserRouter>

);
