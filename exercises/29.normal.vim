" Normal {{{

" The normal command simply takes a sequences of keys and pretends they were typed in normal mode

" This will move cursor to the last line of current file, like pressing G in normal mode
normal G

" This will remove everything
normal ggVGd

" }}}

" Avoiding Mappings {{{

nnoremap G dd

" Now pressing G in normal mode will delete a line, but try this command out:

normal G

" Vim will delete the current line too, normal command will take into account
" any mapping that exists

" This means that we need something like the nnoremap version of nmap for
" normal, otherwise we'll never be able to use it since we can't know what
" keys our users have mapped

" Luckily, Vim has normal! comman that does exactly this. Try it:

normal! G

" This time, Vim moves to the bottom of the file even though G has been mapped

" When writing Vim Scripts, we should alway use normal!, and never use normal
" We don't know what mapping the users have mapped in their .vimrc files.

" }}}

" Special Characters {{{

normal! /foo<cr>

" At first glance, it may seem this will perform a search for foo, but we'll
" see that it doesn't work. The problem is that normal! doesn't parse special
" character sequences like <cr>

" In this case, Vim thinks you wanted to search for the character sequence
" "f,o,o,<,c,r,>", and doesn't realize that you even pressed return to perform
" the search

" }}}
