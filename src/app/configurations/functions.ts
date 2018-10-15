export function guid() {
    let _p8 = function (s) {
        var p = (Math.random().toString(16) + "000000000").substr(2, 8);
        return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p;
    }
    return _p8(undefined) + _p8(true) + _p8(true) + _p8(undefined);
}

export function capitalize(s) {
    return s.toLowerCase().replace(/\b./g, function (a) { return a.toUpperCase(); });
};