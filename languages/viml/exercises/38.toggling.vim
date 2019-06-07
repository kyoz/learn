" Toggling {{{

" Pressing <leader>N in normal mode to toggle the line numbers for current window
nnoremap <leader>N :setlocal number!<cr>

" But it only work for boolean options. If we want to toggle a non-boolean
" option we'll need to do a bit more work

" }}}

" Toggling Options {{{

" A function to toggle an option
nnoremap <leader>f :call FoldColumnToggle()<cr>

function! FoldColumnToggle()
  if &foldcolumn
    setlocal foldcolumn=0
  else
    setlocal foldcolumn=4
  endif
endfunction

" }}}

" Toggle Other Things {{{

nnoremap <leader>q :call QuickFixToggle()<cr>

let g:quickfix_is_open = 0

function! QuickFixToggle()
  if g:quickfix_is_open
    cclose
    let g:quickfix_is_open = 0
  else
    copen
    let g:quickfix_is_open = 1
  endif
endfunction

" }}}

" Restoring Windows/Buffers {{{

" There's a problem that if the user run the mapping when they're already in
" the quickfix window. Vim'll closes it and dumps them into the last split
" instead of sending them back where they were. To solve it, update our
" function:

nnoremap <leader>q :call QuickFixToggle()

let g:quickfix_is_open = 0

function! QuickFixToggle()
  if g:quickfix_is_open
    cclose
    let g:quickfix_is_open = 0
    execute g:quickfix_return_to_window . "wincmd w"
  else
    let g:quickfix_return_to_window = winnr()
    copen
    let g:quickfix_is_open = 1
  endif
endfunction

" }}}
