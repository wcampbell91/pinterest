import utils from '../../helpers/utils';

const addDiv = () => {
  $('#home').removeClass('hide');
};

const removeDiv = () => {
  $('#home').addClass('hide');
};

const homeBuilder = () => {
  const domString = `
  <div class="text-center mt-4">
    <h1>Welcome to Pinterest!</h1>
    <div id="homeImg">
      <img id="homeImg" src="https://s.pinimg.com/images/facebook_share_image.png" alt="">
    </div>
  </div>`;

  utils.printToDom('#home', domString);
};

export default { addDiv, removeDiv, homeBuilder };
