import axios from "axios";

// api endpoints
const baseUrl = process.env.REACT_APP_BASE_URL;

const loginCall = async (userCredentials, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post(`${baseUrl}/api/auth/login`, userCredentials);
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: "LOGIN_FAILURE",
      payload: error,
    });
  }
};

export { loginCall };
