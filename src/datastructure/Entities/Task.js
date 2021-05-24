import DisplayedEntity from "../DisplayedEntity";

class Task extends DisplayedEntity {
    _course;
    _dueDate;
    _mode;
    _content;
    _files;

    constructor(name, uId, course, dueDate, content, files) {
        super(name, uId);

        this._course = course;
        this._dueDate = dueDate;
        this._content = content;
        this._files = files;

        this.updateTask();
    }

    // Getters //
    get course() { return this._course }

    get dueDate() { return this._dueDate }

    get content() { return this._content }

    get files() { return this._files }

    get mode() {return this._mode}

    // Functions //
    updateTask() {
        //TODO: Recalculate duedate and diminish mode
        switch(this._dueDate) {
            case 1:
                this._mode = 'red'
                break;
            case 2:
                this._mode = 'orange'
                break;
            case 3:
                this._mode = 'grey'
                break;
        }
    }
}

export default Task;