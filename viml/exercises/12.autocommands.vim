" What are autocommand
Autocommands are way to tell Vim to run certain commands whenever certain events happen

" List of all events you can bind autocmd to
help autocmd-events

" Autocommand structure

autocmd BufNewFile * :write
"        ^          ^ ^
"        |          | |
"        |          | The command to run.
"        |          |
"        |          A "pattern" to filter the event.
"        |
"        The "event" to watch for.

" EXAMPLES

" Only apply to files have name end with '.txt'
autocmd BufNewFile *.txt :write

" Reindented html files just before you write
autocmd BufWritePre *.html :normal gg=G

" Multiple events
autocmd BufWritePre,BufRead *.html :normal gg=G

" Turn line wrapping off whenever you're working with html files
autocmd BufNewFile,BufRead *.html setlocal nowrap

" Comment current line mapping for javascript file only
autocmd FileType javascript nnoremap <buffer> <localleader>c I//<esc>

" Exercise
autocmd FileType javascript setlocal wrap, number, norelativenumber
