import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.webp" width={200} alt="course-image" />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/1111/Home">
                                CS1111 React JS
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Full Stack Software Developer
                        </p>
                        <Link to="/Kanbas/Courses/1111/Home">
                            Go
                        </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.webp" width={200} alt="course-image" />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/2222/Home">
                                CS2222 Node JS
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Full Stack Software Developer
                        </p>
                        <Link to="/Kanbas/Courses/2222/Home">
                            Go
                        </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.webp" width={200} alt="course-image" />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/3333/Home">
                                CS3333 HTML5
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Full Stack Software Developer
                        </p>
                        <Link to="/Kanbas/Courses/3333/Home">
                            Go
                        </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.webp" width={200} alt="course-image" />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/4444/Home">
                                CS4444 CSS
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Full Stack Software Developer
                        </p>
                        <Link to="/Kanbas/Courses/4444/Home">
                            Go
                        </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.webp" width={200} alt="course-image" />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/5555/Home">
                                CS5555 JavaScript
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Full Stack Software Developer
                        </p>
                        <Link to="/Kanbas/Courses/5555/Home">
                            Go
                        </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.webp" width={200} alt="course-image" />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/6666/Home">
                                CS6666 Bootstrap
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Full Stack Software Developer
                        </p>
                        <Link to="/Kanbas/Courses/6666/Home">
                            Go
                        </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.webp" width={200} alt="course-image" />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/7777/Home">
                                CS7777 Java
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Full Stack Software Developer
                        </p>
                        <Link to="/Kanbas/Courses/7777/Home">
                            Go
                        </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.webp" width={200} alt="course-image" />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/8888/Home">
                                CS8888 Python
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Full Stack Software Developer
                        </p>
                        <Link to="/Kanbas/Courses/8888/Home">
                            Go
                        </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.webp" width={200} alt="course-image" />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/9999/Home">
                                CS9999 FAI
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Full Stack Software Developer
                        </p>
                        <Link to="/Kanbas/Courses/9999/Home">
                            Go
                        </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.webp" width={200} alt="course-image" />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/1234/Home">
                                CS1234 GoLang
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Full Stack Software Developer
                        </p>
                        <Link to="/Kanbas/Courses/1234/Home">
                            Go
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}