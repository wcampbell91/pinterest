import utils from '../../helpers/utils';

const addDiv = () => {
  $('#newBoard').removeClass('hide');
};

const removeDiv = () => {
  $('#newBoard').addClass('hide');
};

const showForm = () => {
  addDiv();
  const domString = ` 
  <form>
    <div class="form-group">
      <label for="board-name">Board Name</label>
      <input type="text" class="form-control" id="board-name" placeholder="Board Name">
    </div>
    <button type="submit" class="btn btn-primary" id="board-creator">Submit</button>
  </form>`;

  utils.printToDom('#newBoard', domString);
};

export default { removeDiv, showForm };
