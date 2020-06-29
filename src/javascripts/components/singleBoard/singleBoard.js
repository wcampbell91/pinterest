import pinData from '../../helpers/data/pinData';
import utils from '../../helpers/utils';
import boards from '../boards/boards';
import pins from '../pins/pins';

import './singleBoard.scss';

const buildSingleBoard = (e) => {
  const boardId = e.target.closest('.card').id;
  pins.addDiv();
  pinData.getPins()
    .then((response) => {
      const myPins = response;
      let domString = `
                      <h2 class="text-center">${boardId}'s Pins</h2>
                      <div class="d-flex flex-wrap myPins card-deck">`;
      myPins.forEach((pin) => {
        if (pin.boardId === boardId) {
          domString += `
                        <div class="card pins-card text-center" style="width: 18rem;">
                          <img src="${pin.imageUrl}" class="card-img-top" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">${pin.id}</h5>
                            <a href="${pin.link}" class="btn btn-primary">Visit Site</a>
                          </div>
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
