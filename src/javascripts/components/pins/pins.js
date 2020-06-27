import utils from '../../helpers/utils';

const addDiv = () => {
  $('#pins').removeClass('hide');
};

const removeDiv = () => {
  $('#pins').addClass('hide');
};

const pinsBuilder = () => {
  const domString = '<h1>Here are my pins!</h1>';

  utils.printToDom('#pins', domString);
};

export default {
  addDiv,
  removeDiv,
  pinsBuilder,
};
