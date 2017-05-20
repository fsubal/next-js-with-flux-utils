import React from 'react';
import Index from '../component/Index/Index';
import { connectToStores } from '../utils/connectToStores';
import TodoStore from '../stores/TodoStore';
import TodoAction from '../actions/TodoAction';

/** rehydrate */
let initialState;
if (typeof window !== 'undefined' && window.__NEXT_DATA__) {
	initialState = window.__NEXT_DATA__.props;
	window.__NEXT_DATA__ = undefined;
}
const todoStore = new TodoStore(initialState && initialState.todoState);

export default (
	connectToStores(
		/** Stores to subscribe */
		[ todoStore ],

		/** Calcurate stores to props */
		() => ({
			todoState: todoStore.getState()
		}),

		/** Get initial props */
		async () => {
			await TodoAction.fetchTodos();
			return { todoState: todoStore.getState() };
		}
	)(Index)
);
