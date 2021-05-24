import DisplayedEntity from "../DisplayedEntity";

class NewsChannel extends DisplayedEntity {
    _news;
    _uReadC;

    constructor(name, uId) {
        super(name, uId, false);

        this._news = [];
        this._uReadC = null;

        this.updateUReadC();
    }

    // Getters //
    get uReadC() { return this._uReadC; }
    get news() { return this._news; }

    // Setters //

    // Methods //
    update(array) {
        array.map((news) => {
            news.parent = this;
            return null;
        });

        this._news = array; // Fetch news async from server (NO ARGUMENT NEEDED)
        this.updateUReadC();
    }

    updateUReadC() {
        let tmpC = 0;

        this._news.forEach((news) => {
            if(news.alrRead === false) {
                tmpC ++;
            }
        });

        this._uReadC = tmpC;
    }
}

export default NewsChannel;