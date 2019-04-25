" Execute {{{

" Use to evaluate a string as if it were a Vimscript command

execute "echom 'Hello, world!'"

" Result: Hello, world!

" Open bar.txt in Vim, then using :edit foo.txt in the same window, then run

execute "rightbelow vsplit " . bufname("#")

" Vim will open the first file in a vertical split to the right of second file

" bufname("#") will return the previous buffer path
" So when concatenating the strings we do have:

execute "rightbelow vsplit bar.txt"

" Then execute command will evaluates above string as a Vimscript command
" which opens the split with the file

" }}}
