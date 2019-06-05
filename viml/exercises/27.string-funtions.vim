" Length {{{

echom strlen("Kyoz")

" Result: 4

" }}}

" Spliting {{{

echo split("one two three")

" Result: ['one', 'two', 'three']
" Default spliting seperator is space " "

" Split with specific spliting seperator

echo split("one,two,three", ",")

" Result: ['one', 'two', 'three']

" }}}

" Joining {{{

echo join(["one", "two", "three"], "...")

" Result: one...two...three

" }}}

" Combine Spliting & Joining {{{

echo join(split("one two"), "...")

" Result: one...two

" }}}

" Lower and Upper Case {{{

echom tolower("Kyoz")
echom toupper("Kyoz")

" Result:
kyoz
KYOZ

" }}}

" Exercices {{{

echo split('1 2')
echo split('1,,,2', ',')

" Result:
" ['1', '2']
" ['1', '', '', '2']

" So them are not the same

" }}}
