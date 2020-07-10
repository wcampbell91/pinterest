import utils from '../../helpers/utils';

const addDiv = () => {
  $('#editPin').removeClass('hide');
};

const removeDiv = () => {
  $('#editPin').addClass('hide');
};

const showForm = () => {
  addDiv();
  const domString = `
  <form>
    <div class="form-group">
      <label for="edit-board-id">Edit Pin</label>
      <input type="text" class="form-control" id="edit-board-id" placeholder="New board ID here">
    </div>
    <div class="form-group">
      <label for="edit-imageUrl">Edit Pin</label>
      <input type="text" class="form-control" id="edit-imageUrl" placeholder="New image url here">
    </div>
    <div class="form-group">
      <label for="edit-webUrl">Edit Pin</label>
      <input type="text" class="form-control" id="edit-webUrl" placeholder="New web url here">
    </div>
    <button type="submit" class="btn btn-primary" id="update-pin">Submit</button>
  </form>`;

  utils.prinToDom('#editPin', domString);
};

export default { removeDiv, showForm };
