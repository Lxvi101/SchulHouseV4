class Selector {

    constructor(fSelect, fDeselect) {
        this._fSelect = fSelect;
        this._fDeselect = fDeselect;
    }

    updateArray(id, array, res) {
        const tmp = [];

        array.map(obj => {
            if (obj.uId === id) {
                if(obj.selected === true) {

                    // Unselect
                    this._fDeselect(obj);

                } else {

                    // Select
                    this._fSelect(obj);

                }
            } else {
                obj.selected = false;
            }

            tmp.push(obj);
            return null;
        });

        res(tmp);
    }
}

export default Selector;