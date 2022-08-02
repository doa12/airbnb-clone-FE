import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configStore';
import instance from './shared/axios';
import { userActions } from './redux/modules/userSlice';

// const loadingLoginInfo = async () => {
//   try {
//     const userInfo = localStorage.getItem('Authorization');
//     if(!userInfo) return;
//     else {
//       const res = await instance.post('/api/info');
//       const data = res.data;
//       store.dispatch(userActions.setUserInfo(data));
//     }
//   }
//   catch(e) {
//     localStorage.removeItem('Authorization');
//     console.log('web storage error!!');
//   }
// }

// loadingLoginInfo();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
