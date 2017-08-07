import React, { Component } from 'react';
import { connect } from 'react-redux';
import Btn from './btn';
import Duck from '../../../public/assets/img/duck.png';

import { fetchDucks, saveDuck, deleteDuck, clearPond } from '../../redux/actions/duck';

import { getNewDuckCoords, getNewDuckHeading } from '../utils/utils';

require('./dashboard.scss');

class PanelContainer extends Component {
  constructor() {
    super();
    this.state = {
      sizeX: 8,
      sizeY: 8,
      newDuck: null,
    };
    this.handleAddDuck = this.handleAddDuck.bind(this);
    this.handleClearPond = this.handleClearPond.bind(this);
  }

  handleAddDuck() {
    const ducks = this.props.ducks ? this.props.ducks : [];
    const [x, y] = getNewDuckCoords(this.props.currentPond.x, this.props.currentPond.y, ducks);
    const heading = getNewDuckHeading();
    const newDuck = {
      x,
      y,
      heading,
      className: `ducks-icon-${heading}`,
    };
    this.props.onSaveDuck(newDuck);
  }

  handleClearPond() {
    const { pondId } = this.props;
    console.log('POND', pondId);
    this.props.onClearPond(pondId);
  }

  render() {
    return (
      <div className="actions-panel flex-column-center-start">
        <div className="panel-title">Welcome to the Golden Pond!</div>
        <div className="panel-btn-container">
          <Btn img={Duck} text={'+ duck'} handleClick={this.handleAddDuck} />
          <Btn img={Duck} text={'Clear Pond'} handleClick={this.handleClearPond} />
          <Btn img={Duck} text={'F'} />
          <div className="flex-row-center-center">
            <Btn img={Duck} text={'P'} />
            <Btn img={Duck} text={'S'} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentPond: state.pond.currentPond,
});

const mapDispatchToProps = dispatch => ({
  onSaveDuck: newDuck => dispatch(saveDuck(newDuck)),
  onFetchDucks: pondId => dispatch(fetchDucks(pondId)),
  onClearPond: pondId => dispatch(clearPond(pondId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PanelContainer);
