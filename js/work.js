import React from 'react';
import WorkModal from './work-modal';

export class Work extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'modalOpen': false,
      'selectedWork': this.props.work[0]
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.openModal.bind(this);
  }

  openModal(evt, work) {
    this.setState({
      'modalOpen': true,
      'selectedWork': work
    });
  }

  closeModal(evt) {
    this.setState({
      'modalOpen': false
    });
  }

  render() {
    return (
      <span>
        <div>
          <h3 className="my-4"></h3>
          <div className="row">
            { this.props.work.map ( (work, idx) => {
              return (
                <WorkBubble work={work} key={idx}
                  openModal={this.openModal} />
              )
            })
            }
          </div>
        </div>
        <WorkModal work={this.state.selectedWork}
          open={this.state.modalOpen} closeModal={this.closeModal} />
      </span>
    )
  }
}

class WorkBubble extends React.Component {
  render() {
    let work = this.props.work
    return (
      <div className="col-md-3 col-sm-6 mb-5">
        <div className="button-hover" onClick={ (evt) => this.props.openModal(evt, work) }>
          <a href="#">
            <div className="tint t2">
              <img className="img-fluid" src={ work.image.src } alt={work.image.desc } />
            </div>
            <div className="text-block">{ work.name }</div>
            </a>
          </div>
        </div>
        )
    }
}

export default Work;
export { WorkBubble };
