import { BsGripVertical } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import LessonControlButtons from "../Courses/Modules/LessonControlButtons";
import { GrNotes } from "react-icons/gr";
import AssignmentControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentRow from "./AssignmentRow";
import GreenCheckmark from "../Courses/Modules/GreenCheckmark";
import { Link } from "react-router-dom";

export default function Assignments() {
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

                            <li className="wd-lesson list-group-item p-3 ps-1">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <BsGripVertical className="me-2 fs-3" />
                                        <GrNotes className="me-3 fs-4" />
                                    </div>
                                    <div className="d-flex flex-grow-1 align-items-start">
                                        <div>
                                            <a href="#/Kanbas/Courses/1234/Assignments/123" className="text-dark">
                                                <b>A1</b>
                                            </a>
                                            <p className="mb-1">
                                                <span className="text-danger">Multiple Modules</span> |
                                                <span> Not available until May 6 at 12:00am | </span>
                                            </p>
                                            <p className="mb-0">
                                                <span className="fw-bold">Due</span> May 13 at 11:59pm | 100 pts
                                            </p>
                                        </div>
                                    </div>
                                    <LessonControlButtons />
                                </div>
                            </li>

                            <li className="wd-lesson list-group-item p-3 ps-1">
                                <a href="#/Kanbas/Courses/1234/Assignments/123" className="text-decoration-none text-dark">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            <BsGripVertical className="me-2 fs-3" />
                                            <GrNotes className="me-3 fs-4" />
                                        </div>
                                        <div className="d-flex flex-grow-1 align-items-start">
                                            <div>
                                                <a href="#/Kanbas/Courses/1234/Assignments/123" className="text-dark">
                                                    <b>A2</b>
                                                </a>
                                                <p className="mb-1">
                                                    <span className="text-danger">Multiple Modules</span> |
                                                    <span> Not available until May 13 at 12:00am | </span>
                                                </p>
                                                <p className="mb-0">
                                                    <span className="fw-bold">Due</span> May 20 at 11:59pm | 100 pts
                                                </p>
                                            </div>
                                        </div>
                                        <LessonControlButtons />
                                    </div>
                                </a>
                            </li>

                            <li className="wd-lesson list-group-item p-3 ps-1">
                                <a href="#/Kanbas/Courses/1234/Assignments/123" className="text-decoration-none text-dark">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            <BsGripVertical className="me-2 fs-3" />
                                            <GrNotes className="me-3 fs-4" />
                                        </div>
                                        <div className="d-flex flex-grow-1 align-items-start">
                                            <div>
                                                <a href="#/Kanbas/Courses/1234/Assignments/123" className="text-dark">
                                                    <b>A3</b>
                                                </a>
                                                <p className="mb-1">
                                                    <span className="text-danger">Multiple Modules</span> |
                                                    <span> Not available until May 20 at 12:00am | </span>
                                                </p>
                                                <p className="mb-0">
                                                    <span className="fw-bold">Due</span> May 27 at 11:59pm | 100 pts
                                                </p>
                                            </div>
                                        </div>
                                        <LessonControlButtons />
                                    </div>
                                </a>
                            </li>

                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}