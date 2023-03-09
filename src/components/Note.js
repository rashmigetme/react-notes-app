import {MdDeleteForever} from "react-icons/md";

const Note=({id, text,date, handleDeleteNote })=>{
    return(
        <div className="note">
            <span>{text}</span>
            {/* <div className="note-footer"> */}
                <footer className="footerNote">
                <small>{date}</small>
                <MdDeleteForever onClick={()=>handleDeleteNote(id)}className="delete-icon" size='1.3em'/>
                </footer>
            {/* </div> */}
        </div>
    );
};

export default Note;