import userConst from './UserConstants';
import { apiInvoke } from './services';


export const userActions = {
    getAPIData
};

function getAPIData() {
    console.log('get API data');
    return dispatch => {
        //console.log('inside dispatch')
        dispatch(request());
        apiInvoke('GET','https://jsonplaceholder.typicode.com/posts').then(
            user => {
                dispatch(success(user));
            },
            error => {

                dispatch(failure(error.toString()));
            }
        );
    };
    function request() { return { type: userConst.GETAPI_REQUEST }; }
    function success(user) { return { type: userConst.GETAPI_SUCCESS, user }; }
    function failure(error) { return { type: userConst.GETAPI_FAILURE, error }; }
}



