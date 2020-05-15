export const emailChanged = (email) => {
  return {
    type: 'EMAIL_CHANGED',
    payload: email
  };
};

export const passwordChanged = (password) => {
  return {
    type: 'PASSWORD_CHANGED',
    payload: password
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({
      type: 'LOAD_SPINNER'
    });
    fetch('http://localhost:3000/auth', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password,
          password_confirmation: password
        })
      }).then((response) => {
        console.log(response);
        if (response.status === 401) {
          console.log('AUTHENTICATION ERROR!!');
          dispatch({
            type: 'LOGIN_FAILED'
          });
        } else {
          console.log('SUCCESS!!');

          console.log(response.headers);
          dispatch({
            type: 'LOGIN_USER_SUCCESS',
            payload: response.headers
          })
          // response.json().then(headers => {
          //   console.log(headers);
          //   dispatch({
          //     type: 'LOGIN_USER_SUCCESS',
          //     payload: headers
          //   });
          // });
        }
      });
  };
};
