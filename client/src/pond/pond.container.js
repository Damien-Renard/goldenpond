import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDucks } from '../../redux/actions/duck';
import { fetchOnePond } from '../../redux/actions/pond';

/* ---- CHILD COMPONENTS ---- */
import Dashboard from '../dashboard/panel.container';
import Pond from './pond';

/* ---- STYLE ---- */
require('./pond.scss');

class PondContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ducks: [],
    };
  }

  render() {
    return (
      <div id="wrapper" className="flex-column-center-center">
        {
          this.props.currentPond && this.props.ducks
          ?
            <div className="flex-row-center-center">
              <Dashboard
                ducks={this.props.ducks}
                pondId={this.props.currentPond.id}
              />
              <div className="main-body flex-column-center-center">
                <Pond
                  size={[this.props.currentPond.x, this.props.currentPond.y]}
                  ducks={this.props.ducks}
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

const mapDispatchToProps = dispatch => ({
  onFetchDucks: pondId => dispatch(fetchDucks(pondId)),
  onFetchCurrentPond: pondId => dispatch(fetchOnePond(pondId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PondContainer);
