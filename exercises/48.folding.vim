" Types of folding {{{

" Vim support different ways of defining how your text should be folded

" 1. Manual
"    We create fold by hand, and it's stored in RAM by Vim. When we close Vim
"    they'll go away.
"    This method is quite handy if we combine it with some custom mappings to
"    make it easy to create folds.

" 2. Marker
"    Vim will fold your code based on characters in the actual text.
"    Usually these characters are put in comment like // {{{, but in some
"    languages you can get away with using something in the languages syntax
"    itself, like { and } in Javascript files.

" 3. Diff
"    A special folding mode used when diff'ing files.

" 4. Expr
"    Let we use a custom piece of Vimscript to define where folds occur. It's
"    the most powerful method, but also requires the most work.

" 5. Indent
"    Vim uses your code's indentation to determine folds. Lines at the same
"    indentation level fold together, and lines with only whitespace (and
"    blank lines) are symply folded with their neighbors.

" Note: By defalt Vim will ignore lines beginning with a # character when
" using indent folding (foldignore=#). We can disable it with
setlocal foldignore=

" }}}
