export const responseCreator = (next, action) => (payload) => {
  const nextAction = Object.assign({}, action, { payload });
  return next(nextAction);
};

const apiMiddleware = store => next => action => {
  const { type, client, ...otherArgs } = action;

  if (!client) {
    return next(action);
  }

  store.dispatch({ type: type[0], ...otherArgs });

  return client
    .then(
      responseCreator(next, { type: type[1], ...otherArgs }),
    )
    .catch(
      responseCreator(next, { type: type[2], ...otherArgs }),
    );
};

export default apiMiddleware;