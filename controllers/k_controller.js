import { KUtils } from "../helpers/k_utils";

export class KController {
    constructor(modelRestName) {
        this.modelRestName= modelRestName;
    }

    getAll() {
        // literally should never work but hey testing 
    }

    getById(id) {
        if (KUtils.isReallyNull(id)) {
            throw("'id' is required");
        } else {
            // find the item on the remote or in cache
        }
    }

    post(item) {
        if (KUtils.isReallyNull(item) || KUtils.isReallyNull(item.id)) {
            throw("an item with an 'id' is required");
        } else {
            // attempt the post request 
        }
    }
}