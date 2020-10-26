import BaseService from "./BaseService";
import axios from "./MyAxios";


export default class LoginService extends BaseService {
    get className() {
        return "login";
    }

    login(data) {
        return axios.post(this.className, data).then(
            (response) => {
                return response.data;
            }
        );
    }

    logout() {
        return axios.get("logout").then(
            (response) => {
                return response.data;
            }
        );
    }

    register(data) {
        return axios.post("register", data).then(
            (response) => {
                return response.data;
            }
        );
    }

    getConnect() {
        return axios.get("get_connect").then(
            (response) => {
                return response.data;
            }
        );
    } 
    
    myConsole(str){
        return console.log("My Console:" ,str)
    }
};
