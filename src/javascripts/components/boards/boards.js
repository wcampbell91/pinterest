const addDiv = () => {
  $('#boards').removeClass('hide');
};

const removeDiv = () => {
  $('#boards').addClass('hide');
};

const boardBuilder = (board) => {
  console.error(board);
  const domString = `<div class="card">
                      <div class="card-body">
                        <h5 class="card-title">${board.name}</h5>
                      </div>
                    </div>`;

  return domString;
};

export default {
  addDiv,
  removeDiv,
  boardBuilder,
};
