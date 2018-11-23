import {KUtils} from "../helpers/k_utils.js";

// This is how we are going to handle Rest
let _baseApiUrl;

export class KRest {

    static setBaseApiUrl(url) {
        if (KUtils.isReallyNull(url)) {
            throw("A valid url must be provided")
        } else {
            _baseApiUrl = url;
        }
    }
}