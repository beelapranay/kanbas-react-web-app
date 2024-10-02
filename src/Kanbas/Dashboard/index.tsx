import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">

                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card h-100 rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/reactjs.webp" alt="course-image" width="100%" />
                                <div className="card-body ">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS 5010 Programming Design Paradigm
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Fall 2024 SEC 01
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card h-100 rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/reactjs.webp" alt="course-image" width="100%" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS 5800	Algorithms
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Fall 2024 SEC 01
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card h-100 rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/reactjs.webp" alt="course-image" width="100%" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS 5600 Computer Systems
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Fall 2024 SEC 01
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card h-100 rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/reactjs.webp" alt="course-image" width="100%" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS 6410 Compilers
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Fall 2024 SEC 01
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card h-100 rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/reactjs.webp" alt="course-image" width="100%" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS 5400 Principles of Programming Language
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Fall 2024 SEC 01
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/reactjs.webp" alt="course-image" width="100%" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS 5610 Web Development
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Fall 2024 SEC 01
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card h-100 rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/reactjs.webp" alt="course-image" width="100%" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS 5700 Fundamentals of Computer Networking
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Fall 2024 SEC 01
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}