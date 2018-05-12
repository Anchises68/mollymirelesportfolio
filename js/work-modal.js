import React from 'react';

class WorkModal extends React.Component {
  render() {
    let work = this.props.work;
    let modalClass = this.props.open ? 'modal-open' : 'modal-closed';

    return (
      <div className={"modal-backdrop " + modalClass }>
        <div className="modal-content">
          <div className="modal-header">
            <h1> Niggazzzzzzzzzzzzz</h1>
          </div>
          <div className="modal-body">
            <img src="img/mollyprofile.jpg" />
            <h1>Pimpin' aint ez</h1>
            <p></p>

          </div>
          <div className="modal-footer">
            <p>This is how we role motherfuckers</p>
          </div>
        </div>
      </div>
    )
  };
};

export default WorkModal;
