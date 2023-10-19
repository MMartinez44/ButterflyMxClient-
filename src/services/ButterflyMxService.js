import axios from "axios";
const RESIDENT_BASE_API_URL = 'http://localhost:8080/api/v1/residents';

export function getAllResidents(){
    return axios.get(RESIDENT_BASE_API_URL);
}

export function createResident(resident){
    return axios.post(RESIDENT_BASE_API_URL,resident);
}

export function getById(id){
    return axios.get(`${RESIDENT_BASE_API_URL}/${id}`);
}

export function updateResident(id, resident){
    return axios.put(`${RESIDENT_BASE_API_URL}/${id}`, resident);
}

export function deleteResident(id){
    return axios.delete(`${RESIDENT_BASE_API_URL}/${id}`);
}
