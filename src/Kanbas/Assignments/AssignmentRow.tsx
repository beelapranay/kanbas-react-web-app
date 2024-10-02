import { FaGripVertical, FaCheckCircle } from "react-icons/fa";
import { MdAssignment } from "react-icons/md";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsGripVertical } from "react-icons/bs";
import { GrNotes } from "react-icons/gr";
import GreenCheckmark from "../Courses/Modules/GreenCheckmark";

export default function AssignmentRow() {
    return (
        <div className="d-flex justify-content-between align-items-center">
            <div>
                <BsGripVertical className="me-2 fs-3" />
                <GrNotes className="me-3 fs-4" />
            </div>

            <div className="d-flex align-items- flex-grow-1">
                <div>
                    <strong>A1</strong>
                    <p className="mb-1">
                        <span className="text-danger">Multiple Modules</span> | <span>Not available until May 6 at 12:00am | </span>
                    </p>
                    <p className="mb-0">
                        <span className="fw-bold">Due</span> May 13 at 11:59pm | 100 pts
                    </p>
                </div>
            </div>

            <div className="float-end">
                <GreenCheckmark />
                <IoEllipsisVertical className="fs-3" />
            </div>
        </div>
    );
}
