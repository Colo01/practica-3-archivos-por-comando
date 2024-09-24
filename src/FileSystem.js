"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileSystem = void 0;
var Directory_1 = require("./Directory");
var File_1 = require("./File");
var FileSystem = /** @class */ (function () {
    function FileSystem() {
        this.root = new Directory_1.Directory("root");
        this.currentDirectory = this.root;
    }
    FileSystem.prototype.mkdir = function (name) {
        var newDir = new Directory_1.Directory(name, this.currentDirectory);
        this.currentDirectory.add(newDir);
    };
    FileSystem.prototype.touch = function (name) {
        var newFile = new File_1.File(name);
        this.currentDirectory.add(newFile);
    };
    FileSystem.prototype.cd = function (name) {
        if (name === "..") {
            if (this.currentDirectory.parent) {
                this.currentDirectory = this.currentDirectory.parent;
            }
        }
        else {
            var dir = this.currentDirectory.get(name);
            if (dir instanceof Directory_1.Directory) {
                this.currentDirectory = dir;
            }
            else {
                console.log("Error: '".concat(name, "' no es una carpeta"));
            }
        }
    };
    FileSystem.prototype.ls = function () {
        console.log(this.currentDirectory.list().join(", "));
    };
    FileSystem.prototype.lsp = function () {
        var allFiles = this.root.listAll();
        console.log(allFiles.join("\n"));
        var fs = require("fs");
        fs.writeFileSync("display.txt", allFiles.join("\n"));
    };
    FileSystem.prototype.pwd = function () {
        console.log(this.currentDirectory.getPath());
    };
    return FileSystem;
}());
exports.FileSystem = FileSystem;
