/* eslint-disable no-param-reassign */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Btn from './btn';
import BtnDisabled from './btn.disabled';
import Duck from '../../../public/assets/img/duck.png';

import { fetchDucks, saveDuck, updateDuck, clearPond } from '../../redux/actions/duck';

import getNewDuckCoords from '../utils/get.new.duck.coords';
import getNewDuckHeading from '../utils/get.new.duck.heading';
import getHeadingAfterSpin from '../utils/get.heading.after.spin';

require('./dashboard.scss');

class PanelContainer extends Component {
  constructor() {
    super();
    this.handleAddDuck = this.handleAddDuck.bind(this);
    this.handleClearPond = this.handleClearPond.bind(this);
    this.handleReturnHome = this.handleReturnHome.bind(this);
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
      pondId: this.props.currentPond.id,
    };
    this.props.onSaveDuck(newDuck);
  }

  handleClearPond() {
    const { pondId } = this.props;
    this.props.onClearPond(pondId);
  }

  handleMoveForward(duck, pond) {
    const { heading } = duck;
    if (heading === 'N' && duck.y < pond.y) duck.y++;
    else if (heading === 'S' && duck.y > 0) duck.y--;
    else if (heading === 'E' && duck.x < pond.x) duck.x++;
    else if (heading === 'W' && duck.x > 0) duck.x--;
    this.props.onUpdateDuck(duck.id, duck);
  }

  handleSpin(duck, spin) {
    const newHeading = getHeadingAfterSpin(duck.heading, spin);
    duck.heading = newHeading;
    duck.className = `ducks-icon-${newHeading}`;
    this.props.onUpdateDuck(duck.id, duck);
  }

  handleReturnHome() {
    browserHistory.push('/');
  }

  render() {
    const activeDuck = this.props.ducks.filter(duck => duck.id === +this.props.activeDuck)[0];
    return (
      <div className="actions-panel flex-column-center-start">
        <div className="panel-title">{`Welcome to ${this.props.currentPond.name}!`}</div>
        <div className="panel-btn-container flex-column-center-center">
          <Btn img={Duck} text={'+ duck'} handleClick={this.handleAddDuck} />
          <Btn text={'Clear Pond'} handleClick={this.handleClearPond} />
          <h2>{'Duck Controls'}</h2>
          <h4>{'Select a Duck for a swim!'}</h4>
          {
            !activeDuck
            ? <div className="duck-controls">
              <BtnDisabled text={'F'} />
              <div className="flex-row-center-center">
                <BtnDisabled text={'P'} />
                <BtnDisabled text={'S'} />
              </div>
              <Btn text={'HOME'} />
            </div>
            : <div className="duck-controls">
              <Btn text={'F'} handleClick={() => this.handleMoveForward(activeDuck, this.props.currentPond)} />
              <div className="flex-row-center-center">
                <Btn text={'P'} handleClick={() => this.handleSpin(activeDuck, 'P')} />
                <Btn text={'S'} handleClick={() => this.handleSpin(activeDuck, 'S')} />
              </div>
              <Btn text={'HOME'} handleClick={this.handleReturnHome} />
            </div>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ducks: state.duck.ducks,
  currentPond: state.pond.currentPond,
});

const mapDispatchToProps = dispatch => ({
  onSaveDuck: newDuck => dispatch(saveDuck(newDuck)),
  onFetchDucks: pondId => dispatch(fetchDucks(pondId)),
  onClearPond: pondId => dispatch(clearPond(pondId)),
  onUpdateDuck: (duckId, updatedDuck) => dispatch(updateDuck(duckId, updatedDuck)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PanelContainer);
