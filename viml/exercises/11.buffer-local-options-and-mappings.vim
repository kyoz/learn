" Mapping with buffer just work in the buffer with defined it
nnoremap          <leader>d dd
nnoremap <buffer> <leader>x dd

" When create plugin, should use <localleader> instead of <leader>
" It'll not ruin current mapping of those who use your plugin
nnoremap <localleader>d dd

" Set option only for local buffer, window
" Not all option have setlocal
setlocal wrap
setlocal number

" Vim will find the most specific map to run
nnoremap <buffer> Q x
nnoremap <buffer> Q dd
" In the buffer which define above 2 mappings, i'll run 1st mapping.
" In other file i'll run the 2rd mapping, cause it's not shadowed by 1st
" mapping
