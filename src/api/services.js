import axios from "axios";
import { API_URL } from "../constant/defaultUrl";
class service {
    requestService(options , data){
        const { method, apiRoute,} = options;
        console.log(apiRoute)
        const route = apiRoute?apiRoute:""
        if (method === 'GET') {
            return axios.get(API_URL + route , ).then(response => {
               return response
            })
        }
        if (method === 'PATCH') {
            return axios.patch(API_URL + apiRoute  , data ).then(response => {
               return response
            })
        }
    
    }
}
export default new service()