// These are global functions that can be used anywhere 

function isReallyNull(something) {
    var isNull = false;
    if (something == null || something === undefined || something === "") {
        isNull = true;
    }
    return isNull;
}