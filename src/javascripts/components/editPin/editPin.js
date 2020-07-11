import pinData from '../../helpers/data/pinData';
import utils from '../../helpers/utils';

const addDiv = () => {
  $('#editPin').removeClass('hide');
};

const removeDiv = () => {
  $('#editPin').addClass('hide');
};

const showForm = (pinId) => {
  addDiv();
  pinData.getPinsById(pinId)
    .then((response) => {
      const pin = response.data;
      const domString = `
      <form class="pin-updater" id="${pinId}">
        <div class="form-group">
          <label for="edit-board-id">Edit Pin</label>
          <input type="text" class="form-control pin-boardId" id="edit-board-id" placeholder="${pin.boardId}">
        </div>
        <div class="form-group">
          <label for="edit-imageUrl">Edit Pin</label>
          <input type="text" class="form-control" id="edit-imageUrl" placeholder="${pin.imageUrl}">
        </div>
        <div class="form-group">
          <label for="edit-webUrl">Edit Pin</label>
          <input type="text" class="form-control" id="edit-webUrl" placeholder="${pin.link}">
        </div>
        <button type="submit" class="btn btn-primary update-pin" id="update-pin">Submit</button>
      </form>`;

      utils.printToDom('#editPin', domString);
    })
    .catch((err) => console.error(err));
};

export default { removeDiv, showForm };
