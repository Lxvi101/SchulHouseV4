import Task from "./Task";
import DisplayedEntity from "../DisplayedEntity";
import CourseNews from "./CourseNews";
import sFile from "./File";

class Course extends DisplayedEntity {
    _mode;
    _tasks;
    _news;
    _files;

    constructor(name, uId, mode) {
        super(name, uId, false);

        this._mode = mode;
    }

    // Getters //
    get mode() { return this._mode }

    get tasks() { return this._tasks }

    get news() { return this._news }

    get files() { return this._files }

    // Setters //
    set tasks(arr) { this._tasks = arr }

    // Methods //
    update() {
        // let tmp;
        // tmp = new Course(this._name, this._uId, this._mode); //Debug TODO: Fetch from server and deserialize
        switch (this._name) {
            case "Mathematik":
                this._tasks = [
                    new Task("Stunde vom 19.7.2020", "02011", this, 1, "", null),
                    new Task("Stunde vom 8.7.2020", "02013", this, 2, "", null),
                    new Task("Stunde vom 1.7.2020", "02012", this, 3, "", null)];
                this._news = [
                    new CourseNews("Wichtiges zur Klassenarbeit", "00291", this, 0, "", "green"),
                    new CourseNews("Ahoy Mathematiker! Wettbewerb", "00290", this, 0, "", "grey")];
                this._files = [
                    new sFile({
                        name: "Erklärvideo-Trigonometrie.mp4",
                        date: 0}
                        , "01492", this)
                ];
                break
            case "Französisch":
                this._tasks = [
                    new Task("Stunde vom 14.7.2020", "02011", this, 3, "", null)];
                break
            default:

        }
        // return tmp
    }

}

export default Course;