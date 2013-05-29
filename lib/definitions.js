var fs = require('fs');
var path = require('path');

var _ = require('underscore');
var pegjs = require('pegjs');

/*!var /definitions/exports.languages

    The different languages and their definitions to be able
    to parse their comments.

**/
var languages = [
    {
        name: 'javascript',
        single_line: ['//!'],
        multi_line: [
            '/**!', '*/'
        ],
        extensions: ['js'],
        parser: null
    }
]

exports.getLanguage = function(ext) {
    var language = _.filter(languages, function (language) {
        return _.contains(language.extensions || [], ext);
    });

    if (!language.length || language.length > 1)
        throw new Error('No language for extension ' + ext);

    language = language[0];

    if (!language.parser) {
        // build the parser.
        language.parser = pegjs.buildParser(fs.readFileSync(
            path.join(__dirname, 'grammar.pegjs'), {
                encoding: 'utf-8'
            }
        ), { trackLineAndColumn: true });
    }

    return language;
}