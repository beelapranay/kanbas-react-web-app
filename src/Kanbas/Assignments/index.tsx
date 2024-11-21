import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
    fetchAssignments as fetchAssignmentsAPI,
    deleteAssignmentAPI,
    addAssignmentAPI,
    updateAssignmentAPI,
} from "./client";
import {
    setAssignments,
    addAssignment,
    deleteAssignment,
    updateAssignment,
} from "./reducer";
import AssignmentControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentEditorDialog from "./AssignmentEditorDialog";
import { FaTrash } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { BsGripVertical } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import AssignmentLessonControlButtons from "./AssignmentLessonControlButtons";

export default function Assignments() {
    const { cid } = useParams();
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const assignments = useSelector((state: any) => state.assignmentReducer.assignments);
    const isFaculty = currentUser?.role === "FACULTY";

    const [selectedAssignmentId, setSelectedAssignmentId] = useState<string | null>(null);

    useEffect(() => {
        const fetchAssignments = async () => {
            if (!cid) {
                console.error("Course ID is undefined.");
                return;
            }
            try {
                const data = await fetchAssignmentsAPI(cid);
                dispatch(setAssignments(data));
            } catch (error) {
                console.error("Failed to fetch assignments:", error);
            }
        };

        fetchAssignments();
    }, [cid, dispatch]);

    const courseAssignments = assignments.filter(
        (assignment: any) => assignment.course === cid
    );

    const formatDate = (givenDate: string) => {
        const date = new Date(givenDate);
        if (isNaN(date.getTime())) {
            return "Invalid Date";
        }
        const options: Intl.DateTimeFormatOptions = { day: "numeric", month: "long" };
        return date.toLocaleDateString("en-GB", options);
    };

    const handleDeleteClick = (assignmentId: string) => {
        setSelectedAssignmentId(assignmentId);
    };

    const confirmDelete = async () => {
        if (selectedAssignmentId) {
            try {
                await deleteAssignmentAPI(selectedAssignmentId); // Delete from backend
                dispatch(deleteAssignment(selectedAssignmentId)); // Update Redux store
                setSelectedAssignmentId(null); // Reset local state
            } catch (error) {
                console.error("Failed to delete assignment:", error);
            }
        }
    };

    const handleAddAssignment = async (newAssignment: any) => {
        try {
            const addedAssignment = await addAssignmentAPI(cid!, newAssignment);
            dispatch(addAssignment(addedAssignment));
        } catch (error) {
            console.error("Failed to add assignment:", error);
        }
    };

    const handleUpdateAssignment = async (updatedAssignment: any) => {
        try {
            const updated = await updateAssignmentAPI(updatedAssignment._id, updatedAssignment);
            dispatch(updateAssignment(updated));
        } catch (error) {
            console.error("Failed to update assignment:", error);
        }
    };

    return (
        <div id="wd-assignments">
            <AssignmentControls onAddAssignment={handleAddAssignment} />
            <br />
            <br />

            <div>
                <ul id="wd-modules" className="list-group rounded-0">
                    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                        <div className="wd-title p-3 ps-2 bg-secondary">
                            <BsGripVertical className="me-2 fs-3" />
                            <IoMdArrowDropdown className="me-2 fs-3" />
                            ASSIGNMENTS
                            <AssignmentControlButtons />
                        </div>

                        <ul className="wd-lessons list-group rounded-0">
                            {courseAssignments.map((assignment: any) => (
                                <li key={assignment._id} className="wd-lesson list-group-item p-3 ps-1">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            <BsGripVertical className="me-2 fs-3" />
                                            <GrNotes className="me-3 fs-4" />
                                        </div>
                                        <div className="d-flex flex-grow-1 align-items-start">
                                            <div>
                                                {isFaculty ? (
                                                    <a
                                                        href={`#/Kanbas/Courses/${assignment.course}/Assignments/${assignment._id}`}
                                                        className="text-dark"
                                                    >
                                                        <b>{assignment.title}</b>
                                                    </a>
                                                ) : (
                                                    <b>{assignment.title}</b>
                                                )}
                                                <p className="mb-1">
                                                    <span className="text-danger">Multiple Modules</span> |{" "}
                                                    <span>
                                                        {`Not available until ${formatDate(
                                                            assignment.from
                                                        )} at 12:00 a.m.`}{" "}
                                                        |{" "}
                                                    </span>
                                                </p>
                                                <p className="mb-0">
                                                    <span className="fw-bold">Due</span>{" "}
                                                    {`${formatDate(assignment.due)}`} at 11:59 p.m. |{" "}
                                                    {`${assignment.points}`} pts
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            {isFaculty && (
                                                <FaTrash
                                                    className="text-danger me-3"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#delete-assignment-modal"
                                                    onClick={() => handleDeleteClick(assignment._id)}
                                                />
                                            )}
                                            <AssignmentLessonControlButtons
                                                assignment={assignment}
                                                onEdit={handleUpdateAssignment}
                                            />
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </div>
            {isFaculty && (
                <AssignmentEditorDialog
                    onConfirm={confirmDelete}
                    onCancel={() => setSelectedAssignmentId(null)}
                />
            )}
        </div>
    );
}