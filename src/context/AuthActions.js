export const LoginAttempt = (userInfo) => ({
    type: "LOGIN_ATTEMPT"
});

export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    response: user,
});

export const LoginFailed = (user) => ({
    type: "LOGIN_FAILED",
    response: error
});

