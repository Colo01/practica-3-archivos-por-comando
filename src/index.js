"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FileSystem_1 = require("./FileSystem");
var fs = new FileSystem_1.FileSystem();
fs.mkdir("documents");
fs.touch("file1.txt");
fs.ls(); // Lista: documents, file1.txt
fs.cd("documents");
fs.touch("file2.txt");
fs.pwd(); // Muestra: /root/documents
fs.ls(); // Lista: file2.txt
fs.cd("..");
fs.lsp(); // Lista todos los archivos y carpetas, guarda en display.txt
