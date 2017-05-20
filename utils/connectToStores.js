import React, { Component } from 'react';
import { Container } from 'flux/utils';

export const connectToStores = (stores, calculateState, getInitialProps) => (_Component) => {
  return Container.create(class extends Component {
    static getStores() {
      return stores;
    }

    static calculateState() {
      return calculateState();
    }

    static async getInitialProps() {
      return await getInitialProps();
    }

    render() {
      return React.createElement(_Component, this.state);
    }
  });
};
