import './HomePage.css'
import { Routes, Route } from 'react-router-dom'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import ResultsListComponent from './ResultsListComponent'
import AddNewResultsComponent from './AddNewResultsComponent'
import CourseListComponent from './CourseListComponent'
import AddNewCourseComponent from './AddNewCourseComponent'
import StudentListComponent from './StudentListComponent'
import AddNewStudentComponent from './AddNewStudentComponent'
import AddingNewStudent from './AddingNewStudent'
import HomeComponent from './HomeComponent'

export default function StudentResult() {

    return (
        <div className="StudentResult">
            <h1>Student Results Management System</h1>
            <HeaderComponent/>
                <Routes>
                    <Route path='/home' element={<HomeComponent/>} />
                    <Route path='/addNewStudent' element={<AddNewStudentComponent/>} />
                    <Route path='/addingNewStudent' element={<AddingNewStudent/>} />
                    <Route path='/studentList' element={<StudentListComponent/>} />
                    <Route path='/addNewCourse' element={<AddNewCourseComponent/>} />
                    <Route path='/courseList' element={<CourseListComponent/>} />
                    <Route path='/addNewResults' element={<AddNewResultsComponent/>} />
                    <Route path='/resultsList' element={<ResultsListComponent/>} />
                </Routes>
                <FooterComponent/>
        </div>
    )
}









