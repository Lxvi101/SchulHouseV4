import DisplayedEntity from "../DisplayedEntity";

class CourseNews extends DisplayedEntity {
    _course;
    _header; // = name
    _date;
    _content;
    _mode;

    constructor(name, uId, course, date, content, mode) {
        super(name, uId);

        this._course = course;
        this._header = name;
        this._date = date;
        this._content = content;
        this._mode = mode;
    }

    // Getters //
    get course() { return this._course }

    get header() { return this._header }

    get date() { return this._date }

    get content() { return this._content }

    get mode() { return this._mode }
}

export default CourseNews;