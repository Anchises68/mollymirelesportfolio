import React from 'react';

class WorkModal extends React.Component {
  render() {
    let work = this.props.work;
    let modalClass = this.props.open ? 'modal-open' : 'modal-closed';

    return (
      <div className={"modal-background " + modalClass}>

        <div className="container modal-body mt-5">
          <h1 class="my-4 modal-header">{ work.name }
            <small>Molly Mireles</small>
          </h1>
          <button type="button" className="close" aria-label="Close" onClick={ this.props.closeModal }><span aria-hidden="true">&#x2573;</span></button>
          <div className="row">
            <div className="col-md-6 mb-5">
              <img className="img-fluid" src={ work.image.src1 } alt={ work.image.desc } />
            </div>
            <div className="col-md-6 mb-5 mt-3">
              <h5>{ work.info }</h5>
            </div>
          </div>
          <div className="row modal-text">
            <div className="col-md-3 col-sm-6 mb-2">
              <h5>{ work.column_1.h4 }</h5>
              <ul className="remove-bullets">
                <li>{ work.column_1.li1 }</li>
                <li>{ work.column_1.li2 }</li>
                <li>{ work.column_1.li3 }</li>
                <li>{ work.column_1.li4 }</li>
                <li>{ work.column_1.li5 }</li>
                <li>{ work.column_1.li6 }</li>
                <li>{ work.column_1.li7 }</li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 mb-2 remove-bullets">
              <h5>{ work.column_2.h4 }</h5>
              <ul className="remove-bullets">
                <li>{ work.column_2.li1 }</li>
                <li>{ work.column_2.li2 }</li>
                <li>{ work.column_2.li3 }</li>
                <li>{ work.column_2.li4 }</li>
                <li>{ work.column_2.li5 }</li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 mb-2 remove-bullets">
              <h5>{ work.column_3.h4 }</h5>
              <ul className="remove-bullets">
                <li>{ work.column_3.li1 }</li>
                <li>{ work.column_3.li2 }</li>
                <li>{ work.column_3.li3 }</li>
                <li>{ work.column_3.li4 }</li>
                <li>{ work.column_3.li5 }</li>
                <li>{ work.column_3.li6 }</li>
              </ul>
            </div>
            <div className="col-md-3-sm-6 mb-2">
              <img className="img-fluid" src={ work.image.src2 } />
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 mb-2 ">
              <img className="img-fluid" src={ work.image.src3 } />
            </div>
          </div>


        </div>
        <div className="container ">
          <div className="row justify-content-center">
            <div className="col-md-6 mt-5 ">

            </div>

          </div>
        </div>

      </div>
    )
  };
};

export default WorkModal;
