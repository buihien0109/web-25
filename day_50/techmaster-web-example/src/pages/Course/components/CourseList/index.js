import React from "react";
import CourseItem from "../CourseItem";

function CourseList(props) {
    const { courses } = props;

    return (
        <div className="course-list row">
            {courses.length === 0 && (
                <p className="text-black-50 fst-italic">
                    Không tìm thấy khóa học yêu cầu
                </p>
            )}
            {courses.length > 0 &&
                courses.map((course) => (
                    <CourseItem key={course.id} course={course} />
                ))}
        </div>
    );
}

export default CourseList;
