import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

export const PublicPage = () => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Boilerplate App</h1>
      <p>Public Page</p>
    </div>
  </div>
);

export default PublicPage;
