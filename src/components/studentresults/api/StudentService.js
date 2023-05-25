import axios from "axios";

const apiClient = axios.create (
    {
        baseURL: 'http://localhost:8080'
    }
);

export const fetchingStudentsList 
    = () => apiClient.get('/retrieve-students')


export const deleteStudentApi
    = (username) => apiClient.delete( `/delete-student/${username}`)

export const addNewStudentApi
    = (username, student) => apiClient.put( `/add-new-student/${username}`, student)