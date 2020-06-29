import firebase from 'firebase/app';
import 'firebase/auth';

import boards from '../../components/boards/boards';
import home from '../../components/home/home';
import pins from '../../components/pins/pins';
import boardList from '../../components/boardList/boardList';

const checkLoginStatus = () => {
  const logoutButton = $('.logout-button');
  const loginButton = $('#google-auth');
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      home.removeDiv();
      boards.addDiv();
      loginButton.addClass('hide');
      logoutButton.removeClass('hide');

      boardList.buildMyBoards();
    } else {
      home.addDiv();
      boards.removeDiv();
      pins.removeDiv();
      loginButton.removeClass('hide');
      logoutButton.addClass('hide');

      home.homeBuilder();
    }
  });
};

export default { checkLoginStatus };
