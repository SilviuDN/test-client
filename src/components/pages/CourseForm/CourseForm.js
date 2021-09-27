import { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import CoursesService from '../../../services/courses.services'

const CourseForm = (props) =>  {

    const [courseInput, setCourseInput] = useState({
            name: '',
            description: '',
            typeOfCourse: '',
            position: '',
            price: '',
            discountedPrice: '',
            image: ''
    })

    const coursesService = new CoursesService()

    const handleInputChange = e => {
        const { name, value } = e.target

        // React SCHEDULES state updates, does not perform them instantly ==> if more updates scheduled, wrong state might be used
        // INSTEAD OF:

        // setCourseInput({
        //     ...courseInput,
        //     [name]: value
        // })

        // WE USE:

        setCourseInput((prevCourseInput) => {
            return { ...prevCourseInput, [name]: value }
        } )

        // and React GUARANTEES the latest state will be used

        // IF STATE UPDATE DEPENDS ON THE PREVIOUS STATE, USE THE ARROW FUNCTION
    }


    const handleFormSubmit = e => {
        e.preventDefault()

        coursesService
            .saveCourse(courseInput)
            .then(() => {
                // this.props.closeModal()
                // this.props.refreshCoasters()
                setCourseInput({
                    name: '',
                    description: '',
                    typeOfCourse: '',
                    position: '',
                    price: '',
                    discountedPrice: '',
                    image: ''
                })
                this.props.history.push('/courses')
            })
            .catch(err => console.log(err))
    }


        return (
            <Container>

                <Form onSubmit={handleFormSubmit}>

                    <Form.Group controlId="name">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" value={courseInput.name} onChange={handleInputChange} name="name" />
                    </Form.Group>

                    <Form.Group controlId="desc">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" value={courseInput.description} onChange={handleInputChange} name="description" />
                    </Form.Group>

                    <Form.Group controlId="inve">
                        <Form.Label>Type</Form.Label>
                        <Form.Control type="text" value={courseInput.typeOfCourse} onChange={handleInputChange} name="typeOfCourse" />
                    </Form.Group>

                    <Form.Group controlId="lng">
                        <Form.Label>Position</Form.Label>
                        <Form.Control type="text" value={courseInput.position} onChange={handleInputChange} name="position" />
                    </Form.Group>

                    <Form.Group controlId="lng">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" value={courseInput.price} onChange={handleInputChange} name="price" />
                    </Form.Group>

                    <Form.Group controlId="lng">
                        <Form.Label>Discounted Price</Form.Label>
                        <Form.Control type="text" value={courseInput.discountedPrice} onChange={handleInputChange} name="discountedPrice" />
                    </Form.Group>

                    <Form.Group controlId="lng">
                        <Form.Label>Imagen (URL)</Form.Label>
                        <Form.Control type="text" value={courseInput.image} onChange={handleInputChange} name="image" />
                    </Form.Group>

                    <Button style={{ marginTop: '20px', width: '100%' }} variant="dark" type="submit">Create course</Button>

                </Form>

            </Container>
        )

}

export default CourseForm