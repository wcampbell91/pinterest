const addDiv = () => {
  $('#boards').removeClass('hide');
};

const removeDiv = () => {
  $('#boards').addClass('hide');
};

const boardBuilder = (board) => {
  const domString = `<div class="card text-center" id="${board.id}">   
                      <div class="card-body board-card" id="${board.id}">
                        <h3 class="card-title">${board.name}</h3>
                        <button class="btn btn-secondary view-button">View</button>
                      </div>
                    </div>`;

  return domString;
};

export default {
  addDiv,
  removeDiv,
  boardBuilder,
};
