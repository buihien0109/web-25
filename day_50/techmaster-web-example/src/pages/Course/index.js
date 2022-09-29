import React, { useContext, useEffect, useState } from "react";
import CourseTopic from "./components/CourseTopic";
import CourseSearch from "./components/CourseSearch";
import CourseList from "./components/CourseList";
import Context from "../../context/Context";
import "./Course.css";

function Course() {
    const { courses } = useContext(Context);

    const [filter, setFilter] = useState({
        term: "",
        topic: "",
    });

    // Thay đổi tìm kiếm tiêu đề
    const handleSearchTerm = (term) => {
        setFilter({ ...filter, term });
    };

    // Thay đổi chủ đề
    const handleChangeTopic = (topic) => {
        setFilter({ ...filter, topic });
    };

    // Lọc khóa học theo filter
    const filterCourse = () => {
        let newCourses = [...courses];

        if (filter.term) {
            newCourses = newCourses.filter((course) =>
                course.title.toLowerCase().includes(filter.term.toLowerCase())
            );
        }

        if (filter.topic) {
            newCourses = newCourses.filter((course) =>
                course.topics.includes(filter.topic)
            );
        }

        return newCourses;
    };

    const renderedCourses = filterCourse();

    return (
        <div className="course-container py-5">
            <div className="container">
                <div className="row">
                    <CourseTopic onChangeTopic={handleChangeTopic} />

                    <div className="col-md-9">
                        <CourseSearch onSearchTerm={handleSearchTerm} />
                        <CourseList courses={renderedCourses} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Course;
