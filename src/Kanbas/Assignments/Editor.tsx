import { Link, useNavigate, useParams } from "react-router-dom";
import "../styles.css";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import { addAssignmentAPI, updateAssignmentAPI } from "./client";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const assignments = useSelector((state: any) => state.assignmentReducer.assignments);
    const courseAssignment = assignments.find(
        (assignment: any) => assignment._id === aid
    );

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [assignmentData, setAssignmentData] = useState({
        _id: courseAssignment?._id || "",
        title: courseAssignment?.title || "",
        description: courseAssignment?.description || "",
        points: courseAssignment?.points || "",
        from: courseAssignment?.from || "2024-05-01",
        to: courseAssignment?.to || "2024-05-15",
        due: courseAssignment?.due || "2024-05-16",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setAssignmentData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSaveOrUpdate = async () => {
        try {
            if (courseAssignment) {
                // Update assignment
                const updatedAssignment = await updateAssignmentAPI(
                    assignmentData._id,
                    assignmentData
                );
                dispatch(updateAssignment(updatedAssignment));
            } else {
                // Add new assignment
                const newAssignment = await addAssignmentAPI(cid!, assignmentData);
                dispatch(addAssignment(newAssignment));
            }

            navigate(`/Kanbas/Courses/${cid}/Assignments`);
        } catch (error) {
            console.error("Error saving assignment:", error);
            alert("Failed to save the assignment. Please try again.");
        }
    };

    return (
        <div className="container">
            <div id="wd-assignments-editor">
                <label htmlFor="wd-name">Assignment Name</label><br />
                <input
                    id="title"
                    value={assignmentData.title}
                    className="form-control"
                    onChange={handleChange}
                    placeholder="New Assignment Name"
                />
                <br />

                <label htmlFor="wd-id">Assignment ID</label><br />
                <input
                    id="_id"
                    value={assignmentData._id}
                    className="form-control"
                    onChange={handleChange}
                    placeholder="Assignment ID"
                />
                <br />


                <textarea
                    id="description"
                    value={assignmentData.description}
                    className="form-control"
                    style={{ width: "100%", height: "300px" }}
                    onChange={handleChange}
                    placeholder="Assignment Description"
                ></textarea>

                <div className="mt-4">
                    <div className="row">
                        <div className="col-md-2 col-12">
                            <label htmlFor="wd-points" className="form-label">Points</label>
                        </div>
                        <div className="col-md-10 col-12 d-flex align-items-center position-relative">
                            <input
                                id="points"
                                type="number"
                                value={assignmentData.points || ""}
                                className="form-control"
                                onChange={(e) =>
                                    setAssignmentData((prev) => ({
                                        ...prev,
                                        points: e.target.value,
                                    }))
                                }
                                placeholder="Assignment Points"
                            />
                        </div>
                    </div>


                    <div className="row mt-3">
                        <div className="col-md-2 col-12">
                            <label htmlFor="wd-group" className="form-label">Assignment Group</label>
                        </div>
                        <div className="col-md-10 col-12 d-flex align-items-center position-relative">
                            <select id="wd-group" className="form-control w-100">
                                <option value="ASSIGNMENTS" selected>ASSIGNMENTS</option>
                                <option value="QUIZZES">QUIZZES</option>
                            </select>
                            <FaChevronDown
                                className="position-absolute"
                                style={{ right: '30px' }}
                            />
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-md-2 col-12">
                            <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
                        </div>
                        <div className="col-md-10 col-12 d-flex align-items-center position-relative">
                            <select id="wd-display-grade-as" className="form-control">
                                <option value="PERCENTAGE" selected>Percentage</option>
                                <option value="NUMBERS">Numbers</option>
                            </select>
                            <FaChevronDown
                                className="position-absolute"
                                style={{ right: '30px' }}
                            />
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-md-2 col-12">
                            <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
                        </div>
                        <div className="col-md-10 col-12">
                            <div className="position-relative">
                                <select id="wd-submission-type" className="form-control">
                                    <option value="ONLINE" selected>Online</option>
                                    <option value="INPERSON">In Person</option>
                                </select>
                                <FaChevronDown className="position-absolute" style={{ right: '18px', top: '50%', transform: 'translateY(-50%)' }} />
                            </div>

                            <div className="p-3 border rounded mt-3">
                                <b>Online Entry Options</b><br /><br />
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="online-entry-options" id="wd-text-entry" />
                                    <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
                                </div><br />
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="online-entry-options" id="wd-website-url" />
                                    <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
                                </div><br />
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="online-entry-options" id="wd-media-recordings" />
                                    <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
                                </div><br />
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="online-entry-options" id="wd-student-annotation" />
                                    <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
                                </div><br />
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="online-entry-options" id="wd-file-upload" />
                                    <label className="form-check-label" htmlFor="wd-file-upload">File Uploads</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-md-2 col-12">
                            <label htmlFor="wd-assign-to" className="form-label">Assign</label>
                        </div>
                        <div className="col-md-10 col-12">
                            <div className="p-3 border rounded">

                                <div className="mb-3">
                                    <label htmlFor="assign-to" className="form-label"><h5>Assign to</h5></label>
                                    <div className="input-group">
                                        <div className="form-control d-flex align-items-center" id="assign-to">
                                            <span className="badge bg-light text-dark me-2 fs-6">Everyone</span>
                                            <button type="button" className="btn-close" aria-label="Remove"></button>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label htmlFor="wd-due"><b>Due</b></label>
                                    <div className="input-group">
                                        <input
                                            id="wd-due"
                                            value={assignmentData.due}
                                            type="date"
                                            className="form-control"
                                            onChange={handleChange} />
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="wd-available-from"><b>Available from</b></label>
                                        <input
                                            id="wd-available-from"
                                            value={assignmentData.from}
                                            type="date"
                                            className="form-control"
                                            onChange={handleChange} />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="wd-available-until"><b>Until</b></label>
                                        <input
                                            id="wd-available-until"
                                            value={assignmentData.to}
                                            type="date"
                                            className="form-control"
                                            onChange={handleChange} />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div><br />


                </div>
                <hr />
                <div
                    className="btn btn-md btn-secondary me-1 float-end"
                    onClick={handleSaveOrUpdate}>
                    Save
                </div>

                <Link to={`/Kanbas/Courses/${cid}/Assignments`}
                    className="btn btn-md btn-danger me-1 float-end">
                    Cancel
                </Link>
            </div>
        </div>
    )
}