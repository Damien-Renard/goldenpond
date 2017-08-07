import React, { Component } from 'react';
import { connect } from 'react-redux';

/* ---- CHILD COMPONENTS ---- */
import Dashboard from '../dashboard/panel.container';
import Pond from './pond';

/* ---- STYLE ---- */
require('./pond.scss');

class PondContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDuck: '',
    };
    this.handleSelectDuck = this.handleSelectDuck.bind(this);
  }

  handleSelectDuck(ev) {
    this.setState({
      activeDuck: ev.target.id,
    });
  }

  render() {
    return (
      <div id="wrapper" className="flex-column-center-center">
        {
          this.props.currentPond && this.props.ducks !== []
          ?
            <div className="flex-row-center-center">
              <Dashboard
                ducks={this.props.ducks}
                pondId={this.props.currentPond.id}
                activeDuck={this.state.activeDuck}
              />
              <div className="main-body flex-column-center-center">
                <Pond
                  size={[this.props.currentPond.x, this.props.currentPond.y]}
                  ducks={this.props.ducks}
                  handleSelectDuck={this.handleSelectDuck}
                  activeDuck={this.state.activeDuck}
                />
              </div>
            </div>
          : <div className="loading">{'... wait up while we load your pond!'}</div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ducks: state.duck.ducks,
  currentPond: state.pond.currentPond,
});

export default connect(mapStateToProps, null)(PondContainer);
