const addDiv = () => {
  $('#boards').removeClass('hide');
};

const removeDiv = () => {
  $('#boards').addClass('hide');
};

export default { addDiv, removeDiv };
