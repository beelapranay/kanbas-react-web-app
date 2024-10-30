import { BsGripVertical } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import LessonControlButtons from "../Courses/Modules/LessonControlButtons";
import { GrNotes } from "react-icons/gr";
import AssignmentControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { useParams } from "react-router-dom";
import * as db from "../Database"
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { deleteAssignment } from "./reducer";
import AssignmentEditorDialog from "./AssignmentEditorDialog";
import { useState } from "react";

export default function Assignments(
) {
    const { cid } = useParams();
    const assignments = useSelector((state: any) => state.assignmentReducer.assignments);
    const dispatch = useDispatch();

    const [selectedAssignmentId, setSelectedAssignmentId] = useState(null);

    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const isFaculty = currentUser?.role === 'FACULTY';

    const courseAssignments = assignments.filter(
        (assignment: any) => assignment.course === cid
    );

    const formatDate = (givenDate: any) => {
        const date = new Date(givenDate);

        if (isNaN(date.getTime())) {
            return 'Invalid Date';
        }

        const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' };

        return date.toLocaleDateString('en-GB', options);
    }

    const handleDeleteClick = (assignmentId: any) => {
        setSelectedAssignmentId(assignmentId);
    };

    const confirmDelete = () => {
        if (selectedAssignmentId) {
            dispatch(deleteAssignment(selectedAssignmentId));
            setSelectedAssignmentId(null);
        }
    };

    return (
        <div id="wd-assignments">
            <AssignmentControls /><br /><br />

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

                            {courseAssignments.map((assignment: any) => {
                                return <li className="wd-lesson list-group-item p-3 ps-1">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            <BsGripVertical className="me-2 fs-3" />
                                            <GrNotes className="me-3 fs-4" />
                                        </div>
                                        <div className="d-flex flex-grow-1 align-items-start">
                                            <div>
                                                {isFaculty ?
                                                    <a href={`#/Kanbas/Courses/${assignment.course}/Assignments/${assignment._id}`} className="text-dark">
                                                        <b>{assignment.title}</b>
                                                    </a>
                                                    : <b>{assignment.title}</b>}
                                                <p className="mb-1">
                                                    <span className="text-danger">Multiple Modules</span> |
                                                    <span> {`Not available until ${formatDate(assignment.from)} at 12:00 a.m.`} | </span>
                                                </p>
                                                <p className="mb-0">
                                                    <span className="fw-bold">Due</span> {`${formatDate(assignment.due)}`} at 11:59 p.m. | {`${assignment.points}`} pts
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
                                            <LessonControlButtons />
                                        </div>
                                    </div>
                                </li>
                            })}

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