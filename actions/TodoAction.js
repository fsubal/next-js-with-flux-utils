import { dispatch } from '../utils/Dispatcher';
import axios from 'axios';

export default {
	async fetchTodos() {
		const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
		const [$1, $2, $3, ...rest] = response.data;

		dispatch('fetchTodos', { todos: [$1, $2, $3] });
	},

	/**
	 * @param {string} title 
	 */
	addTodo(title) {
		dispatch('addTodo', { title });
	},

	/**
	 * @param {number} id 
	 * @param {bool} done 
	 */
	toggleChangeTodo(id, completed) {
		dispatch('toggleChangeTodo', { id, completed });
	}
}
