" Basic Regular Expressions {{{

" Vim has powerful support for regular expressions, but there are some quirks
" Example in python
max = 10
print "Starting"
for i in range(max):
  print "Counter:", i

print "Done"

" }}}

" Highlighting {{{

set hlsearch incsearch

" hlsearch tells Vims to highlight all matches in a files when we perform a
" search, incsearch tell Vim to highlight the next match while we're still
" typing out our search pattern

" }}}

" Searching {{{

" Search for print word
/print

" Go to first line, search for all print instances and move cursor to 1st match
execute "normal! gg/print\<cr>"

" To get the second match
execute "normal! gg/print\<cr>n"

" Opposite direction
execute "normal! G?print\<cr>"

" }}}

" Magic {{{

" The / and ? commands actually take regular expressions, not just literal characters
" Example:

execute "normal! gg/for .+ in .+:\<cr>"

" Vim will cause error pattern not found. To fix it

execute "normal! gg/for .\\+ in .\\+:\<cr>"

" This time it work .\\+ in a tring will be come .\+ and this is magic
" Try it
/print .\+

" }}}

" Literal Strings {{{

" This not work because \<cr> in the pattern to be escaped into a real
" carriage return character, which tell the search command to actually run
" In literal string, it's the equivalent of typing /for .\+ in .\+:\<cr>
execute 'normal! gg/for .\+ in .\+:\<cr>'

" This will work
execute "normal! gg" . '/for .\+ in .\+:' . "\<cr>"
" This concatenates the three smaller strings before sending them to execute
" and let us use a literal string for the regex while using normal strings for
" everything else

" }}}

" Very Magic {{{

execute "normal! gg" . '/\vfor .+ in .+:' . "\<cr>"

" \v tell Vim to use "very magic" regex parsing mode, which is pretty much the
" same as we're using any other programming language. Yayyy

" Use \v to forget about thre other crazy regex parsing mode of Vimscript

" }}}

" Exercises {{{

" Mapiing to highlight trailing whitespace as an error
nnoremap <buffer> <leader>w :<c-u>execute "normal! gg/" . '\v[ \t]+$' . "\r"<cr>

" Another mapping that will clear the math
nnoremap <buffer> <leader>W :<c-u>execute "normal! gg:%s/" . '[ \\t]\+$' . "//g\r"<cr>
" or
nnoremap <buffer> <leader>W :<c-u>execute "normal! gg:%s/" . '\v[ \t]+$' . "//g\r"<cr>

" Mapping that auto insert 'v' for us when we begin a search
nnoremap <buffer> / /\v

" }}}

