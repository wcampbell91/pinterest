import firebase from 'firebase/app';
import 'firebase/auth';

import boards from '../../components/boards/boards';
import home from '../../components/home/home';

// const boardsDiv = $('#boards');
const pinsDiv = $('#pins');
const logoutButton = $('.logout-button');
const loginButton = $('#google-auth');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      loginButton.addClass('hide');
      home.removeDiv();
      boards.addDiv();
      logoutButton.removeClass('hide');
      pinsDiv.removeClass('hide');
    } else {
      home.addDiv();
      loginButton.removeClass('hide');
      boards.removeDiv();
      logoutButton.addClass('hide');
      pinsDiv.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
