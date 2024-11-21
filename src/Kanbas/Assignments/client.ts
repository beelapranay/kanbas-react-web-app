import axios from "axios";

// Define the base API URL
const API_BASE = "http://localhost:4000/api";

// Fetch assignments for a specific course
export const fetchAssignments = async (courseId: string) => {
    try {
        const response = await axios.get(`${API_BASE}/courses/${courseId}/assignments`);
        return response.data;
    } catch (error: any) {
        console.error("Error fetching assignments:", error.message);
        throw new Error(error.response?.data?.error || "Failed to fetch assignments.");
    }
};

// Add a new assignment to a specific course
export const addAssignmentAPI = async (courseId: string, assignment: any) => {
    try {
        const response = await axios.post(`${API_BASE}/courses/${courseId}/assignments`, assignment);
        return response.data;
    } catch (error: any) {
        console.error("Error adding assignment:", error.message);
        throw new Error(error.response?.data?.error || "Failed to add assignment.");
    }
};

// Update an assignment
export const updateAssignmentAPI = async (assignmentId: string, updates: any) => {
    try {
        const response = await axios.put(`${API_BASE}/assignments/${assignmentId}`, updates);
        return response.data;
    } catch (error: any) {
        console.error("Error updating assignment:", error.message);
        throw new Error(error.response?.data?.error || "Failed to update assignment.");
    }
};

// Delete an assignment
export const deleteAssignmentAPI = async (assignmentId: string) => {
    try {
        await axios.delete(`${API_BASE}/assignments/${assignmentId}`);
    } catch (error: any) {
        console.error("Error deleting assignment:", error.message);
        throw new Error(error.response?.data?.error || "Failed to delete assignment.");
    }
};