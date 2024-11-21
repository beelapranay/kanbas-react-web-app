import axios from "axios";

export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const API_BASE = `${REMOTE_SERVER}/api`;
const ENROLLMENTS_API = `${API_BASE}/users`;

export const fetchEnrollments = async (userId : any) => {
    const response = await axios.get(`${API_BASE}/users/${userId}/enrollments`);
    return response.data;
};


// Enroll a user in a course
export const enrollInCourse = async (userId : any, courseId : any) => {
    const { data } = await axios.post(`${ENROLLMENTS_API}/${userId}/enrollments`, { courseId });
    return data;
};

// Unenroll a user from a course
export const unenrollFromCourse = async (userId : any, courseId : any) => {
    await axios.delete(`${ENROLLMENTS_API}/${userId}/enrollments/${courseId}`);
};