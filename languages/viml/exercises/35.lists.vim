" Lists {{{

echo ['foo', 3, 'bar']
echo ['foo', [3, 'bar']]

" }}}

" Indexing {{{

echo ['one', 'two', 'three'][0]
" Result: one

echo ['one', ['two', 'three']][1]
" Result: ['two', 'three']

" We can also index from the end of the list, like python, try this
echo ['one', 'two', 'three'][-2]
" Result: two

" }}}

" Slicing {{{

" Vim lists can also be sliced
echo ['a', 'b', 'c', 'd', 'e'][0:2]
" Result: ['a', 'b', 'c']

echo ['a', 'b', 'c', 'd', 'e'][0:100000]
" Result: ['a', 'b', 'c', 'd', 'e']

" Slice index can be negative, try this:
echo ['a', 'b', 'c', 'd', 'e'][-2:-1]
" Result: ['d', 'e']

" When slicing lists we can leave off the first index or last
echo ['a', 'b', 'c', 'd', 'e'][:1]
echo ['a', 'b', 'c', 'd', 'e'][3:]
" Result:
" ['a', 'b']
" ['d', 'e']

" We can also index and slicing string too
echo "abcd"[0:2]
" Result: "abc"

" We can't use negative bare indices with string
echo "abcd"[-1]
" Result:

" But we can use negative index when slice string
echo "abcd"[-2:]
" Result: cd

" }}}

" Concatenation {{{

" We can combine Vim lists with +, try this out
echo ['a', 'b'] + ['c']
" Result: ['a', 'b', 'c']

" }}}

" List Functions {{{

" Vim has a number of build-in functions for woring with lists:
let foo = ['a']
call add(foo, 'b')
echo foo
" Result: ['a', 'b']

echo len(foo)
" Result: 2     <-- Length of the list

echo get(foo, 0, 'default')
echo get(foo, 100, 'default')
" Result:
" a
" default

echo index(foo, 'b')
echo index(foo, 'nope')
" Result:
" 1
" -1

echo join(foo)
echo join(foo, '---')
echo join([1, 2, 3], '')
" Result:
" a b
" a---b
" 123

call reverse(foo)
echo foo
call reverse(foo)
echo foo
" Result:
" ['b', 'a']
" ['a', 'b']

" }}}
