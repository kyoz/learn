" Folding Theory {{{

" When writing custom folding code it helps to have an idea of how Vim "thinks" 
" of folding. There's some rules:

"  1. Each line of code in a file has a "foldlevel". This is always either
"     zero or a positive integer.
"  2. Lines with a foldlevel of zero are never included in any fold
"  3. Adjacent lines with the same fold level are folded together
"  4. If a fold of level X is closed, any subsequent lines with a foldlevel
"     greater than or equal to X are folded along with it until you reach a
"     line with a level less than X.

" EXAMPLES:

" a           0
"   b         1
"   c         1
"     d       2
"     e       2
"   f         1
" g           0

" Run:
setlocal foldmethod=indent
echom foldlevel(1)    " Print the foldlevel at line 1
echom foldlevel(2)
echom foldlevel(3)

" Result:
" 0
" 1
" 1


" }}}
