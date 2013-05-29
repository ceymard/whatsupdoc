
var fs = require('fs');
var path = require('path');

var Comment = require('./comment').Comment;
var def = require('./definitions');

/*!class /whatsupdoc/File
    The file.
**/

/*!method /whatsupdoc/File/constructor

Arguments:
    path: The path to the file.
**/
function File(path_, language) {
    var components = null,
        extension = null;

    this.path = path_;
    this.contents = fs.readFileSync(path.resolve(path_), {encoding: 'utf-8'});

    // Force language auto-detection based on the file extension.
    if (!language) {
        components = this.path.split('.');
        extension = components[components.length - 1];
        this.language = def.getLanguage(extension);
    }

    this.parse();
}

/*!method /whatsupdoc/File/parse

**/
File.prototype.parse = function () {
    var results = this.language.parser.parse(this.contents);
    console.log(results);
}

exports.File = File;