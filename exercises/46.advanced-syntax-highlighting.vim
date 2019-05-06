" Advanced Syntax Highlighting {{{

" Because # isn't a keyword character, so we need to use a regular expression
" to match it. We'll use syntax match instead of syntax keyword

syntax match potionComment "\v#.*$"
highlight link potionComment Comment

" }}}
