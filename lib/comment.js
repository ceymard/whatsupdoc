
/*!class /whatsupdoc/Comment

**/
var Comment = exports.Comment = function Comment(contents, file, lineno) {
    this.file = file;
    this.lineno = lineno;
    this.contents = contents;

    this.parse();
}

/*!method /whatsupdoc/Comment/parse()
    Extract the informations of the comment.
**/
Comment.prototype.parse = function () {

}
