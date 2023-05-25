import axios from "axios";

const apiClient = axios.create (
    {
        baseURL: 'http://localhost:8080'
    }
);

export const fetchingCoursesList 
    = () => apiClient.get('/retrieve-course')


export const deleteCourseApi
    = (username) => apiClient.delete( `/delete-course/${username}`)

export const addNewCourseApi
    = (name, course) => apiClient.put( `/add-new-course/${name}`, course)