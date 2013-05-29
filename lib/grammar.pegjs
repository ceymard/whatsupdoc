// Initialization !
{
    var _ = require('underscore');
}

toplevel =
    parsed:(
        !comment_start !single_line_comment_start . { return ''; }
        / multi_line_comment)*
    { return _.filter(parsed, function(elt) { return elt; }); }

comment_start = "/*!"
comment_end = "*/"
single_line_comment_start = "/*!"

multi_line_comment =
    comment_start contents:(!comment_end chr:. { return chr; })* comment_end
    {
        return contents.join('');
    }

// single_line_comment = single_line_comment_start contents:(!"\n" .)* "\n"? { return contents.join(''); }
