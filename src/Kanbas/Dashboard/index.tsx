import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchEnrollments, enrollInCourse, unenrollFromCourse } from "./client";
import { fetchAllCourses } from "../Courses/client";
import { useSelector } from "react-redux";

export default function Dashboard({
    courses,
    course,
    setCourse,
    addNewCourse,
    deleteCourse,
    updateCourse,
}: {
    courses: any[];
    course: any;
    setCourse: (course: any) => void;
    addNewCourse: () => void;
    deleteCourse: (course: any) => void;
    updateCourse: () => void;
}) {
    const [allCourses, setAllCourses] = useState<any[]>([]);
    const [userEnrollments, setUserEnrollments] = useState<any[]>([]);
    const [enrollmentsButton, setEnrollmentsButton] = useState(false);

    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const handleAddNewCourse = async () => {
        try {
            const addedCourse = await addNewCourse(); // Call the API to add the course
            setAllCourses((prevCourses) => [...prevCourses, addedCourse]); // Update local state
        } catch (error) {
            console.error("Failed to add new course:", error);
        }
    };

    const handleUpdateCourse = async () => {
        updateCourse(); // Update in backend
        setAllCourses((prevCourses) =>
            prevCourses.map((c) => (c._id === course._id ? course : c))
        ); // Update local state
    };

    const handleDeleteCourse = async (courseId: string) => {
        try {
            deleteCourse(courseId); // Call the API to delete the course
            setAllCourses((prevCourses) => prevCourses.filter((c) => c._id !== courseId)); // Update local state
        } catch (error) {
            console.error("Failed to delete course:", error);
        }
    }; 

    const isFaculty = currentUser?.role === "FACULTY";
    const isStudent = currentUser?.role === "STUDENT";

    // Fetch all courses and enrollments on component load
    useEffect(() => {
        const fetchData = async () => {
            const coursesData = await fetchAllCourses();
            setAllCourses(coursesData);

            if (isStudent) {
                const enrollmentsData = await fetchEnrollments(currentUser._id);
                setUserEnrollments(enrollmentsData);
            }
        };
        fetchData();
    }, [isStudent, currentUser]);

    const toggleEnrollmentsButton = () => {
        setEnrollmentsButton(!enrollmentsButton);
    };

    const handleEnroll = async (courseId: string) => {
        const newEnrollment = await enrollInCourse(currentUser._id, courseId);
        setUserEnrollments([...userEnrollments, newEnrollment]);
    };

    const handleUnenroll = async (courseId: string) => {
        await unenrollFromCourse(currentUser._id, courseId);
        setUserEnrollments(userEnrollments.filter((enrollment) => enrollment.course !== courseId));
    };

    const filteredCourses = isFaculty
        ? allCourses
        : enrollmentsButton
            ? allCourses
            : allCourses.filter((course) =>
                userEnrollments.some((enrollment) => enrollment.course === course._id)
            );

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr />

            {isStudent && (
                <button
                    className={`btn ${enrollmentsButton ? "btn-secondary" : "btn-primary"} float-end`}
                    id="wd-add-new-course-click"
                    onClick={toggleEnrollmentsButton}
                >
                    Enrollments
                </button>
            )}

            {isFaculty && (
                <>
                    <h5>
                        New Course
                        <button
                            className="btn btn-primary float-end"
                            id="wd-add-new-course-click"
                            onClick={handleAddNewCourse}
                        >
                            Add
                        </button>
                        <button
                            className="btn btn-warning float-end me-2"
                            onClick={handleUpdateCourse}
                            id="wd-update-course-click"
                        >
                            Update
                        </button>
                    </h5>
                    <hr />
                    <br />
                    <input
                        key={course._id || "new"}
                        defaultValue={course.name}
                        className="form-control mb-2"
                        onChange={(e) => setCourse({ ...course, name: e.target.value })}
                    />
                    <textarea
                        key={`${course._id}-desc`}
                        defaultValue={course.description}
                        className="form-control mb-2"
                        onChange={(e) => setCourse({ ...course, description: e.target.value })}
                    />
                    <input
                        key={`${course._id}-number`}
                        defaultValue={course.number}
                        className="form-control mb-2"
                        onChange={(e) => setCourse({ ...course, number: e.target.value })}
                    />
                    <input
                        key={`${course._id}-id`}
                        defaultValue={course._id}
                        className="form-control mb-2"
                        onChange={(e) => setCourse({ ...course, _id: e.target.value })}
                    />
                    <input
                        key={`${course._id}-start`}
                        defaultValue={course.startDate}
                        className="form-control mb-2"
                        type="date"
                        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
                    />
                    <input
                        key={`${course._id}-end`}
                        defaultValue={course.endDate}
                        className="form-control mb-2"
                        type="date"
                        onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
                    />
                </>
            )}

            <h2 id="wd-dashboard-published">
                Published Courses ({filteredCourses.length})
            </h2>
            <hr />

            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {filteredCourses.map((course) => {
                        if (!course) return null;
                        const isEnrolled = userEnrollments.some((enrollment) => enrollment.course === course._id);

                        return (
                            <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
                                <div className="card rounded-3 overflow-hidden h-100">
                                    <Link
                                        to={`/Kanbas/Courses/${course._id}/Home`}
                                        className="wd-dashboard-course-link text-decoration-none text-dark"
                                    >
                                        <img
                                            alt="course-image"
                                            src={`/images/${course.image}`}
                                            width="100%"
                                            height={160}
                                        />
                                        <div className="card-body">
                                            <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
                                            <p
                                                className="wd-dashboard-course-title card-text overflow-y-hidden"
                                                style={{ maxHeight: 100 }}
                                            >
                                                {course.description}
                                            </p>
                                            <button className="btn btn-primary">Go</button>

                                            {!enrollmentsButton && isEnrolled && isStudent && (
                                                <button
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        handleUnenroll(course._id);
                                                    }}
                                                    className="btn btn-danger float-end"
                                                    id="wd-enroll-course-click"
                                                >
                                                    Unenroll
                                                </button>
                                            )}

                                            {enrollmentsButton && !isEnrolled && isStudent && (
                                                <button
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        handleEnroll(course._id);
                                                    }}
                                                    className="btn btn-success float-end"
                                                    id="wd-enroll-course-click"
                                                >
                                                    Enroll
                                                </button>
                                            )}

                                            {isFaculty && (
                                                <>
                                                    <button
                                                        onClick={(event) => {
                                                            event.preventDefault();
                                                            handleDeleteCourse(course._id);
                                                        }}
                                                        className="btn btn-danger float-end"
                                                        id="wd-delete-course-click"
                                                    >
                                                        Delete
                                                    </button>
                                                    <button
                                                        id="wd-edit-course-click"
                                                        onClick={(event) => {
                                                            event.preventDefault();
                                                            setCourse(course);
                                                        }}
                                                        className="btn btn-warning me-2 float-end"
                                                    >
                                                        Edit
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}