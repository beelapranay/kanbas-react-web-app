import "../styles.css";
import { FaChevronDown } from "react-icons/fa";

export default function AssignmentEditor() {
    return (
        <div className="container">
            <div id="wd-assignments-editor">
                <label htmlFor="wd-name"><h5>Assignment Name</h5></label><br />
                <input id="wd-name" value="A1" className="form-control" /><br />


                <div id="wd-description" className="p-3 border rounded">
                    <p>
                        The assignment is <span className="text-danger">available online</span>
                    </p>
                    <p>
                        Submit a link to the landing page of your Web application running on Netlify.
                    </p>
                    <p>
                        The landing page should include the following:
                    </p>
                    <ul>
                        <li>Your full name and section</li>
                        <li>Links to each of the lab assignments</li>
                        <li>
                            Link to the Kanbas application
                        </li>
                        <li>Links to all relevant source code repositories</li>
                    </ul>
                    <p>
                        The Kanbas application should include a link to navigate back to the landing page.
                    </p>
                </div>

                <div className="mt-4">
                    <div className="row">
                        <div className="col-md-2 col-12">
                            <label htmlFor="wd-points" className="form-label">Points</label>
                        </div>
                        <div className="col-md-10 col-12 d-flex align-items-center position-relative">
                            <input id="wd-points" value="100" className="form-control" />
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

                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="wd-available-from"><b>Available from</b></label>
                                        <input id="wd-available-from" value="2024-05-06" type="date" className="form-control" />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="wd-available-until"><b>Until</b></label>
                                        <input id="wd-available-until" value="2024-05-20" type="date" className="form-control" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><br />

                </div>
                <hr />

                <button id="wd-collapse-all" className="btn btn-md btn-secondary me-1 float-end">
                    Save</button>
                <button id="wd-view-progress" className="btn btn-md btn-danger me-1 float-end">
                    Cancel</button>
            </div>
        </div>
    )
}