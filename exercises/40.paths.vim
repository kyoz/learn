" Absolute Paths {{{

echom expand('%')                     " Display the relative path
echom expand('%:p')                   " Display the absolute path
echom fnamemodify('foo.txt', ':p')    " Display absolute path to the file foo.txt

" Note: % mean the current file, p mean you want absolute path
"       fnamemodify is more flexible than expand in most case

" }}}

" Listing Files {{{

" To get a listing of files in a specific directory, use
" Vim will dislay all files and dirs in the current dir
echo globpath('.', '*')

" globpath return a string, in which name seperated by a newline. Use split to
" coerce it to list

echo split(globpath('.', '*'), '\n')

" globpath()'s wildcards work mostly as you would expect, try it:
" List all .vim file in current dir
echo split(globpath('.', '*.vim'), '\n')

" We can recursively list files with **
echo split(globpath('.', '**'), '\n')
echo split(globpath('.', '**/*.vim'), '\n')

" }}}
