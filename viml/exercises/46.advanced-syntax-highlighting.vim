" Advanced Syntax Highlighting {{{

" Because # isn't a keyword character, so we need to use a regular expression
" to match it. We'll use syntax match instead of syntax keyword

syntax match potionComment "\v#.*$"
highlight link potionComment Comment

" }}}

" Highlighting Operators {{{

" We have to put each regex on its own line intead of grouping them like i did
" with keywords. Because syntax match does not support multiple groups on a
" single line

syntax match potionOperator "\v\*"
syntax match potionOperator "\v/"
syntax match potionOperator "\v\+"
syntax match potionOperator "\v-"
syntax match potionOperator "\v\?"
syntax match potionOperator "\v\*\="
syntax match potionOperator "\v/\="
syntax match potionOperator "\v\+\="
syntax match potionOperator "\v-\="
syntax match potionOperator "\v\="

" }}}
