import React from "react";
import { withRouter } from "react-router-dom";

const Back = ({ history }) =>
  history.length > 1 && (
    <button type="button" className="close" aria-label="Close" onClick={history.goBack}>
      <span aria-hidden="true">&times;</span>
    </button>
  );

export default withRouter(Back);
