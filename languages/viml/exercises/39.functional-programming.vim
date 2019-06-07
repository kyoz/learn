" Immutable Data Structures {{{

" Vim doesn't have any Immutable collection like Clojure's vector and maps
" built-in, but we can make some helper function like this:

function! Sorted(l)
  let new_list = deepcopy(a:l)
  call sort(new_list)
  return new_list
endfunction

" Try it out
echo Sorted([3,5,3,2,1,2])

" Result: [1, 2, 2, 3, 3, 5]

" How is this different from simply calling the built-in sort() function?
" The key is the first line: let new_list = deepcopy(a:l).
" Vim's sort() sorts the list in place, so we first create a full copy of the
" list and sort that so the original list won't be changed.

" This prevents side effects and helps us write code that is easier to reason 
" about and test. Let's add a few more helper functions in this same style:

function! Reversed(l)
  let new_list = deepcopy(a:l)
  call reverse(new_list)
  return new_list
endfunction

function! Append(l, val)
  let new_list = deepcopy(a:l)
  call add(new_list, a:val)
  return new_list
endfunction

function! Assoc(l, i, val)
  let new_list = deepcopy(a:l)
  let new_list[a:i] = a:val
  return new_list
endfunction

function! Pop(l, i)
  let new_list = deepcopy(a:l)
  call remove(new_list, a:i)
  return new_list
endfunction

" }}}

" Function as Variable {{{

" Vimscript supports using variables to store functions, but the syntax is a bit
" obtuse. Run the following commands:

let MyFunc = function("Append")
echo MyFunc([1,2], 3)

" Result: [1,2,3]

" Note: If a Vimscript variable refers to a function it must start with a capital letter

" Functions can be stored in lists just like any other kind of variable

let funcs = [function("Append"), function("Pop")]
echo funcs[1](['a', 'b', 'c'], 1)

" Result: ['a', 'c']

echo funcs[0](['a', 'b', 'c'], 'd')

" Result: ['a', 'b', 'c', 'd']

" Note: The funcs variable does not need to star with a capital letter cause
" it storing a list, not a function.

" }}}

" Higher-Order Functions {{{

" Higher-Orde functions take other functions and do something with them
" Try with map function

function! Mapped(fn, l)
  let new_list = deepcopy(a:l)
  call map(new_list, string(a:fn) . '(v:val')
  return new_list
endfunction

let mylist = [[1, 2], [3, 4]]
echo Mapped(function("Reversed"), mylist)

" Result: [[2, 1], [4, 3]]

" Now try other

function! Filtered(fn, l)
  let new_list = deepcopy(a:l)
  call filter(new_list, string(a:fn) . '(v:val)')
  return new_list
endfunction

let mylist = [[1, 2], [], ['foo'], []]
echo Filtered(function('len'), mylist)

" Result: [[1, 2], ['foo']]

" Finally, we'll create a counterpart to Filtered()

function! Removed(fn, l)
  let new_list = deepcopy(a:l)
  call filter(new_list, '!' . string(a:fn) . '(v:val)')
  return new_list
endfunction

let mylist = [[1, 2], [], ['foo'], []]
echo Removed(function('len'), mylist)

" Result: [[], []]

" Removed is like Filtered() except it only keeps elements where the predicate
" function does not return something truthy

" }}}
