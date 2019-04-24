" Function Arguments {{{

" Vimscript function, of course, can take arguments, example:
function DisplayName(name)
  echom "Hello! My name is:"
  echom a:name
endfunction

call DisplayName("Kyoz")

" Result:
" Hello! My name is:
" Kyoz

" In a:name, a is a variable scope

" Let remove variable scope and see how vim reacts
function DisplayName(name)
  echom "Hello! My name is:"
  echom name
endfunction

" Error: Vim will complains that it can't find the variable name
" When we write VimScript function that take arguments, we always need to
" prefix em with a: then we use em to tell vim that they're in the argument scope

" }}}

" Varargs {{{

" Vimscript can optionally take variable-length argument lists like Javascript and Python
function Varg(...)
  echom a:0
  echom a:1
  echom a:2
  echo a:000
endfunction

call Varg('One', 'Two')

" Result:
" 2                      <----        Number of Varargs arguments
" One                    <----        Argument 1 of Varargs
" Two                    <----        Argument 2 of Varargs
" ['One', 'Two']         <----        List of all Varargs argument, can't use echom to display a list

function Varg2(foo, ...)
  echom a:0
  echom a:foo
  echom a:1
  echom a:2
  echo a:000
endfunction

call Varg2('Foo', 'One', 'Two')

" Result:
" 3                      <----        Number of Varargs arguments
" Foo                    <----        foo Argument
" One                    <----        Argument 1 of Varargs
" Two                    <----        Argument 2 of Varargs
" ['One', 'Two']         <----        List of all Varargs argument, can't use echom to display a list

" }}}

" Assignment {{{

function Assign(foo)
  let a:foo = "Nope"
  echom a:foo
endfunction

call Assign("Kyoz")

" Vim will throw error, becuz we can't reassign argument variables
" Another test:

function AssignGood(foo)
  let foo_tmp = a:foo
  let foo_tmp = "Yep"
  echom foo_tmp
endfunction

call AssignGood()

" Result: Yep

" This work fine

" }}}
