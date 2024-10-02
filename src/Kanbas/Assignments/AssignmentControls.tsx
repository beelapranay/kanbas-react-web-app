import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "../Courses/Modules/GreenCheckmark";
import { MdDoNotDisturb } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

export default function AssignmentControls() {
    return (

        <div id="wd-modules-controls" className="d-flex justify-content-between align-items-center">
            <div className="card p-2" style={{ width: "300px", borderRadius: "8px" }}>
                <div className="position-relative">
                    <FaSearch className="position-absolute fs-5" style={{ left: "10px", top: "50%", transform: "translateY(-50%)", color: "#6c757d" }} />
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                        style={{
                            fontSize: "20px",
                            paddingLeft: "40px",
                            border: "none",
                            boxShadow: "none",
                        }}
                    />
                </div>
            </div>

            <div>
                <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Assignment
                </button>

                <button id="wd-add-module-btn" className="btn btn-lg btn-secondary me-1 float-end">
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Group
                </button>
            </div>
        </div>
    );
}
