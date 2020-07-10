const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
//const { argv } = require('yargs')// makes it global i guess

//customise the yargs version
yargs.version('1.1.0')

//creating add command
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'body of the note',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})
//creating remove command
yargs.command({
    command:'remove',
    describe:'remove a note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        }

    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})
//creating list command
yargs.command({
    command:'list',
    describe:'list all the notes',
    handler(){
        notes.listNotes()
    }
})
//creating read command
yargs.command({
    command:'read',
    describe:'read a note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})


yargs.parse()




