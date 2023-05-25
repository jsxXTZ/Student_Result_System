import {Link} from 'react-router-dom'

function HeaderComponent() {
    return (
        
        <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item"><Link className="nav-link" to="/addNewStudent">AddNewStudents</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/addingNewStudent">AddingNewStudents</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/studentList">StudentsList</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/addNewCourse">AddNewCourse</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/courseList">CourseList</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/addNewResults">AddNewResults</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/resultsList">ResultsList</Link></li>
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item"><Link className="nav-link" to="/home">About</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

    )
}

export default HeaderComponent