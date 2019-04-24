" Variables {{{
let foo = "bar"
echo foo
" Result:
" bar

let foo = 42
echo foo
" Result:
" 42
" }}}

" Option as Variables {{{
let textwidth=100
set textwidth=80
echo textwidth
echo &textwidth "& tell Vim that we're referring to the option not the variable
" Result:
" 100
" 80

set nowrap
echo &wrap
set wrap
echo &wrap
" Result:
" 0
" 1

" We can also set options as variables using let
set textwidth=100
echo &textwidth
let &textwidth = &textwidth + 10
set textwidth?   " This will update textwidth value from variable
echo &textwidth
" Result:
" 100
" 110
" }}}

" Local Options {{{
let &l:number = 1 " This variable just exist in current file buffer
" When we open another file and execute
echo number
" It will cause error
" }}}

" Register as variable {{{
" Set registers ass variables
let @a = "hello"
" Now put cursor somewhere and execute "ap it'll paste hello
" Or echo it
echo @a
" Result:
" hello

" Others
echo @" " This will print last yank
echo @/ " This will print last search pattern
" }}}
