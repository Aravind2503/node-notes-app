const fs = require('fs')
const chalk = require('chalk')



const addNote = (title,body)=>{
    const notes=loadNotes()

    const duplicateNotes = notes.filter((note)=> note.title === title)
    const duplicateNote = notes.find((note)=>note.title === title)

    
    

    if(!duplicateNote){

        notes.push({
         title:title,
         body:body
        })

        saveNotes(notes)
        console.log(chalk.green.inverse('new note addded! :)'))
    }
    else{
        console.log(chalk.red.inverse('note title already taken :('))

    }
}

const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return(JSON.parse(dataJSON))
    }
    catch(e){
        return []
    }
}


//removeNote function
const removeNote = function(title){

    const notes = loadNotes()

    const notesToKeep = notes.filter((note)=> note.title!==title)

    if(notesToKeep.length === notes.length)
        console.log(chalk.red.inverse('there was no note with that title'))
    else{
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse('note was deleted :)'))
    }

}

const listNotes = () => {
    const notes = loadNotes()
    notes.forEach((element) => {
        console.log(element.title)
    })

}

const readNote = (title) => {
    const notes = loadNotes()

    const note = notes.find((note) => note.title === title)

    if(note===undefined){
        console.log(chalk.red.inverse('note was not found :('))
    }
    else{
        console.log(chalk.yellow.bold('Title:',note.title))
        console.log('Body:',note.body)

    }

}




module.exports= {
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote

}
