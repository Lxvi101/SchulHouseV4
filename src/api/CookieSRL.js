export class CookieSRL {
    _rawCookie;
    _cookie;

    constructor() {
        this._rawCookie = {}
        this._cookie = {}

        return this;
    }

    // Setters //
    setLogIn(value) {
        this._cookie.logIn = value;
        return this;
    }

    setConfig(value) {
        this._cookie.config = value;
        return this;
    }

    // Getters //

    get config() {
        return this._cookie.config;
    }

    get logIn() {
        return this._cookie.logIn;
    }

    get rawCookie() {
        return this._rawCookie;
    }

    get cookie() {
        return this._cookie;
    }

    // Methods //
    serializeCookie() {
        let tps = "";
        let first = true

        for(let attr in this._cookie) {
            const t0 = encodeURIComponent(attr);
            const t1 = encodeURIComponent(this._cookie[attr]);

            if(first) {
                tps += t0 + "/)/" + t1;
                first = false;
            } else {
                tps += "/;/" + t0 + "/)/" + t1;
            }
        }
        this._rawCookie = tps;

        this.updateWebCookie();

        return this;
    }

    deserializeString(str) {
        this._rawCookie = str;

        let array = str.split("/;/");
        let tmp = {}
        array.forEach((obj) => {
            let array2 = obj.split("/)/");
            const t0 = decodeURIComponent(array2[0]);
            const t1 = decodeURIComponent(array2[1]);
            tmp[t0] = t1
        });

        this._cookie = tmp;

        this.updateWebCookie();

        return this;
    }

    updateWebCookie() {
        document.cookie = this._rawCookie;
        return this;
    }

    fetchWebCookie() {
        this._rawCookie = document.cookie;
        return this;
    }
}