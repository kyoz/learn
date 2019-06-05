" Basic conditionals {{{

if 10 > 1
  echom "foo"
endif

" Result: foo

if 10 > 100
  echom "foo"
endif

" Result:

if 10 == 11
  echom "first"
elseif 10 == 10
  echom "second"
endif

" Result: second

if "foo" == "bar"
  echom "one"
elseif "foo" == "foo"
  echom "two"
endif

" Result: two

" }}}

" Case Sensitivity {{{

set noignorecase

if "foo" == "FOO"
  echom "vim is case insensitive"
elseif "foo" === "foo"
  echom "vim is case sensitive"
endif

" Result: vim is case sensitive

set ignorecase

if "foo" == "FOO"
  echom "no, it couldn't be"
elseif "foo" === "foo"
  echom "this must be the one"
endif

" Result: no, it couldn't be

" }}}

" Code Defensively {{{

set noignorecase
if "foo" ==? "FOO"
  echom "first"
elseif "foo" ==? "foo"
  echom "second"
endif

" Result: first
" Because ==? is the "case-insensitive no matter what the user has set"

set ignorecase
if "foo" ==# "FOO"
  echom "one"
elseif "foo" ==# "foo"
  echom "two"
endif

" Result: two
" Because ==? is the "case-sensitive no matter what the user has set"

" }}}

