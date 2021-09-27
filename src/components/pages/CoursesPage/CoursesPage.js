import {Container, Button} from 'react-bootstrap'
import CoursesList from './CoursesList'

import { Link } from 'react-router-dom'

const CoursesPage = ({loggedUser}) => {

    // console.log(loggedUser.role)

    return(
        <Container>
            <h1>Courses list goes here</h1>
            <CoursesList/>
            {
                loggedUser?.role==='admin'
                ?
                <Link to={`/courses/new`}>
                    <Button className="btnBlock">New Course</Button>
                </Link>
                :
                null
            }

            <p style={{marginBottom: '3rem'}}></p>
        </Container>
    )
}

export default CoursesPage