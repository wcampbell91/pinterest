import pinData from '../../helpers/data/pinData';
import utils from '../../helpers/utils';

import './singleBoard.scss';

const buildSingleBoard = (e) => {
  const boardId = e.target.closest('.card').id;
  console.error(boardId);
  pinData.getPins()
    .then((response) => {
      const myPins = response;
      let domString = `
                      <h2 class="text-center">${boardId}'s Pins</h2>
                      <div class="d-flex flex-wrap myPins card-deck">`;
      myPins.forEach((pin) => {
        if (pin.boardId === boardId) {
          domString += `
                        <div class="card text-center" style="width: 18rem;">
                          <img src="${pin.imageUrl}" class="card-img-top" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">${pin.id}</h5>
                            <a href="${pin.link}" class="btn btn-primary">Visit Site</a>
                          </div>
                        </div>`;
        }
      });

      domString += '</div>';

      utils.printToDom('#pins', domString);
    })
    .catch((err) => console.error('singleBoards broke', err));
};

export default { buildSingleBoard };
