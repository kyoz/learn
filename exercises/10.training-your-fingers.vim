" Disable all arrow keys, vim do not use em (<nop> mean no operation)
noremap <Up> <nop>
noremap <Down> <nop>
noremap <Left> <nop>
noremap <Right> <nop>

" Use jk to exit insert mode instead of esc
inoremap <esc> <nop> " Doesn't work in nvim
inoremap jk <esc>l

