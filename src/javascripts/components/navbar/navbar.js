import utils from '../../helpers/utils';

const buildNav = () => {
  const domString = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
                      <a class="navbar-brand" href="#"><i class="fab fa-pinterest fa-2x"></i></a>
                      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                      </button>
                      <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                          <button id="google-auth" class="btn btn-primary align-content-center mr-5"><i class="fab fa-google"></i> Login</button>
                          <button class="btn btn-danger logout-button hide">Logout</button>
                        </ul>
                      </div>
                  </nav>`;
  utils.printToDom('#nav', domString);
};

export default { buildNav };
