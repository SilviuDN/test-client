import LectureCard from "./LectureCard";

const LecturesList = ({lectures, loggedUser}) => {

    return(
        // <h1>LecturesList</h1>
        <>
        {lectures.map(lecture => <LectureCard lecture = {lecture}  loggedUser={loggedUser}/>)}
        
        </>
    )

}

export default LecturesList