" Status line for html files
aug html_status_line
  au!
  au FileType html setlocal statusline=[HTML]\ %F%m%r
  au FileType html setlocal statusline+=%=
  au FileType html setlocal statusline+=%l/%L
aug END

" Status line for javascript files
aug javascript_status_line
  au!
  au FileType javascript setlocal stl=[JS]\ %F%m%r
  au FileType javascript setlocal stl+=%=
  au FileType javascript setlocal stl+=Line\ %l/%L
aug END
