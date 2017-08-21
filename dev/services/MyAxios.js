/**
 * Created by elad on 22 מרץ 2017.
 */
import * as axios from "axios";

let $router = null;
export const setRouter = (router) => {
    $router = router;
};
export const setToken = (token) => {
    myAxios.defaults.headers.common['Authorization'] = token;
};
const myAxios = axios.create({
    baseURL: ""
});
// myAxios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
myAxios.interceptors.response.use(function (response) {
    // Do something with response data
    // return null;
    return response;
}, function (error) {
    // Do something with response error
    const response = error.response;
    if (response.status == 401) {
        //TODO go to login page
        if ($router) {
            $router.replace("/login");
        }
    }
    // console.log(error);
    // throw new Error(response);
    return Promise.reject(response);
});

export default myAxios;