" Functions {{{

function meow() " This is not correct, unscoped function must start with a capital letter

" Even if we do add a scope to a function, we should start function name with a capital letter
" Most Vimscript Coders seem to do it, so don't break the convention

" Correct function define:
function Meow()
  echo "Meow !!!"
endfunction

call Meow()

" Result: Meow !!!

" Function that returning a value
function GetMeow()
  return "Meow Meow !!!"
endfunction

echo GetMeow()

" Result: Meow Meow !!!

" }}}

" Calling Functions {{{

" We can call a function directly by using call
call Meow()
call GetMeow()

" Result:
" Meow !!!

" The second way to call a function is using expressions
echo GetMeow()

" Result: Meow Meow !!!
" As we saw before, this will call GetMeow function and passes the return value to echo

" }}}

" Implicit Returning {{{

echom Meow()

" Result:
" Meow !!!
" 0
" By default, if the function does not return anything, it'll return 0

function TextwidthIsTooWide()
  if &l:textwidth ># 80
    return 1
  endif
endfunction

" Now try using it

set textwidth=80
if TextwidthIsTooWide()
  echom "WARNING: Wide text!"
endif

" Result:

set textwidth=100
if TextwidthIsTooWide()
  echom "WARNING: Wide text!"
endif

" Result: WARNING: Wide text!

" }}}
