const addDiv = () => {
  $('#home').removeClass('hide');
};

const removeDiv = () => {
  $('#home').addClass('hide');
};

export default { addDiv, removeDiv };
