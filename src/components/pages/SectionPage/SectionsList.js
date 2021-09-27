import { useState } from 'react'
import SectionCard from "./SectionCard";

const SectionsList = ({sections, loggedUser, courseId}) => {

    const [changedList, setChangedList] = useState(false)


    const renderList = () =>{
        // setChangedList( !changedList  )
        setChangedList((prevStatus) => {
            return !prevStatus
        } )
    }

    return(
        // <h1>LecturesList</h1>
        <>
        {sections.map(sectionId => <SectionCard key={sectionId} courseId={courseId} sectionId = {sectionId}  loggedUser={loggedUser} renderList={renderList}/>)}
        
        </>
    )
}

export default SectionsList