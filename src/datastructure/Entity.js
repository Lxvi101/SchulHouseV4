class Entity {
    _uId;

    constructor(uId) {
        this._uId = uId;
    }

    // Getters //
    get uId() {
        return this._uId;
    }
}

export default Entity;