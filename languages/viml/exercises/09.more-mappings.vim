" Quote the current text object with '
nnoremap <leader>' viw<esc>a'<esc>bi'<esc>lel

" Example
" Hihi -> 'Hihi'

" Quote the selected text with '
vnoremap <leader>' <esc>`<i'<esc>`>a'<esc>`>

" Example
" One
" Two
" Three

" ->

" 'One
" Two
" Three'

" Map H in normal more to go to the beginning of the current line
nnoremap H V<esc>`<

" Map L in normal more to go to the end of the current line
nnoremap L V<esc>`>
