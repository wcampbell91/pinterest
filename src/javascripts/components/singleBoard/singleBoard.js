import pinData from '../../helpers/data/pinData';
import utils from '../../helpers/utils';
import boards from '../boards/boards';
import pins from '../pins/pins';

import './singleBoard.scss';

const removePinEvent = (e) => {
  const pinId = e.target.closest('.card').id;
  pinData.deletePins(pinId)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      rebuildSingleBoard(e);
    })
    .catch((err) => console.error(err));
};

const buildSingleBoard = (e) => {
  const boardId = e.target.closest('.card').id;

  pins.addDiv();
  pinData.getPins()
    .then((response) => {
      const myPins = response;
      console.error(myPins);
      let domString = `
                      <div class="d-flex flex-wrap myPins card-deck">`;
      myPins.forEach((pin) => {
        if (pin.boardId === boardId) {
          domString += `
                        <div class="card pins-card text-center" id="${pin.id}" style="width: 18rem;">
                          <a href="${pin.link}">
                            <img src="${pin.imageUrl}" class="card-img-top pin-image" alt="...">
                          </a>
                          <button class="btn btn-secondary delete-pin" id="${pin.boardId}">Delete pin</button>
                          <div class="overlay"></div>
                        </div>`;
        }
      });

      domString += `</div>
                    <div class="text-center mt-5">
                      <button class="btn btn-danger" id="back-button"><i class="fas fa-arrow-left fa-3x"></i></button>
                    </div>`;

      utils.printToDom('#pins', domString);
      $('body').on('click', '.delete-pin', removePinEvent);
      $('body').on('click', '#back-button', boards.addDiv);
      $('body').on('click', '#back-button', pins.removeDiv);
      $('body').on('click', '.navbar-brand', boards.addDiv);
      $('body').on('click', '.navbar-brand', pins.removeDiv);
    })
    .catch((err) => console.error('singleBoards broke', err));
};

// I THINK YOU NEED TO ADD PINS TO THE BOARDS.JSON SO THEY'RE ACCESIBLE TOGETHER!
const rebuildSingleBoard = (e) => {
  console.error(e);
  const boardId = e.target.id;
  pins.addDiv();
  pinData.getPins()
    .then((response) => {
      const myPins = response;
      let domString = `
                      <div class="d-flex flex-wrap myPins card-deck">`;

      myPins.forEach((pin) => {
        if (pin.boardId === boardId) {
          domString += `
                        <div class="card pins-card text-center" id="${pin.id}" style="width: 18rem;">
                          <a href="${pin.link}">
                            <img src="${pin.imageUrl}" class="card-img-top pin-image" alt="...">
                          </a>
                          <button class="btn btn-secondary delete-pin" id="${pin.boardId}">Delete pin</button>
                          <div class="overlay"></div>
                        </div>`;
        }
      });

      domString += `</div>
                    <div class="text-center mt-5">
                      <button class="btn btn-danger" id="back-button"><i class="fas fa-arrow-left fa-3x"></i></button>
                    </div>`;

      utils.printToDom('#pins', domString);
      $('body').on('click', '#back-button', boards.addDiv);
      $('body').on('click', '#back-button', pins.removeDiv);
      $('body').on('click', '.navbar-brand', boards.addDiv);
      $('body').on('click', '.navbar-brand', pins.removeDiv);
    })
    .catch((err) => console.error('singleBoards broke', err));
};

export default { buildSingleBoard };
