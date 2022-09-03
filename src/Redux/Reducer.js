const initState = {
  token: "",
  isAuth: false,
};

export const Reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "Success Login":
      return {
        ...state,
        token: payload,
        isAuth: true,
      };
    case "Request Logout":
      return {
        ...state,
        token: "",
        isAuth: false,
      };
    default:
      return state;
  }
};
