" When we create duplicate autocommands, vim has no way to know it to replace or run just one autocommands
" Vim will seperate autocommands that each happen to do the same thing

augroup testgroup
  autocmd BufWrite * :echom "Foo"
  autocmd BufWrite * :echom "Bar"
augroup END

augroup testgroup
  autocmd BufWrite * :echom "Pow"
augroup END

" When write buffer, :messages will print
" Foo
" Bar
" Pow
" So augroup will merge group with same name
" To prevent this, use autocmd!

augroup testgroup
  autocmd BufWrite * :echom "Foo"
  autocmd BufWrite * :echom "Bar"
augroup END

augroup testgroup
  autocmd!
  autocmd BufWrite * :echom "Pow"
augroup END

" Then when write buffer, it'll only show
" Pow

" EXAMPLE
augroup filetype_html
  autocmd!
  autocmd FileType html nnoremap <buffer> <localleader>f function(){}<left>
