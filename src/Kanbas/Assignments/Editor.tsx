import { Link, useNavigate, useParams } from "react-router-dom";
import "../styles.css";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const assignments = useSelector((state: any) => state.assignmentReducer.assignments);
    const courseAssignment = assignments.find(
        (assignment: any) => assignment._id === aid
    );

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [_id, setId] = useState(courseAssignment?._id || "")
    const [title, setTitle] = useState(courseAssignment?.title || "");
    const [description, setDescription] = useState(courseAssignment?.description || `
    The assignment is available online.

    Submit a link to the landing page of your Web application running on Netlify.
    
    The landing page should include the following:
    - Your full name and section
    - Links to each of the lab assignments
    - Link to the Kanbas application
    - Links to all relevant source code repositories
    
    The Kanbas application should include a link to navigate back to the landing page.    
    `);
    const [points, setPoints] = useState(courseAssignment?.points || "");
    const [from, setFrom] = useState(courseAssignment?.from || "");
    const [to, setTo] = useState(courseAssignment?.to || "");
    const [due, setDue] = useState(courseAssignment?.due || "");

    // const formatDueDate = (dueDate: any) => {
    //     const date = new Date(dueDate);

    //     if (isNaN(date.getTime())) {
    //         return "";
    //     }

    //     const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };

    //     return date.toLocaleDateString('en-GB', options);
    // }

    const handleSaveOrUpdate = () => {
        const assignmentData = {
            _id: _id || "",
            title,
            course: cid,
            description,
            points,
            from,
            to,
            due
        };

        if (courseAssignment !== undefined) {
            dispatch(updateAssignment(assignmentData));
        } else {
            dispatch(addAssignment(assignmentData));
        }

        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    return (
        <div className="container">
            <div id="wd-assignments-editor">
                <label htmlFor="wd-name">Assignment Name</label><br />
                <input
                    id="wd-name"
                    value={`${title}`}
                    className="form-control"
                    onChange={(e) => setTitle(e.target.value)} />
                <br />

                <label htmlFor="wd-id">Assignment ID</label><br />
                <input
                    id="wd-id"
                    value={`${_id}`}
                    className="form-control"
                    onChange={(e) => setId(e.target.value)} />
                <br />


                <textarea 
                    id="wd-description"
                    value={`${description}`}
                    className="form-control"
                    style={{ width: "100%", height: "300px" }}
                    onChange={(e) => setDescription(e.target.value)}>
                    
                </textarea>

                <div className="mt-4">
                    <div className="row">
                        <div className="col-md-2 col-12">
                            <label htmlFor="wd-points" className="form-label">Points</label>
                        </div>
                        <div className="col-md-10 col-12 d-flex align-items-center position-relative">
                            <input
                                id="wd-points"
                                value={`${points}`}
                                className="form-control"
                                onChange={(e) => setPoints(e.target.value)} />
                            <FaChevronDown
                                className="position-absolute"
                                style={{ right: '30px' }}
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
                                            value={`${due}`} type="date"
                                            className="form-control"
                                            onChange={(e) => setDue(e.target.value)} />
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="wd-available-from"><b>Available from</b></label>
                                        <input
                                            id="wd-available-from"
                                            value={`${from}`} type="date"
                                            className="form-control"
                                            onChange={(e) => setFrom(e.target.value)} />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="wd-available-until"><b>Until</b></label>
                                        <input
                                            id="wd-available-until"
                                            value={`${to}`} type="date"
                                            className="form-control"
                                            onChange={(e) => setTo(e.target.value)} />
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