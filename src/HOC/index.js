import React from 'react';
import HOC from './hoc';
import Student from './components/student';
import Teacher from './components/teacher';

const dataStudents = [
  {id: 1, name: 'Van Teo', phone: '1213131', age: 20, email: 'test@gmail.com'},
  {id: 2, name: 'Van Ty', phone: '1213131', age: 20, email: 'test2@gmail.com'},
];
const dataTeachers = [
  {id: 1, name: 'Van A', phone: '1213131', age: 20, email: 'test@gmail.com'},
  {id: 2, name: 'Van B', phone: '1213131', age: 20, email: 'test2@gmail.com'},
];
const NewStudent = HOC(Student, dataStudents);
const NewTeacher = HOC(Teacher, dataTeachers);

class AppHoc extends React.Component {
  render() {
    return(
      <>
        <NewTeacher/>
      </>
    )
  }
}
export default AppHoc;