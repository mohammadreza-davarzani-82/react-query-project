import axios from "axios";
import { API_URL } from "../../constant/defaultUrl";
class service {
    requestService(options , data){
        const { method, apiRoute,} = options;
        console.log(apiRoute)
        const route = apiRoute??""
        if (method === 'GET') {
            return axios.get(API_URL + route , ).then(response => {
               return response
            })
        }
        if (method === 'POST') {
            return axios.post(API_URL , data ).then(response => {
               return response
            })
        }
        if (method === 'PUT') {
            return axios.put(API_URL + route , data ).then(response => {
               return response
            })
        }
        if (method === 'DELETE') {
            return axios.delete(API_URL + route  ).then(response => {
               return response
            })
        }
    
    }
}
export default new service()