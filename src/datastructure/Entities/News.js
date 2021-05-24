import DisplayedEntity from "../DisplayedEntity";

class News extends DisplayedEntity {
    _header; // = name
    _subHeader;
    _prevSrc;
    _content;
    _uId;
    _parent;
    _alrRead;

    constructor(header, subHeader, prevSrc, uId, alrRead) {
        super(header, uId);

        this._header = header;
        this._subHeader = subHeader;
        this._prevSrc = prevSrc;
        this._alrRead = alrRead;
    }

    // Getters //
    get header() { return this._name }

    get subHeader() { return this._subHeader }

    get prevSrc() { return this._prevSrc }

    get content() { return this._content }

    get alrRead() { return this._alrRead }

    get orgName() { return this._parent.name }

    get parent() { return this._parent }

    // Setters //
    set alrRead(boolVal) { this._alrRead = boolVal; }

    set parent(value) { this._parent = value }
}

export default News;