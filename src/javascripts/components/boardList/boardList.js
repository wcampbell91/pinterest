import utils from '../../helpers/utils';
import boardData from '../../helpers/data/boardData';
import boards from '../boards/boards';
import singleBoard from '../singleBoard/singleBoard';
import pinData from '../../helpers/data/pinData';
import newBoard from '../newBoard/newBoard';

const deleteBoardEvent = (e) => {
  const boardId = e.target.closest('.card').id;

  pinData.getPinsByBoardId(boardId)
    .then((boardPins) => {
      boardPins.forEach((pin) => {
        pinData.deletePins(pin.id);
      });
      boardData.deleteBoard(boardId)
        .then(() => {
        // eslint-disable-next-line no-use-before-define
          buildMyBoards();
        });
    })
    .catch((err) => console.error(err));
};

const addBoardEvent = (e) => {
  e.preventDefault();
  let id = 0;
  const newBoards = {
    name: $('#board-name').val(),
    id,
  };
  boardData.addBoard(newBoards)
    .then(() => {
      newBoard.removeDiv();

      // eslint-disable-next-line no-use-before-define
      buildMyBoards();
      id += 1;
    })
    .catch((err) => console.error(err));
};

const buildMyBoards = () => {
  boardData.getBoards()
    .then((response) => {
      const myBoards = response;
      console.error(myBoards);
      let domString = `
      <h2 class="text-center mt-4 mb-4">My Boards</h2>
      <div class="d-flex flex-wrap myBoards card-deck">`;

      myBoards.forEach((board) => {
        domString += boards.boardBuilder(board);
      });
      domString += `</div>
                    <div class="text-center">
                      <button class="btn btn-info mt-4" id="add-board"><i class="fas fa-plus fa-3x"></i></button>
                    </div>`;

      utils.printToDom('#boards', domString);
    })
    .catch((err) => console.error('getBoards broke :(', err));
};

const boardEvents = () => {
  $('body').on('click', '.view-button', singleBoard.buildSingleBoard);
  $('body').on('click', '.delete-board-button', deleteBoardEvent);
  $('body').on('click', '.view-button', boards.removeDiv);
  $('body').on('click', '#add-board', newBoard.removeDiv);
  $('body').on('click', '#add-board', newBoard.showForm);
  $('body').on('click', '#board-creator', addBoardEvent);
};

export default { buildMyBoards, boardEvents };
