import NotesList from "./components/NotesList";
import { useState , useEffect} from "react";
import {nanoid} from 'nanoid';
import Search from "./components/Search";
import Header from "./components/Header";

//using useEffect to store the state

const App=()=>{

  const[notes, setNotes]= useState([
    {
      id: nanoid(),
      text: "This is my first Note." ,
      date: "03/07/2023",
  },
  {
    id: nanoid(),
    text: "This is my second Note." ,
    date: "03/06/2023",
},
{
  id: nanoid(),
  text: "This is my third Note." ,
  date: "03/05/2023",
},
{
  id: nanoid(),
  text: "This is my fourth Note." ,
  date: "03/04/2023",
},
{
  id: nanoid(),
  text: "This is my fifth Note." ,
  date: "03/03/2023",
},
{
  id: nanoid(),
  text: "This is my sixth Note." ,
  date: "03/02/2023",
},
]);

//removing the react strict mode from index file bcoz it is making useeffect run twice and hence not serving the purpose
 const [searchText, setSearchText] = useState("");
 const [darkMode, setDarkMode] = useState(false);

  //to retrieve the old data we are using the key, so that the changes can be showed up when refreshed
      // and bcoz the array bracket is empty , this useeffect will only run at start time once.
    useEffect(() =>{
      const savedNotes = JSON.parse(localStorage.getItem('notes-app-data'));
     
       console.log(savedNotes);
       if(savedNotes){
         setNotes(savedNotes);
       } 
    }, []);

     useEffect(()=>{
       localStorage.setItem("notes-app-data", JSON.stringify(notes)
      );
      //this name is always a string (key )provided by coder, and its a good practice to change the data in json format
      //it is taking the notes in array brackets to save in localStorage 
      //anytime there is change in notes, it will be changed in localStorage
      // check in application tab of devtools, localStorage section, but this is not changing the notes array , after refresh it will be back
      // so need of edit section
     
     }, [notes]);

  const addNote =(text)=>{
    // console.log(text);
     const date = new Date();
     const newNote={
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
     }
     const newNotes =[ ...notes, newNote];
      setNotes(newNotes);
  };

  const deleteNote =(id)=>{
    const newNote = notes.filter(note=> note.id !== id);
    setNotes(newNote);

  }

  return (
    <div className={`${darkMode && `dark-mode`}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode}/>
        <Search handleSearchText ={setSearchText}/>
        <NotesList notes={notes.filter(note=> note.text.toLowerCase().includes(searchText.toLowerCase()))}
            handleAddNote={addNote} handleDeleteNote={deleteNote}/>
      </div>
    </div>
  );

}

export default App;