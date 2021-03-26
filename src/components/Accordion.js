import "../sass/accordion.scss";

import React, { Component } from "react";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import shortid from "shortid";

class Accordion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
      height: "0px",
      rotate: "accordion__icon",
    };
  }

  toggleAccordion = () => {
    let isActive = !this.state.isActive;
    let height = !isActive ? "0px" : `60px`;
    let rotate = isActive ? "accordion__icon" : "accordion__icon rotate";

    this.setState({
      isActive,
      height,
      rotate,
    });
  };

  render() {
    const { isActive, height, rotate } = this.state;
    let ICON = isActive ? faChevronDown : faChevronRight;

    return (
      <>
        <div className="accordion__section">
          <button
            className={`accordion ${isActive}`}
            onClick={this.toggleAccordion}
          >
            <FontAwesomeIcon icon={ICON} />

            <p className="accordion__title">{this.props.data.title}</p>
          </button>
          {this.props.data.child.map((info) => (
            <div
              key={shortid.generate()}
              ref={info.title}
              style={{ maxHeight: `${height}` }}
              className="accordion__content"
            >
              <div
                className="accordion__text"
                dangerouslySetInnerHTML={{ __html: info.title }}
                onClick={(e) =>
                  this.props.showModal(
                    info,
                    this.props.data.parent_objective_id
                  )
                }
              />
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Accordion;
