import { useContext, useState } from "react";
import { NoteContext } from "../context/NoteContext";

const noteForm = () => {
    const { addNote, notes } = useContext(NoteContext);
    const [title, setTitle] = useState<string>('');
    const [error, setError] = useState<string>('');
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();

            addNote(title);

            console.log(notes);

            setTitle('');
            setError('');
        } catch (err: any) {
            setError(err.message);
        }


    }
  return (
    <div>
      <form onClick={handleSubmit} >
        <label htmlFor="title">title</label>
        <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="submit" name="" id="" />

      </form>
      {error && <h1>{error}</h1>}
    </div>
     
  )
}

export default noteForm
