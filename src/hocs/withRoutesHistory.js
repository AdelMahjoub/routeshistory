import React, { Component } from 'react'
import { } from 'react-router-dom';

function withRoutesHistory(WrappedComponent) {

  return class extends Component {

    componentDidMount() {
      this.pushRouteHistory();
    }

    getRouteHistory = () => {
      return JSON.parse(localStorage.getItem('routesHistory')) || [];
    }

    pushRouteHistory = () => {
      const pathname = this.props.location.pathname;
      let routesHistory = this.getRouteHistory()
      localStorage.setItem('routesHistory', JSON.stringify([...routesHistory, pathname]));
    }

    render() {
      return <WrappedComponent
        {...this.props}
        routesHistory={this.getRouteHistory()} />;
    }
  };
}

export default withRoutesHistory;