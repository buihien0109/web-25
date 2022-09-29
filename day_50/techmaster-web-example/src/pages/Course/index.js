import React, { useContext, useEffect, useState } from "react";
import CourseTopic from "./components/CourseTopic";
import CourseSearch from "./components/CourseSearch";
import CourseList from "./components/CourseList";
import "./Course.css";

function Course() {

    return (
        <div className="course-container py-5">
            <div className="container">
                <div className="row">
                    <CourseTopic />

                    <div className="col-md-9">
                        <CourseSearch />
                        <CourseList />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Course;