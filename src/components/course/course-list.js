import React, { PropTypes } from 'react';
import CourseListRow from './course-list-row';

const CourseList = ({ courses }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th></th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Length</th>
        </tr>
      </thead>
      <tbody>
        {courses.map(course =>
          <CourseListRow key={course.id} course={course} />
        )}
        </tbody>
    </table>
    );
};

CourseList.PropTypes = { 
  courses: PropTypes.array.isRequired
};

export default CourseList;