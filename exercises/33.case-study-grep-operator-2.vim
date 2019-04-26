" Skeleton {{{

" To create a new Vim operator you'll start with two components: a function and mapping
" Start by adding this:

nnoremap <leader>g :set operatorfunc=GrepOperator<cr>g@

function! GrepOperator(type)
  echo "Test"
endfunction

" g@ call this function as an operator

" }}}

" Visual Mode {{{

" Use our mapping in visual mode
vnoremap <leader>g :<c-u>call GrepOperator(visualmode())<cr>

" }}}

" Motion Types {{{

nnoremap <leader>g :set operatorfunc=GrepOperator<cr>g@
vnoremap <leader>g :<c-u>call GrepOperator(visualmode())<cr>

function! GrepOperator(type)
    echom a:type
endfunction

" Source file and test those:
" Pressing viw<leader>g echoes v because we were in characterwise visual mode.
" Pressing Vjj<leader>g echoes V because we were in linewise visual mode.
" Pressing <leader>giw echoes char because we used a characterwise motion with the operator.
" Pressing <leader>gG echoes line because we used a linewise motion with the operator.

" }}}

" Copying the Text {{{

nnoremap <leader>g :set operatorfunc=GrepOperator<cr>g@
vnoremap <leader>g :<c-u>call GrepOperator(visualmode())<cr>

function! GrepOperator(type)
    if a:type ==# 'v'
        execute "normal! `<v`>y"
    elseif a:type ==# 'char'
        execute "normal! `[v`]y"
    else
        return
    endif

    echom @@
endfunction

" }}}

" Escaping the Search Term {{{

nnoremap <leader>g :set operatorfunc=GrepOperator<cr>g@
vnoremap <leader>g :<c-u>call GrepOperator(visualmode())<cr>

function! GrepOperator(type)
    if a:type ==# 'v'
        normal! `<v`>y
    elseif a:type ==# 'char'
        normal! `[v`]y
    else
        return
    endif

    echom shellescape(@@)
endfunction

" }}}

" Running Grep {{{

nnoremap <leader>g :set operatorfunc=GrepOperator<cr>g@
vnoremap <leader>g :<c-u>call GrepOperator(visualmode())<cr>

function! GrepOperator(type)
    if a:type ==# 'v'
        normal! `<v`>y
    elseif a:type ==# 'char'
        normal! `[v`]y
    else
        return
    endif

    silent execute "grep! -R " . shellescape(@@) . " ."
    copen
endfunction

" }}}
