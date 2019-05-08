if v:version < 600
    syntax clear
elseif exists('b:current_syntax')
    finish
endif

" Keywords
syntax keyword potionbytecodeKeyword code assign expr msg proto list 
syntax keyword potionbytecodeKeyword registers times

" Operators
syntax match potionbytecodeOperator '\v; '
syntax match potionbytecodeOperator '\v\[ '
syntax match potionbytecodeOperator '\v\['
syntax match potionbytecodeOperator '\v\]'

" Numbers
syntax match potionbytecodeNumber '\v[0-9]+'

" String
syntax region potionbytecodeString start=/\v"/ skip=/\v\\./ end=/\v"/

" Functions
syntax keyword potionbytecodeFunction function

" Comment
syntax match potionbytecodeComment "\v\*\* .*$"

highlight link potionbytecodeKeyword  Keyword
highlight link potionbytecodeOperator Operator
highlight link potionbytecodeNumber   Number
highlight link potionbytecodeString   String
highlight link potionbytecodeFunction Function
highlight link potionbytecodeComment  Comment

let b:current_syntax = 'potion'
