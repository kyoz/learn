" Pipe charater (|) can help us to run multiple command on just one line {{{

echom "My name is " | echom "Kyoz"
" Result:
" My name is
" Kyoz

" }}}

" Basic if {{{

if 1
  echom "HELLO"
endif
" Result: HELLO

if 0
  echom "HELLO"
endif
" Result:

if ""
  echo "HELLO"
endif
" Result:

if "Sometext"
  echom "HELLO"
endif
" Result:
" Because vim not treat non-empty string as trulthy

" BUTTTTTTTTTTTT
if "123"
  echom "HELLO"
endif
" Result: HELLO
" Vim will try to coerce variable when necessary
" Example
echom "hello" + 10
echom "10hello" + 10
echom "hello10" + 10
" Result:
" 10
" 20
" 10

" String start with number will coerce to that number and skip the rest text
" String doesn't start with number i'll coerce to 0

" }}}

" Else and Elseif {{{

" Vim just like python, it support bold else and elseif clauses
if 0
  echom "if"
elseif "nope!"
  echom "elseif"
else
  echom "finally!"
endif

" Result: finally!
" Cause "if", "elseif" is coerce as 0, and 0 mean false so it run into last else

" }}}
