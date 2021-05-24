import DisplayedEntity from "../DisplayedEntity";
import ImgRepo from "../../img";

class SettingCategory extends DisplayedEntity {
    _type;
    _displayType;

    constructor(name, type, uId) {
        super(name, uId, false);

        this.switchType(type);
    }

    // GETTERS //
    get type() { return this._type }

    get displayType() { return this._displayType }

    // Methods //
    switchType(type) {
        switch(type.toUpperCase()) {
            case "ACCOUNT":
                this._displayType = ImgRepo.PROFILEPLACEHOLDER2;
                break;
            case "GENERAL":
                this._displayType = ImgRepo.GENERALSETTING;
                break;
            case "DESIGN":
                this._displayType = ImgRepo.DESIGNSETTING;
                break;
            case "NOTIFICATION":
                this._displayType = ImgRepo.NOTIFICATIONSETTING;
                break;
            default:
                console.error("Type " + type + " is not a valid Settingtype!")
                return;
        }

        this._type = type;
        return;
    }
}

export default SettingCategory;