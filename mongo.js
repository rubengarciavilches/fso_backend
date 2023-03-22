const mongoose = require('mongoose').default

if(process.argv.length<3){
    console.log("Give password as argument")
    process.exit(1)
}

const password = process.argv[2]

const url =
    `mongodb+srv://jenesepados:${password}@cluster0.kwp8koq.mongodb.net/noteApp?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean,
})

const Note = mongoose.model("Note", noteSchema)

Note.find({}).then(result => {
    result.forEach(note => {
        console.log(note)
    })
    mongoose.connection.close()
})

// const note = new Note({
//     content: "Mongoose has a silly name",
//     important: true,
// })
//
// note.save().then(result => {
//     console.log("note saved!")
//     mongoose.connection.close()
// })