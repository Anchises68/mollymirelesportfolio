import React from "react";
import { withRouter } from "react-router-dom";

const Back = ({ history }) =>
  history.length > 1 && (
    <button className="button modal-close-btn" onClick={history.goBack}>Go Back</button>
  );

export default withRouter(Back);
