const addDiv = () => {
  $('#pins').removeClass('hide');
};

const removeDiv = () => {
  $('#pins').addClass('hide');
};

export default {
  addDiv,
  removeDiv,
};
