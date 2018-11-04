// These are global functions that can be used anywhere 
export class KUtils {
    static isReallyNull(something) {
        var isNull = false;
        if (something == null || something === undefined || something === "") {
            isNull = true;
        }
        return isNull;
    }
}