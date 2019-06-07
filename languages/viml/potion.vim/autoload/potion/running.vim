function! potion#running#PotionCompileAndRunFile()
    silent !clear
    execute '!' . g:potion_command . ' ' . bufname('%')
endfunction

function! potion#running#PotionShowBytecode()
    " Write the file
    if &modified
        write
    endif

    " Get the bytecode.
    let bytecode = system(g:potion_command . ' -c -V ' . bufname('%'))

    " Check if there's syntax error
    if bytecode =~? '\v** Syntax error.*'
        echohl ErrorMsg
        redraw | echomsg 'There's an syntax error !!!'
        echohl None
        return
    endif

    " Check if potion bytecode buffer exist yet
    " If exist, jump to that buffer, if not, create buffer in vsplit
    let buffer_index = bufwinnr('__Potion_Bytecode__')

    if buffer_index > 0
        execute  buffer_index . 'wincmd w'
    else
        " Open a new split and set it up.
        rightbelow vsplit __Potion_Bytecode__
    endif

    normal! ggdG
    setlocal filetype=potionbytecode
    setlocal buftype=nofile

    " Insert the bytecode.
    call append(0, split(bytecode, '\v\n'))
    normal! gg
endfunction
