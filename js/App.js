import NotesView from "./NotesView.js";

export default class App {
    constructor(root) {
        this.notes = [];
        this.activeNote = null;
        this.view = new NotesView(root, this._handlers());
    }

    _handlers() {
        return {
            onNoteSelect: NoteId => {
                console.log("Note selected: " + NoteId);
            },
            onNoteAdd: () => {
                console.log("Note add");
            },
            onNoteEdit: (title, body) => {
                console.log("Note updated with:")
                console.log("Title: " + title);
                console.log("Body: " + body);
            },
            onNoteDelete: NoteId => {
                console.log("Note " + NoteId + " DELETED");
            },
        };
    }
}
