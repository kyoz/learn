" Open to file foo, bar in vertical split
" In foo buffer execute
let b:hello = 'Hello'
echo b:hello
" Result:
" Hello

" Now move to bar buffer and execute
echo b:hello
" Vim will throw error cause it not found variable name buffer
" When declace buffer with b: at start, that variable is just exist in the current buffer

" Other variables scopes

" |buffer-variable|    b:	  Local to the current buffer.
" |window-variable|    w:	  Local to the current window.
" |tabpage-variable|   t:	  Local to the current tab page.
" |global-variable|    g:	  Global.
" |local-variable|     l:	  Local to a function.
" |script-variable|    s:	  Local to a |:source|'ed Vim script.
" |function-argument|  a:	  Function argument (only inside a function).
" |vim-variable|       v:	  Global, predefined by Vim.
