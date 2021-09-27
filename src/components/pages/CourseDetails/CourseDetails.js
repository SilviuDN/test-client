import { Component } from "react";
import CoursesService from "../../../services/courses.services";
import SectionsList from "../SectionPage/SectionsList";

import { Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class CourseDetails extends Component{

    constructor(){
        super()
        this.state = {
            course: undefined,
            showClasses: false,
        }
        this.courseService = new CoursesService()
    }

    componentDidMount(){
        const {course_id} = this.props.match.params
        this.courseService
            .getCourse(course_id)
            .then( res => this.setState({course: res.data}))
            .catch( err => console.log(err))
    }

    toggleShowClasses = () => {
        this.setState({showClasses: !this.state.showClasses})
    }


    render(){


        return(
            !this.state.course
            ?
            <h4>waiting1...</h4>
            :
            <>
            <Row className="justify-content-around">
                <Col md={6}>
                    <h1>{this.state.course.name}</h1>
                    <p>{this.state.course.description}</p>

                    <hr></hr>

                    {/* <p>Pret: <s> {this.state.course.price}$  </s> <strong style={{ color : 'red' }}>  {this.state.course.discountedPrice}$ </strong></p>

                    <hr></hr> */}

                    
                    <Link to="/courses" className="btn btn-dark">Lista de cursuri</Link>
                    <button className="btn btn-dark" onClick={this.toggleShowClasses} style={{ marginLeft: '20px' }}>
                        {this.state.showClasses ? 'Ascunde cuprins' : 'Arata cuprins'}                        
                    </button>

                </Col>

                <Col md={4}>
                    <img src={this.state.course.image} alt={this.state.course.name} style={{ width: '100%' }} />
                </Col>
            </Row>

                    {
                        // this.state.showClasses && <LecturesList courseId={this.state.course._id} lectures={this.state.course.lectures}/>
                    }
                    {

                        this.state.showClasses && <SectionsList courseId={this.state.course._id} sections={this.state.course?.sections}  loggedUser={this.props.loggedUser}/>
                    }


            
            </>

        )
    }

}

export default CourseDetails