import React from "react";
import Header from "./Header.jsx";
import Note from "./Note.jsx";
import Footer from "./Footer.jsx";
import notes from "../notes.js"

function CreateNote(noteData){
    return(
        <Note 
            key={noteData.key}
            title={noteData.title}
            content={noteData.content}
        />
    );
}

function App(){
    return(
        <div>
            <Header />
            {notes.map(CreateNote)};
            <Footer />
        </div>
    );
}

export default App;