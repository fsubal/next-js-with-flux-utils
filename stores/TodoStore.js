import { ReduceStore } from 'flux/utils';
import { dispatcher } from '../utils/Dispatcher';

class TodoStore extends ReduceStore {
  constructor(initialState) {
    super(dispatcher);
		this.handler = {
			fetchTodos,
			addTodo,
			toggleChangeTodo
		};
		this._state = initialState;
  }

	/** @override */
  getInitialState() {
		return this._state ? undefined : {
			todos: []
		};
  }

	/** @override */
  reduce = (state, action) => {
		console.log(state);
		const { type, ...payload } = action;
		return this.handler[type](state, payload);
	}
}

/**
 * @param {{todos: object[]}} state 
 * @param {{todos: object[]}} payload
 */
const fetchTodos = (state, { todos }) => {
	return { todos };
};

/**
 * @param {*} state 
 * @param {*} payload
 */
const addTodo = (state, { title }) => {
	const todos = [...state.todos, {
		id: state.todos.length + 1,
		title,
		completed: false,
	}];

	return { todos };
};

/**
 * @param {*} state 
 * @param {*} payload
 */
const toggleChangeTodo = (state, { id, completed }) => {
	state.todos[id - 1].completed = completed;
	return state;
}

export default TodoStore;
