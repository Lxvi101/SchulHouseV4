import Entity from "../Entity";

class sFile extends Entity {
    _parent;
    _object;
    _name;
    _date;

    constructor(object, uId, parent) {

        super(uId);

        this._parent = parent;

        // TODO: Calculate date from file //
        this._date = object.date;
        this._name = object.name;
    }

    // Getters //
    get name() { return this._name }

    get parent() { return this._parent }

    get date() { return this._date }

    get object() { return this._object }
}

export default sFile;