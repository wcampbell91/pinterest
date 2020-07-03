const addDiv = () => {
  $('#boards').removeClass('hide');
};

const removeDiv = () => {
  $('#boards').addClass('hide');
};

const boardBuilder = (board) => {
  const domString = `<div class="card text-center board-card" id="${board.id}">   
                      <div class="card-body" id="${board.name}">
                        <h3 class="card-title">${board.name}</h3>
                        <button class="btn btn-secondary view-button">View</button>
                        <button class="btn btn-secondary delete-board-button">Delete</button>
                      </div>
                    </div>`;

  return domString;
};

export default {
  addDiv,
  removeDiv,
  boardBuilder,
};
