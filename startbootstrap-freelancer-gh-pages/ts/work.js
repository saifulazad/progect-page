"use strict";
exports.__esModule = true;
var Duck = (function () {
    function Duck(str) {
        this.str = str;
    }
    Duck.prototype.work = function () {
        console.log(this.str.length);
    };
    return Duck;
}());
exports.Duck = Duck;
