export function socketMiddleware(wsUrl, wsActions) {
  return (store) => {
    let socket = null;

    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;
      const { wsInit, onOpen, onClosing, onClose, onError, onMessage } =
        wsActions;

      if (type === wsInit) {
        if (payload?.token) {
          socket = new WebSocket(`${wsUrl}?token=${payload.token}`);
        } else {
          socket = new WebSocket(wsUrl);
        }
      }

      if (type === onClosing) {
        socket.close(1000, "App closed");
      }

      if (socket) {
        socket.onopen = (event) => {
          dispatch({ type: onOpen, payload: event });
        };

        socket.onerror = (event) => {
          dispatch({ type: onError, payload: event });
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;
          dispatch({ type: onMessage, payload: restParsedData });
        };

        socket.onclose = (event) => {
          dispatch({ type: onClose, payload: event });
        };
      }

      next(action);
    };
  };
}
