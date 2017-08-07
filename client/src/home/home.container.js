import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { fetchPonds } from '../../redux/actions/pond';

/* ---- COMPONENTS ---- */
import Modal from '../components/modal/modal.container';

/* ---- STYLE & ASSETS ---- */
import DuckPond from '../../../public/assets/img/duckpond.jpg';

require('./home.scss');

class Home extends Component {
  constructor() {
    super();
    this.state = {
      openModal: false,
      modalType: null,
    };
    this.onCloseModal = this.onCloseModal.bind(this);
    this.onSelectModal = this.onSelectModal.bind(this);
    this.onResetModal = this.onResetModal.bind(this);
  }

  componentWillMount() {
    this.props.onFetchPonds();
  }

  onSelectModal(modalType) {
    this.setState({
      openModal: true,
      modalType,
    });
  }

  onResetModal() {
    this.setState({
      openModal: false,
      modalType: null,
    });
  }

  onCloseModal(route) {
    this.onResetModal();
    browserHistory.push(route);
  }

  render() {
    return (
      <div id="wrapper" className="flex-column-center-center">
        <div className="flex-column-center-center">
          <img className="home-img" src={DuckPond} alt="goldenpond" />
          <div className="home-title">{'WHERE ARE WE SWIMMIN\' TODAY?'}</div>
          <div className="flex-row-space-between">
            <button className="create-select-pond-btn" onClick={() => this.onSelectModal('create-pond')}>CREATE NEW POND</button>
            <button className="create-select-pond-btn" onClick={() => this.onSelectModal('select-pond')}>SELECT FROM PONDS LIST</button>
          </div>
        </div>
        {
          this.state.openModal &&
          <Modal
            modalType={this.state.modalType}
            onCloseModal={this.onCloseModal}
            onSelectModal={this.onSelectModal}
            onResetModal={this.onResetModal}
            ponds={this.props.ponds}
          />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ponds: state.pond.ponds,
});

const mapDispatchToProps = dispatch => ({
  onFetchPonds: () => dispatch(fetchPonds()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
