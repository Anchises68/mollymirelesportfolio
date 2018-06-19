import React from "react";
import { withRouter } from "react-router-dom";

const Back = ({ history }) =>
  history.length > 1 && (
    <footer className="modal-footer mb-2">
      <div className="col-md-4 col-sm-6">
        <button className="btn btn-dark modal-close-btn" onClick={history.goBack}>Close</button>
      </div>
      <div className="col-md-3 col-sm-6">
        <p>Copyright &copy; Mireles Communications 2018</p>
      </div>
    </footer>
  );

export default withRouter(Back);
