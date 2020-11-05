import React, { Component } from "react";

class Simpletextarea extends Component {
  render() {
    console.log('out=', this.props.out)
    return (
        <textarea type="textarea" readOnly={this.props.readonly === 'true'}
          className={this.props.classnam}
          placeholder={this.props.placeholdr}
          value={this.props.valu}
          name="textValue"
          onChange={this.props.handleChange}
          />
    );
  }
}

export default Simpletextarea;

