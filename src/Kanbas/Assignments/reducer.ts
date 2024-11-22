import { createSlice } from "@reduxjs/toolkit";

interface Assignment {
    _id: string;
    title: string;
    description: string;
    course: string;
    points: number;
    from: string;
    to: string;
    due: string;
}

const initialState: { assignments: Assignment[] } = {
    assignments: [],
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        setAssignments: (state, action) => {
            state.assignments = action.payload;
        },
        addAssignment: (state, { payload: assignment }) => {
            const newAssignment = {
                _id: new Date().getTime().toString(),
                title: assignment.title,
                description: assignment.description,
                course: assignment.course,
                points: assignment.points,
                from: assignment.from,
                to: assignment.to,
                due: assignment.due,
            };
            state.assignments = [...state.assignments, newAssignment];
        },
        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter(
                (a) => a._id !== assignmentId
            );
            console.log('Updated Assignments:', state.assignments);
        },
        updateAssignment: (state, { payload: assignment }) => {
            state.assignments = state.assignments.map((a) =>
                a._id === assignment._id ? assignment : a
            );
        },
        editAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.map((a) =>
                a._id === assignmentId ? { ...a, editing: true } : a
            );
        },
    },
});

export const {
    setAssignments,
    addAssignment,
    deleteAssignment,
    updateAssignment,
    editAssignment,
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;