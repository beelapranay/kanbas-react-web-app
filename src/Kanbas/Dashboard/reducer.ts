import { createSlice } from "@reduxjs/toolkit";
import { enrollments, courses } from "../Database";

const initialState = {
    courses: courses,
    enrollments: enrollments, // Set initial enrollments from the database
};

const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        enrollCourse: (state, { payload: { courseId, currentUserId }}) => {
            const newEnrollment: any = {
                _id: new Date().getTime().toString(),
                course: courseId,
                user: currentUserId
            };

            if (!state.enrollments.some(e => e.course === courseId && e.user === currentUserId)) {
                state.enrollments = [
                    ...state.enrollments,
                    newEnrollment
                ];
                console.log("New enrollment added:", newEnrollment);
            }
        },

        unenrollCourse: (state, { payload: { courseId, currentUserId } }) => {
            state.enrollments = state.enrollments.filter(
                (e : any) => !(e.course === courseId && e.user === currentUserId)
            );
        }
    },
});

export const { enrollCourse, unenrollCourse } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
