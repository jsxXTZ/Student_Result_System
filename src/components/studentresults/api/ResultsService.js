import axios from "axios";

const apiClient = axios.create (
    {
        baseURL: 'http://localhost:8080'
    }
);

export const fetchingResultsList 
    = () => apiClient.get('/retrieve-results')


export const deleteResultApi
    = (username) => apiClient.delete( `/delete-result/${username}`)

export const addNewResultApi
    = (username, result) => apiClient.put( `/add-new-result/${username}`, result)