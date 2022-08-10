import "./App"
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Students from "./pages/students.jsx";
import Ababeel from './pages/ababeel.jsx';
import Reset from "./pages/components/Reset";
import Register from "./pages/components/Register";
import PageNotFound from "./pages/components/PageNotFound";
import { LoginSection } from "./pages/components/Login";
import { Provider } from "react-redux";
import store from "./pages/components/store"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes >
        <Route path="/student" element={<Students />} />
        <Route path="/Reset" element={<Reset />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/login" element={<LoginSection />} />
        <Route path="*" element={<PageNotFound/>}/>
        <Route exact path="/" element={<Ababeel />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
