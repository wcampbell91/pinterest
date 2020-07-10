import pinData from '../../helpers/data/pinData';
import utils from '../../helpers/utils';
import boards from '../boards/boards';
import pins from '../pins/pins';
import newPin from '../newPin/newPin';

import './singleBoard.scss';

const removePinEvent = (e) => {
  e.preventDefault();
  const pinId = e.target.id;
  pinData.deletePins(pinId)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildSingleBoard();
    })
    .catch((err) => console.error(err));
};

const addPinEvent = (e) => {
  e.preventDefault();
  const newPins = {
    boardId: $('#pin-boardId').val(),
    link: $('#pin-webUrl').val(),
    imageUrl: $('#pin-imageUrl').val(),
  };
  pinData.addPin(newPins)
    .then(() => {
      newPin.removeDiv();
      // eslint-disable-next-line no-use-before-define
      rebuildSingleBoard();
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
                        <div class="card pins-card text-center" id="${pin.boardId}" style="width: 18rem;">
                          <a href="${pin.link}">
                            <img src="${pin.imageUrl}" class="card-img-top pin-image" alt="...">
                          </a>
                          <button class="btn btn-secondary delete-pin" id="${pin.id}">Delete pin</button>
                          <div class="overlay"></div>
                        </div>`;
        }
      });

      domString += `</div>
                    <div class="text-center mt-5">
                      <button class="btn btn-danger" id="back-button"><i class="fas fa-arrow-left fa-3x"></i></button>
                      <button class="btn btn-info ml-5" id="add-pin"><i class="fas fa-plus fa-3x"></i></button>
                    </div>`;

      utils.printToDom('#pins', domString);
    })
    .catch((err) => console.error('singleBoards broke', err));
};

const rebuildSingleBoard = () => {
  const boardId = $('#pin-boardId').val();
  console.error(boardId);

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
                        <div class="card pins-card text-center" id="${pin.boardId}" style="width: 18rem;">
                          <a href="${pin.link}">
                            <img src="${pin.imageUrl}" class="card-img-top pin-image" alt="...">
                          </a>
                          <button class="btn btn-secondary delete-pin" id="${pin.id}">Delete pin</button>
                          <div class="overlay"></div>
                        </div>`;
        }
      });

      domString += `</div>
                    <div class="text-center mt-5">
                      <button class="btn btn-danger" id="back-button"><i class="fas fa-arrow-left fa-3x"></i></button>
                      <button class="btn btn-info ml-5" id="add-pin"><i class="fas fa-plus fa-3x"></i></button>
                    </div>`;

      utils.printToDom('#pins', domString);
    })
    .catch((err) => console.error('singleBoards broke', err));
};

const pinEvents = () => {
  $('body').on('click', '#add-pin', newPin.showPinForm);
  $('body').on('click', '#pin-creator', addPinEvent);
  $('body').one('click', '.delete-pin', removePinEvent);
  $('body').on('click', '#back-button', boards.addDiv);
  $('body').on('click', '#back-button', pins.removeDiv);
  $('body').on('click', '#back-button', newPin.removeDiv);
  $('body').on('click', '.navbar-brand', boards.addDiv);
  $('body').on('click', '.navbar-brand', pins.removeDiv);
};

export default { buildSingleBoard, pinEvents, rebuildSingleBoard };
