import React, { Component } from "react";
import { DivLoader } from "./Spinner.styled";
import Loader from "react-loader-spinner";

export class SpinnerLoader extends Component {
  render() {
    return (
      <DivLoader>
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={80}
          width={80}
          timeout={3000}
        />
      </DivLoader>
    );
  }
}
