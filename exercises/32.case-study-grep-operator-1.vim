" Search With Grep {{{

" Search for the word under the cursor
nnoremap <leader>g :grep -R '<cWORD>' .<cr>
" Most shell treat single-quoted text as (almost) literal, so our mapping is
" much more robust with single-quoted


" }}}

" Escaping Shell Command Arguments {{{

" When try out mapping with that's, It won't work cause the single quote
" inside word interferes with the quotes in the grep command

" We can use shellescape function to get aroudn this
" Because shellescape() work on Vim strings, we'll need to dynamically build
" the command with execute. First run the command to transform the :grep
" mapping into :execute "..." form

nnoremap <leader>g :execute "grep -R '<cWORD> ."<cr>

" Try on that's word => error
" Then run the following command which use shellescape to fix the search term

nnoremap <leader>g :execute "grep -R " . shellescape("<cWORD>") . " ."<cr>

" It's still error on that's word. Because Vim performed the shellescape()
" call before it expanded out special strings like <cWORD> in the command line
" So Vim shell-escaped the literal string "<cWORD>" (which did nothing but add
" single quote to it) and then concatenated it with the strings of our grep
" commmand.

" Try this command to see
echom shellescape("<cWORD>")
" The output will be '<cWORD>'. Those quotes are actually part of the string
" Vim has prepared it for use as a shell command argument

" To fix this we'll use expand() function to force the expansion of <cWORD>
" into the actual string before it gets passed to shellescape

" Let test it by step, put your cursor over a word with a quote like that's, and run
:echom expand("<cWORD>")
" The output will be that's. Now let use shellescape()
:echom shellescape(expand("<cWORD>"))
" Result will be 'that'\''s'

" It looking funny but just trust vim has take the string from expand and
" escaped it properly.

" Now it's time to concatenate it into our mapping:
nnoremap <leader>g :execute "grep -R " . shellescape(expand("<cWORD>")) . " ."<cr>

" }}}

" Cleanup {{{

" To not go to the first result automatically, use grep!
nnoremap <leader>g :execute "grep! -R " . shellescape(expand("<cWORD>") . " ."<cr>

" Vim will fill the quickfix window with the results, but we haven't opened it
" yet, Run this:
nnoremap <leader>g :execute "grep! -R " . shellescape(expand("<cWORD>")) . " ."<cr>:copen<cr>

" Finishing, we'll remove all the grep output Vim displays while searching:
nnoremap <leader>g :silent execute "grep! -R " . shellescape(expand("<cWORD>")) . " ."<cr>:copen<cr>

" silent command will hide all the messages it would normally display

" }}}
