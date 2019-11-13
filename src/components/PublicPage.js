import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

export const PublicPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Boilerplate App</h1>
      <p>Boilerplate App Description</p>
      <button className="button" onClick={startLogin}>
        Login
      </button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(
  undefined,
  mapDispatchToProps
)(PublicPage);