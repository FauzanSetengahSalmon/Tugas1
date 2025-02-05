let notes = [
  {
    id: 1,
    heading: "Mempelajari Javascript",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus non expedita similique tempora tempore exercitationem. Accusamus sint porro iste quos velit aperiam voluptas placeat error nulla maxime id, deserunt eum.",
    created_by: "John Doe",
    created_at: 1738146027613 // bisa menggunakan Date.now()
  }
]

const createNote = (heading, description, created_by) => {
  const newNote = {
    id: 1 + 1,
    heading,
    description,
    created_by,
    created_at: Date.now()
  }
  notes.push(newNote)
}

const readNote = () => {
  console.log(notes)
}

const updateNote = (id, heading, description) => {
  const newNote = notes.findIndex(notes => notes.id === id)

  if (newNote != -1) {
    notes[newNote].heading = heading
    notes[newNote].description = description
  }
}

const deleteNote = (id) => {
  const newNote = notes.findIndex(notes => notes.id === id)

  if (newNote != -1) {
    notes.splice(newNote, 1)
  }
}

// mengetes kode (diharapkan untuk tidak diganti): 
createNote("Belajar React", "Mempelajari dasar-dasar React dan cara membuat komponen.", "Jane Doe")
readNote();
console.log("=================================================================================================================")
updateNote(1, "Mempelajari JavaScript Lanjutan", "Mempelajari konsep lanjutan dalam JavaScript.");
readNote();
console.log("=================================================================================================================")
deleteNote(1)
readNote()
