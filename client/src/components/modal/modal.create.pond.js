import React, { Component } from 'react';
import { connect } from 'react-redux';
import { savePond } from '../../../redux/actions/pond';
import { getPondValues } from '../../utils/utils';

/* ---- CHILD COMPONENT ---- */
import Input from '../form/input';
import Dropdown from '../form/dropdown';

class CreatePond extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      x: 4,
      y: 4,
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSizeSelect = this.handleSizeSelect.bind(this);
    this.handleSavePond = this.handleSavePond.bind(this);
  }

  handleOnChange(ev) {
    this.setState({
      name: ev.target.value,
    });
  }

  handleSizeSelect(ev) {
    this.setState({
      [ev.target.id]: +ev.target.value,
    });
  }

  handleSavePond() {
    const { name, x, y } = this.state;
    const newPond = { name, x, y };
    this.props.onSavePond(newPond);
    this.props.onCloseModal('/main');
  }

  render() {
    const [x, y] = [4, 16];
    const values = getPondValues(x, y);

    return (
      <div className="modal-content flex-column-center-center">
        <div className="create-pond-body">
          <Input
            placeholder={'Give your pond a name!'}
            handleOnChange={this.handleOnChange}
          />
          <div className="create-pond-row flex-row-space-between">
            <div>Width</div>
            <Dropdown
              id="x"
              values={values}
              handleSelect={this.handleSizeSelect}
            />
          </div>
          <div className="create-pond-row flex-row-space-between">
            <div>Height</div>
            <Dropdown
              id="y"
              values={values}
              handleSelect={this.handleSizeSelect}
            />
          </div>
        </div>
        {
          this.state.name !== ''
          ? <button className="modal-btn" onClick={this.handleSavePond}>CREATE NEW POND</button>
          : <button className="modal-btn btn-disabled" disabled>CREATE NEW POND</button>
        }
        <button className="modal-btn" onClick={this.props.onResetModal}>CANCEL</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ponds: state.pond.ponds,
});

const mapDispatchToProps = dispatch => ({
  onSavePond: newPond => dispatch(savePond(newPond)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePond);
