" Execute Normal! {{{

" Move to top, search for first occurrence of foo, then delete the line contains it
execute "normal! gg/foo\<cr>dd"

" Other example
execute "normal! mqA;\<esc>`q"

" What does it do:
" mq       Store the current location in mark "q"
" A:       Move to the end of current line and enter insert mode after the last character
" ;        Type ;
" `<esc>   Exit insert mode
" `q       return to exact location of mark "q"

" So above example put the semicolon ";" in the end of the line but not move the cursor

" }}}
