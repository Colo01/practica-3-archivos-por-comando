"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Directory = void 0;
var Directory = /** @class */ (function () {
    function Directory(name, parent) {
        if (parent === void 0) { parent = null; }
        this.name = name;
        this.parent = parent;
        this.contents = [];
    }
    Directory.prototype.add = function (item) {
        if (this.contents.some(function (content) { return content.name === item.name; })) {
            console.log("Error: Ya existe un archivo o carpeta con el nombre '".concat(item.name, "'"));
        }
        else {
            this.contents.push(item);
        }
    };
    Directory.prototype.get = function (name) {
        return this.contents.find(function (content) { return content.name === name; });
    };
    Directory.prototype.list = function () {
        return this.contents.map(function (item) { return item.name; }).sort();
    };
    Directory.prototype.listAll = function () {
        var allPaths = [];
        for (var _i = 0, _a = this.contents; _i < _a.length; _i++) {
            var item = _a[_i];
            allPaths.push(this.getPath() + "/" + item.name);
            if (item instanceof Directory) {
                allPaths = allPaths.concat(item.listAll());
            }
        }
        return allPaths;
    };
    Directory.prototype.getPath = function () {
        return this.parent ? this.parent.getPath() + "/" + this.name : this.name;
    };
    return Directory;
}());
exports.Directory = Directory;
