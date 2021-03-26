import "../sass/modal.scss";

import React, { Component } from "react";

class Modal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { show, handleClose, info, parentInfo } = this.props;
    if (!show) return <div></div>;

    const showHideClassName = show
      ? "modal display-block"
      : "modal display-none";

    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <h3>{info.title}</h3>
          <div>Archived: {info.archived || "NA"}</div>
          <div>Category: {info.category || "NA"}</div>
          <div>Name: {info.metric_name || "NA"}</div>
          <div>Start: {info.metric_start || "NA"}</div>
          <div>Target: {info.metric_target || "NA"}</div>
          <div>Parent Objective ID: {info.parent_objective_id || "NA"}</div>
          <button onClick={this.props.handleClose} className="modal-footer">
            Close
          </button>
        </section>s
      </div>
    );
  }
}

export default Modal;
