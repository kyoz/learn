if v:version < 600
  syntax clear
elseif exists("b:current_syntax")
  finish
endif

" Keywords
syntax keyword potionKeyword loop times to while
syntax keyword potionKeyword if elsif else
syntax keyword potionKeyword class return

" Operators
syntax match potionOperator "\v\*"
syntax match potionOperator "\v/"
syntax match potionOperator "\v\+"
syntax match potionOperator "\v-"
syntax match potionOperator "\v\?"
syntax match potionOperator "\v\="
syntax match potionOperator "\v\*\="
syntax match potionOperator "\v/\="
syntax match potionOperator "\v\+\="
syntax match potionOperator "\v-\="
syntax match potionOperator "\v\:"
syntax match potionOperator "\v\."
syntax match potionOperator "\v\/"

" Numbers
syntax match potionNumber "\v[0-9]+"
syntax match potionNumber "\v[0-9]*[.]?[0-9]+"
syntax match potionNumber "\v0[xX][0-9a-fA-F]+"

" Functions
syntax keyword potionFunction print join string

" Comment
syntax match potionComment "\v#.*$"

highlight link potionKeyword Keyword
highlight link potionOperator Operator
highlight link potionNumber Number
highlight link potionFunction Function
highlight link potionComment Comment

let b:current_syntax = "potion"
