import { Component } from "react";
import SectionsService from "../../../services/sections.services";
import LecturesList from "../LecturePage/LecturesList";
import classes from './SectionPage.module.css';
import SectionForm from "../SectionForm/SectionForm";

import { Container} from 'react-bootstrap'

class SectionCard extends Component{

    constructor(){
        super()
        this.state = {
            section: undefined,
            showClasses: false,
            newSectionFormIsShown: false,
        }
        this.sectionService = new SectionsService()
    }

    loadSeactionsList = () => {
        const {sectionId} = this.props
        this.sectionService
            .getSection(sectionId)
            .then( res => this.setState({section: res.data}))
            .catch( err => console.log(err))
    }

    componentDidMount(){
        this.loadSeactionsList()
    }

    toggleShowClasses = () => {
        this.setState({showClasses: !this.state.showClasses})
    }

    toggleNewSectionForm = () => {
        this.setState({newSectionFormIsShown: !this.state.newSectionFormIsShown})
    }

    componentDidUpdate = (prevProps, prevState) => prevState.newSectionFormIsShown !== this.state.newSectionFormIsShown && this.loadSeactionsList()


    render(){


        return(
            !this.state.section
            ?
            <h4>waiting3...</h4>
            :
            <>


                <Container className={classes.sectionContainer}>

                    <div className={classes.sectionTitleContainer}>

                        <div className={classes.block} style={{width: '70%'}}>
                            <h5 style={{ marginBottom: '0px'}}>{this.state.section.sectionNumber} - {this.state.section.name}</h5 >
                        </div>
                        
                        <div className={classes.block}>
                            <button className="btn btn-dark" onClick={this.toggleShowClasses}>
                                {this.state.showClasses ? 'Ascunde lectiile' : 'Arata lectiile'}                        
                            </button>                    
                        </div>
                    </div>


                    {
                        this.state.showClasses && 
                        <LecturesList sectionId={this.state.section._id} lectures={this.state.section.lectures}  loggedUser={this.props.loggedUser}/>
                    }
                    {
                        this.state.showClasses && this.props.loggedUser?.role === 'admin' &&
                        <div className={classes.block}>
     
                            <button className="btn btn-dark" onClick={this.toggleNewSectionForm}>
                                Adauga Sectiune                     
                            </button>            
                        </div>
                    }
                    

                </Container >

                {this.state.newSectionFormIsShown && 
                <SectionForm courseId={this.props.courseId} hideForm={this.toggleNewSectionForm} renderList={this.props.renderList}/>}






            
            </>

        )
    }

}

export default SectionCard


            // <Row className="justify-content-around">
            //     <Col md={6}>
            //         <h1>{this.state.section.name}</h1>
            //         <p>{this.state.section.description}</p>

            //         <hr></hr>

                    
            //         {/* <Link to="/courses" className="btn btn-dark">Lista de cursuri</Link> */}
            //         <button className="btn btn-dark" onClick={this.toggleShowClasses} style={{ marginLeft: '20px' }}>
            //             {this.state.showClasses ? 'Ascunde cuprins' : 'Arata cuprins'}                        
            //         </button>

            //     </Col>

            // </Row>