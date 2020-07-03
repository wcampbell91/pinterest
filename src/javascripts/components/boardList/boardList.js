import utils from '../../helpers/utils';
import boardData from '../../helpers/data/boardData';
import boards from '../boards/boards';
import singleBoard from '../singleBoard/singleBoard';
import pinData from '../../helpers/data/pinData';

const deleteBoardEvent = (e) => {
  const boardId = e.target.closest('.card').id;

  pinData.getPinsByBoardId(boardId)
    .then((boardPins) => {
      console.error(boardPins);
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

const buildMyBoards = () => {
  boardData.getBoards()
    .then((response) => {
      const myBoards = response;
      let domString = `
      <h2 class="text-center mt-4 mb-4">My Boards</h2>
      <div class="d-flex flex-wrap myBoards card-deck">`;

      myBoards.forEach((board) => {
        domString += boards.boardBuilder(board);
      });
      domString += '</div>';

      utils.printToDom('#boards', domString);

      $('body').on('click', '.view-button', singleBoard.buildSingleBoard);
      $('body').on('click', '.delete-board-button', deleteBoardEvent);
      $('body').on('click', '.view-button', boards.removeDiv);
    })
    .catch((err) => console.error('getBoards broke :(', err));
};

export default { buildMyBoards };
