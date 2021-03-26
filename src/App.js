import "./App.css";
import "./sass/dropdown.scss";

import React, { Component } from "react";

import Accordion from "./components/Accordion";
import Filter from "./components/Filter";
import Modal from "./components/Modal";
import Skeleton from "react-skeleton-loader";
import { fetchData } from "./utils/API";
import { filterData } from "./utils/Helper";
import shortid from "shortid";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      okrData: {},
      loading: true,
      show: false,
      childInfo: null,
      parent: null,
      showModal: false
    };
  }

  async componentDidMount() {
    this._setData();
  }

  _setData = async () => {
    const OKRData = await fetchData();
    this.setState({ okrData: filterData(OKRData), loading: false });
  };

  handleChange = async (category) => {
    if (category !== "Select an Option") {
      const OKRData = await fetchData();

      let formattedData = filterData(OKRData);
      let _filteredOKRData = formattedData.filter(
        (item) => item.category === category
      );
      this.setState({ okrData: _filteredOKRData });
    } else {
      this.getData();
    }
  };

  showModal = (childInfo, parent) => {
    this.setState({ showModal: true, childInfo: childInfo, parent: parent });
  };

  hideModal = () => {
    this.setState({ showModal: false, childInfo: null, parent: null });
  };

  render() {
    let { loading, okrData } = this.state;
    if (loading) {
      return <Skeleton count={5} width="100%" style={{ margin: "50px" }} />;
    } else {
      return (
        <div>
          <Filter handleChange={this.handleChange} />
          {okrData.map((j) => (
            <>
              <Accordion
                data={j}
                key={shortid.generate()}
                showModal={this.showModal}
              />
            </>
          ))}

          <Modal
            show={this.state.showModal}
            handleClose={this.hideModal}
            info={this.state.childInfo}
            parentInfo={this.state.parent}
          />
        </div>
      );
    }
  }
}

export default App;
