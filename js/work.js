import React from 'react';



export class Work extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3 className="my-4">Expertise</h3>
        <div className="row">
          { this.props.work.map ( (work, idx) => {
            return (
              <WorkBubble work={work} key={idx} />
            )
          })
          }
        </div>
      </div>
    )
  }
}

class WorkBubble extends React.Component {
  render() {
    let work = this.props.work
    return (
      <div className="col-md-3 col-sm-6 mb-5">
        <div className="button-hover">
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
