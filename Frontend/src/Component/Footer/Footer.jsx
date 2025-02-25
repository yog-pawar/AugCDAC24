import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div class="container-fluid my-5">
        <footer class="text-center bg-light text-lg-start text-color">
          <div class="container-fluid p-4 pb-0">
            <section class="">
              <div class="row">
                <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color">
                    AnnaPurna-Homely Meals
                  </h5>

                  <p className="d-flex justify-content-center align-items-center">
                  AnnaPurna allows users to conveniently order and schedule meals from local kitchens or restaurants. It offers flexibility in choosing meal plans, customizing orders, and managing subscriptions, catering primarily to individuals or groups seeking hassle-free meal solutions delivered to their doorstep.
                  </p>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-4">About us</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#!" class="text-color">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Link 2
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-4">Contact us</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#!" class="text-color">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Link 2
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-4">Careers</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#!" class="text-color">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Link 2
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-4">Links</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#!" class="text-color">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Link 2
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <hr class="mb-4" />

            <section class="">
  <p class="d-flex justify-content-center align-items-center">
    <span class="me-3 text-color">Copyright 2025</span>
    <a href="http://localhost:3000/"  class="active">
      <button
        type="button"
        class="btn btn-rounded  text-white"
        style={{backgroundColor:"#AA336A"}}
      >
        Annapurna
      </button>
    </a>
  </p>
</section>


            <hr class="mb-4" />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
