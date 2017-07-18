import BaseService from "./BaseService";
import * as axios from "axios";


export default class TodoService extends BaseService {
    get className() {
        return "todos";
    }

};