import React from 'react';
import Index from '../component/Index/Index';
import { mapStateToProps } from '../utils/mapStateToProps';
import TodoStore from '../stores/TodoStore';
import TodoAction from '../actions/TodoAction';

let rehydrated;
if (typeof window !== 'undefined' && window.__NEXT_DATA__) {
  rehydrated = window.__NEXT_DATA__.props;
  window.__NEXT_DATA__ = undefined;
}
const todoStore = new TodoStore(rehydrated);

export default (
  mapStateToProps(
    /** Stores to subscribe */
    todoStore,

    /** Calcurate stores to props */
    () => ({ ...todoStore.getState() }),

    /** Get initial props */
    async () => {
      await TodoAction.fetchTodos();
      return { ...todoStore.getState() };
    }
  )(Index)
);
