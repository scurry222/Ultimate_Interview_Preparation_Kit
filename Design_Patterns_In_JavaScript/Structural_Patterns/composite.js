// Problem statement

// A Directory has the following properties:

// name: the name of the file/folder

// lastModified: the time in minutes since the last modification

// size: the size of the file/folder in kilobytes

// You have the following functions in the Directory class:

// getLastmodified: Returns the lastModified time of a console.log(file. In the )case of a folder with multiple files, it should return the minimum of the lastmodified times of all files.

// getSize: Returns the size of a file/folder.

// getName: Returns the name of the file or all the files in the case of a folder.

// The composite subclass should contain the following additional functions as well:

// addFile

// removeFile

// Input #
// Calling the given functions on files and folders

// Output #
// The correct output after calling these functions such as lastModified time, name, and size

// Sample input #
// const file = new File("penguiny.png",6,12)
// console.log(file.getLastmodified())
// console.log(file.getName())
// console.log(file.getSize())
// Sample output #
// 6
// "penguiny.png"
// 12

// Component
class Directory{
    constructor(name,lastModified,size){
        this.name = name
        this.lastModified = lastModified
        this.size = size
    }
    getLastmodified(){}
    getSize(){}
    getName(){}
}

// Leaf
class File extends Directory{
    constructor(name, lastModified, size) {
        super(name, lastModified, size)
    }
    getLastmodified = () => this.lastModified
    getSize = () => this.size
    getName = () => this.name
}

// Composite
class Folder extends Directory{
    constructor(name) {
        super(name)
        this.lastModified = 0
        this.size = 0
        this.files = []
    }
    addFile = (file) => {
        this.files.push(file)
        this.size += file.getSize();
    }
    removeFile = (file) => {
        this.files.forEach((f) => {
            if (f == file) {
                this.size -= f.getSize()
                this.files.pop(f)
            }
        })
        return this.files
    }
    getLastModified = () => {
        const times = []
        if (this.size == 0) return this.lastModified
        else {
            this.files.forEach((file, i) => {
                times[i] = file.lastModified
            })
            this.lastModified = Math.min(...times)
            return this.lastModified
        }
    }
    getSize = () => this.size

    getName = () => {
        const names = []
        this.files.forEach((file, i) => {
            names[i] = file.name
        })
        return names
    }
}

const file = new File("penguiny.png",6,12)
console.log(file.getLastmodified())
console.log(file.getName())
console.log(file.getSize())
