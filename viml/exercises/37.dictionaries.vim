" Dictionaries {{{

" Vimscript Dictionaries is similar to Javascript's Object
" Dictionaries keys are always coerced to string

echo {'a': 1, 100: 'foo'}
" Result: {'a': 1, '100': 'foo'}

" Vimscript also allow us to use a comma after the last element in a dictionary
echo {'a': 1, 100: 'foo',}
" Result: {'a': 1, '100': 'foo'}

" }}}

" Indexing {{{

" To lookup a key in a dictionary we use the same syntax as most languages
" Vim also coerce index to string before performing the lookup, so don't worry
" if key are number
echo {'a': 1, 100: 'foo',}[100]
" Result: foo

" Vimscript also support javascript-stype "dot" lookup when the key is a
" string consisting only or letters, digits or underscores
echo {'a', 1, 100: 'foo',}.a
echo {'a', 1, 100: 'foo',}.100
" Result:
" 1
" foo

" }}}

" Assigning and Adding {{{

" Adding entries to dictionaries is done by simply assigning them like variables

let foo = {'a': 1}
let foo.a = 100
let foo.b = 200
echo foo

" Result: {'a': 100, 'b': 200}

" }}}

" Removing Entries {{{

" There are two ways to remove entries from a ditionary

let foo = {'a': 100, 'b': 200}
let test = remove(foo, 'a')
unlet foo.b
echo foo
echo test

" Result:
" {}
" 100

" remove function will remove entry with the given key and return removed value
" unlet command also remove dictionary entries but you can't use the value

" We can't remove nonexistent entries from a dictionary
unlet foo["asdf"] "Error

" }}}

" Dictionary Functions {{{

" Like list, Vim has a number of built-in functions for working with dictionaries
echom get({'a': 100}, 'a', 'default')
echom get({'a': 100}, 'b', 'default')

" Result:
" 100
" default

" We can also check if a given key is present in given dictionary
echom has_key({'a': 100}, 'a')
echom has_key({'a': 100}, 'b')

" Result:
" 1
" 0

" We can pull the key-value pairs out of a dictionary with items
echo items({'a': 100, 'b': 200})

" Result: [['a', 100], ['b', 200]]

" }}}
