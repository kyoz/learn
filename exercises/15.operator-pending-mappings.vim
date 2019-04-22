" An operator is a command that wait for you to enter a movement command
" and then does something on the text between where you currently are and
" where the movement would take you

" EXAMPLE
" dw:   Delete to next word
" ci(:  Change inside parens

onoremap p i(

" return person.get_pets(type="cat", fluffy_only=True)

" type dp inside parens, and result will be

" return person.get_pets()

onoremap b /return<cr>

" def count(i):
"   i += 1
"   print i
"   
"   return foo

" put cursor in i += 1 line and type db, result will be

" def count(i)

onoremap in( :<c-u>normal! f(vi(<cr>

" print foo(bar)

" put cursor at print word and type cin( and result will be

" print foo(cursor)

onoremap il( :<c-u>normal! F)vi(<cr>

" print foo(bar) hihihi

" put cursor at hihihi word and type cil( and result will be

" print foo() hihihi

" RULE
" - If your operator-pending mapping ends with some text visually selected, Vim will operate on that text
" - Otherwise, Vim will operate on the text between the original cursor opsition and the new position

" EXERCISES
" Operator pending mappings for "around next parentheses"
onoremap a( :<c-u>normal! f(va(<cr>

" Operator pending mappings for "around last parentheses"
onoremap a) :<c-u>normal! F(va(<cr>
