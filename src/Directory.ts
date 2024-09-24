import { File } from "./File";

export class Directory {
  private contents: (File | Directory)[] = [];

  constructor(public name: string, public parent: Directory | null = null) {}

  add(item: File | Directory): void {
    if (this.contents.some((content) => content.name === item.name)) {
      console.log(
        `Error: Ya existe un archivo o carpeta con el nombre '${item.name}'`
      );
    } else {
      this.contents.push(item);
    }
  }

  get(name: string): File | Directory | undefined {
    return this.contents.find((content) => content.name === name);
  }

  list(): string[] {
    return this.contents.map((item) => item.name).sort();
  }

  listAll(): string[] {
    let allPaths: string[] = [];
    for (let item of this.contents) {
      allPaths.push(this.getPath() + "/" + item.name);
      if (item instanceof Directory) {
        allPaths = allPaths.concat(item.listAll());
      }
    }
    return allPaths;
  }

  getPath(): string {
    return this.parent ? this.parent.getPath() + "/" + this.name : this.name;
  }
}
