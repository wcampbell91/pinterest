import firebase from 'firebase/app';
import 'firebase/auth';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const loginButton = () => {
  $('#google-auth').click(signMeIn);
};

const logoutButton = () => {
  $('.logout-button').click((e) => {
    e.preventDefault();
    firebase.auth().signOut();
  });
};
export default { loginButton, logoutButton };
