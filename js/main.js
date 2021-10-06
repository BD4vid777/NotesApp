import NotesView from "./NotesView.js"
import NotesAPI from "./NotesAPI.js";

const app = document.getElementById("app");
const view = new NotesView(app, {
   onNoteAdd() {
       console.log("Let's add a note!");
   },
   onNoteSelect(id) {
       console.log("Note selected: " + id);
   },
   onNoteEdit(newTitle, newBody) {
       console.log(newTitle + " " + newBody);
   },
   onNoteDelete(id) {
       console.log("Note " + id + " deleted");
   }
});

view.updateNotesList(NotesAPI.getAllNotes());
