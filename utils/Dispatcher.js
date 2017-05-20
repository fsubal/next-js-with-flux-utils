import { Dispatcher } from 'flux';

export const dispatcher = new Dispatcher();

export const dispatch = (type, payload) => (
  dispatcher.dispatch({
    type, ...payload
  })
);
