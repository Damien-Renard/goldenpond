import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchOnePond } from '../../../redux/actions/pond';

class PondsList extends Component {
  constructor() {
    super();
    this.state = {
      selectedPond: '',
    };
    this.handleSelectPond = this.handleSelectPond.bind(this);
    this.handleConfirmSelectedPond = this.handleConfirmSelectedPond.bind(this);
  }

  handleSelectPond(ev) {
    this.setState({
      selectedPond: ev.target.id,
    });
  }

  handleConfirmSelectedPond() {
    this.props.onConfirmPond(this.state.selectedPond);
    this.props.onCloseModal('/main');
  }

  render() {
    return (
      <div className="modal-content">
        {
          this.props.ponds.length > 0
          ? <div className="flex-column-center-start">
            {
              this.props.ponds.map((pond) => {
                const activeItem = pond.id === +this.state.selectedPond ? 'active-item' : '';
                return (
                  <div className={`pond-list-item ${activeItem}`} id={pond.id} key={pond.id} onClick={this.handleSelectPond}>{pond.name}</div>
                );
              })
            }
            {
              this.state.selectedPond !== ''
              ? <button className="modal-btn" onClick={this.handleConfirmSelectedPond}>VIEW THIS POND</button>
              : <button className="modal-btn btn-disabled" disabled>SELECT A POND</button>
            }
            <button className="modal-btn" onClick={this.props.onResetModal}>CANCEL</button>
          </div>
          : <div>
            <div>{'You do not have any saved ponds'}</div>
            <button className="modal-btn" onClick={() => this.props.onSelectModal('create-pond')}>CREATE A POND</button>
            <button className="modal-btn" onClick={this.props.onResetModal}>CANCEL</button>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ponds: state.pond.ponds,
  currentPond: state.pond.currentPond,
});

const mapDispatchToProps = dispatch => ({
  onConfirmPond: pondId => dispatch(fetchOnePond(pondId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PondsList);
