import React, { Component } from 'react';
import { Container } from 'flux/utils';

export const initializeProps = (initialAction) => (ConnectedComponent) => (
	class extends Component {
		constructor (props, context) {
			super(props, context);
		}
		
		componentWillmount = () => {
			initialAction();
		}

		render = () => (
			<ConnectedComponent />
		)
	}
);
