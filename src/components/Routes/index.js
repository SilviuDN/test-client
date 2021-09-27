import { Switch, Route } from 'react-router';

import IndexPage from './../pages/IndexPage/IndexPage';
import CoursesPage from './../pages/CoursesPage/CoursesPage';
import CourseDetails from '../pages/CourseDetails/CourseDetails';
import CourseForm from '../pages/CourseForm/CourseForm';
import Signup from '../pages/SignUp/SignUp';
import LogIn from '../pages/LogIn/LogIn';

const Routes = ({ storeUser, loggedUser }) => {

    return(
        <>
            <Switch>
                <Route path = '/' exact render = { () => <IndexPage/> } />
                <Route path = '/courses' exact render = { () => <CoursesPage loggedUser={loggedUser}/> } />
                <Route path = '/courses/details/:course_id' render = { props => <CourseDetails {...props} loggedUser={loggedUser}/> } />
                <Route path = '/courses/new' render = { (props) => <CourseForm {...props}/> } />
                <Route path = '/signUp' render = { (props) => <Signup {...props} /> } />
                <Route path = '/logIn' render = { (props) => <LogIn {...props} storeUser={storeUser} /> } />
            </Switch>
        </>        
    )
}

export default Routes