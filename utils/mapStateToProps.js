import React, { Component } from 'react';
import { Container } from 'flux/utils';

export const mapStateToProps = (store, calculateState, executeInitialAction) => (Komponent) => {
  const Kontainer = Container.createFunctional(
    props => React.createElement(Komponent, props),
    () => [store],
    calculateState
  );

  return Object.assign(Kontainer, {
    async getInitialProps() {
      await executeInitialAction();
      return calculateState();
    }
  });
};
