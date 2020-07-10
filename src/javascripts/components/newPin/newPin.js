import utils from '../../helpers/utils';

const addDiv = () => {
  $('#newPin').removeClass('hide');
};

const removeDiv = () => {
  $('#newPin').addClass('hide');
};

const showPinForm = () => {
  addDiv();
  const domString = `
  <div class="card" id="peporrine">
    <form>
      <div class="form-group">
        <label for="pin-boardId">Board Id</label>
        <input type="text" class="form-control" id="pin-boardId" placeholder="ex. board1">
      </div>
      <div class="form-group">
        <label for="pin-imageUrl">Image Url</label>
        <input type="text" class="form-control" id="pin-imageUrl" placeholder="Image Url">
      </div>
      <div class="form-group">
        <label for="pin-webUrl">Web Url</label>
        <input type="text" class="form-control" id="pin-webUrl" placeholder="webUrl">
      </div>
      <button type="submit" class="btn btn-primary" id="pin-creator">Submit</button>
    </form>
  </div>
  `;

  utils.printToDom('#newPin', domString);
};

export default { showPinForm, removeDiv };
