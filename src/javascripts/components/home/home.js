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
  </div>`;

  utils.printToDom('#home', domString);
};

export default { addDiv, removeDiv, homeBuilder };
