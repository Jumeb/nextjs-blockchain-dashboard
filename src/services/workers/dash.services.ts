import axios from "axios";
import { config } from "./config";


export default class DashService {
    public async transactionService(json: string) {
        const response = await axios.request(config(json));
        return response.data;
    }

    public async blockService(json: string) {
        const response = await axios.request(config(json))
        return response.data;
    }
}