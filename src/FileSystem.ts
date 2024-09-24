import { Directory } from "./Directory";
import { File } from "./File";

export class FileSystem {
  private root: Directory;
  private currentDirectory: Directory;

  constructor() {
    this.root = new Directory("root");
    this.currentDirectory = this.root;
  }

  mkdir(name: string): void {
    const newDir = new Directory(name, this.currentDirectory);
    this.currentDirectory.add(newDir);
  }

  touch(name: string): void {
    const newFile = new File(name);
    this.currentDirectory.add(newFile);
  }

  cd(name: string): void {
    if (name === "..") {
      if (this.currentDirectory.parent) {
        this.currentDirectory = this.currentDirectory.parent;
      }
    } else {
      const dir = this.currentDirectory.get(name);
      if (dir instanceof Directory) {
        this.currentDirectory = dir;
      } else {
        console.log(`Error: '${name}' no es una carpeta`);
      }
    }
  }

  ls(): void {
    console.log(this.currentDirectory.list().join(", "));
  }

  lsp(): void {
    const allFiles = this.root.listAll();
    console.log(allFiles.join("\n"));

    const fs = require("fs");
    fs.writeFileSync("display.txt", allFiles.join("\n"));
  }

  pwd(): void {
    console.log(this.currentDirectory.getPath());
  }
}
