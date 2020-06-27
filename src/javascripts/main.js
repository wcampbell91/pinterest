import '../styles/main.scss';
import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import auth from './components/auth/auth';
import authData from './helpers/data/authData';
import navbar from './components/navbar/navbar';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseConfig);
  navbar.buildNav();
  authData.checkLoginStatus();
  auth.loginButton();
  auth.logoutButton();
};

init();
