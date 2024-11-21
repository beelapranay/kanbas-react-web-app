import React, { useState } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AssignmentControls({
    onAddAssignment,
}: {
    onAddAssignment?: (newAssignment: any) => void;
}) {
    const { cid } = useParams(); // Get course ID
    const navigate = useNavigate(); // Use navigate for routing
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const isFaculty = currentUser?.role === "FACULTY";

    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        // Optionally trigger a search handler
    };

    const handleAddAssignmentClick = () => {
        navigate(`/Kanbas/Courses/${cid}/Assignments/AddAssignment`); // Navigate to the Add Assignment page
    };

    return (
        <div id="wd-modules-controls" className="d-flex justify-content-between align-items-center">
            {/* Search Box */}
            <div className="card p-2" style={{ width: "300px", borderRadius: "8px" }}>
                <div className="position-relative">
                    <FaSearch
                        className="position-absolute fs-5"
                        style={{ left: "10px", top: "50%", transform: "translateY(-50%)", color: "#6c757d" }}
                    />
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        style={{
                            fontSize: "20px",
                            paddingLeft: "40px",
                            border: "none",
                            boxShadow: "none",
                        }}
                    />
                </div>
            </div>

            {/* Action Buttons */}
            <div>
                {isFaculty && (
                    <button
                        id="wd-add-assignment-btn"
                        className="btn btn-lg btn-danger me-1"
                        onClick={handleAddAssignmentClick}
                    >
                        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                        Assignment
                    </button>
                )}

                <button id="wd-add-group-btn" className="btn btn-lg btn-secondary me-1">
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Group
                </button>
            </div>
        </div>
    );
}