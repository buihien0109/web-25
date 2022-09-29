import React, { useContext } from 'react'
import CourseItem from '../CourseItem'
import Context from '../../../../context/Context'

function CourseList() {
    const { courses } = useContext(Context);
    console.log(courses);

    return (
        <div className="course-list row">
            {courses.map(course => (
                <CourseItem key={course.id} course={course} />
            ))}
        </div>
    )
}

export default CourseList