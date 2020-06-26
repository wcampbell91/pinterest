import firebase from 'firebase/app';
import 'firebase/auth';

const boardsDiv = $('#boards');
const pinsDiv = $('#pins');
const logoutButton = $('.logout-button');
const loginButton = $('#google-auth');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      loginButton.addClass('hide');
      boardsDiv.removeClass('hide');
      logoutButton.removeClass('hide');
      pinsDiv.removeClass('hide');
    } else {
      loginButton.removeClass('hide');
      boardsDiv.addClass('hide');
      logoutButton.addClass('hide');
      pinsDiv.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
