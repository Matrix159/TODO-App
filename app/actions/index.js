/**
 * Created by Eldridge on 3/12/2017.
 */
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export function login(userCredentials) {
    if (userCredentials.username === 'testusers' && userCredentials.password === 'abcd123') {
        return {
            type: LOGIN_SUCCESS
        }
    }
    else {
        return {
            type: LOGIN_ERROR
        }
    }
}
