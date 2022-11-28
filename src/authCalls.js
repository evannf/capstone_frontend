import axios from "axios";

export const loginCall = async (userInfo, dispatch) => {
    dispatch({type: "LOGIN_ATTEMPT"});
    try{
        const res = await axios.post('http://localhost:3001/login/', userInfo);
        dispatch({type:"LOGIN_SUCCESS", response:res.data})
    } catch (err) {
        dispatch({type:"LOGIN_FAILED", response: err })
    }
};