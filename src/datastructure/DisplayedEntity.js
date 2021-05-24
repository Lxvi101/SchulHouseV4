import Entity from "./Entity";

class DisplayedEntity extends Entity {
    _name;
    _selected;

    constructor(name, uId, selected) {
        super(uId);

        this._name = name;
        this._selected = selected;
    }

    // Getters //
    get name() { return this._name }
    get selected() { this._checkSelected(); return this._selected }

    // Setters //
    set selected(val) {
        this._checkSelected();
        this._selected = val
    }

    // Methods //
    _checkSelected() {
        if (this._selected == null) {
            console.error(this._name + ".selected is not a valid call.");
        }
    }
}

export default DisplayedEntity;