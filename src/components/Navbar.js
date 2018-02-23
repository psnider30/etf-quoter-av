import React, { Component } from 'react';

export default class Navbar extends Component {

  render() {
    const { changeLayout, currentLayout } = this.props;
    const timeSeriesButton = currentLayout === 'timeSeries' ? <button className="navbar-button-active">Returns</button> : null;
    return (
      <div className="navbar">
        <button
          className={this.props.currentLayout === "main" ? "navbar-button-active" : "navbar-button"}
          onClick={() => changeLayout('main', currentLayout)}>
          Quote
        </button>

        <button
          className={this.props.currentLayout === "changeSummary" ? "navbar-button-active" : "navbar-button"}
          onClick={() => changeLayout('changeSummary', currentLayout)}>
          Change Summary
        </button>

        <button
          className={this.props.currentLayout === "fundamentals" ? "navbar-button-active" : "navbar-button"}
          onClick={() => changeLayout('fundamentals', currentLayout)}>
          Fundamentals
        </button>

        <button
          className={this.props.currentLayout === "financials" ? "navbar-button-active" : "navbar-button"}
          onClick={() => changeLayout('financials', currentLayout)}>
          Financials
        </button>

        {timeSeriesButton}
      </div>
    );
  }
}
