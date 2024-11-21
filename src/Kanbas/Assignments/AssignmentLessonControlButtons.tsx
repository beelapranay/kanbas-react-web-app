import React from "react";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Courses/Modules/GreenCheckmark"

export default function LessonControlButtons({
    assignment,
    onEdit,
}: {
    assignment: any;
    onEdit?: (assignment: any) => void;
}) {
    const handleEditClick = () => {
        if (onEdit) {
            const updatedAssignment = { ...assignment, title: `${assignment.title} (Edited)` };
            onEdit(updatedAssignment); // Call the onEdit handler with updated assignment data
        }
    };

    return (
        <div className="float-end">
            <GreenCheckmark />
            <IoEllipsisVertical
                className="fs-4"
                style={{ cursor: "pointer" }}
                onClick={handleEditClick} // Add an edit action when the ellipsis is clicked
            />
        </div>
    );
}
