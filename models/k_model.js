import {KUtils} from "../helpers/k_utils.js";

export class KModel {
    constructor(id, tableName) {
        this.id = id;
        this.tableName = tableName;
    }

    // Static Methods

    static findById(id, tableName) {
        // TO DO Implement search local cache for object with Id, then search remote for TS change 
        if (KUtils.isReallyNull(tableName)) {
            throw("You must supply a table name.");
        }
        if (KUtils.isReallyNull(id)) {
            throw("You must supply an id");
        }
    }
}
