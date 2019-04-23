Topic one
=========
This is some text
It has multiple papagraphs

Topic two
---------
Topic two content

" Operator-pending mapping for "inside this section heading"
onoremap ih :<c-u>execute "normal! ?^==\\+$\r:nohlsearch\rkvg_"<cr>
"                                  ------- -- --------- -- --- ----
"                                     |     |      |     |  |   |
"                                     0     1      2     3  4   5
" 0: Search backward for anyline consists two or more equal signs and nothing else
" 1: Carriage return
" 2: Clear the search highlighting from the search we just performed to not distracting
" 3: Carriage return
" 4: kvg_: g_ is move to the last non black character in the line
" 5: Carriage return

" Operator-pending mapping for "around this section heading"
onoremap ah :<c-u>execute "normal! ?^==\\+$\r:nohlsearch\rg_vk0"<cr>

" EXERCISES

" Remake two above mappings so it work with = and - underline too
aug markdown_utils
  au!
  au FileType markdown onoremap <buffer> ih :<c-u>execute "normal! ?^==\\|--\\+$\r:nohlsearch\rkvg_"<cr>
  au FileType markdown onoremap <buffer> ah :<c-u>execute "normal! ?^==\\|--\\+$\r:nohlsearch\rg_vk0"<cr>
aug END

" Inside next email address operator-pending mapping
onoremap <buffer> in@ :<c-u>execute "normal! /@\r:nohlsearch\rbve"<cr>
