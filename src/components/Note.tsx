import { useContext } from "react";
import { NoteContext } from "../context/NoteContext";

const Note = () => {

    const { notes, deleteNote} = useContext(NoteContext);


    const handleDelete = (id: string) => {
        deleteNote(id);
       
    }


    return <>

        <div >

            {notes.map((note) => 
                
                <div >

                    <div  key={note.id}>

                      <p>  {note.title}</p>
                        <button onClick={() => handleDelete(note.id)}>Delete</button>
                    </div>

                   

                </div>
                
                )}

            


        </div>

    </>

}

export default Note;