" Strings {{{

echom "Hello"

" Results: Hello
" Nothing special here

" }}}

" Concatenation {{{

" Adding strings together
echom "Hello, " + "Kyoz"

" Result: 0
" + operator is only for Numbers. Vim has coerce string to number before performing the addition

echom "1Hello" + "2 Hihihi"

" Result: 3
" This time result is 3 cause those string were coerce to 3 and 2 before
" performing the addition

echom 10 + "10.10"

" Result: 20
" Cause Vim dropped everything after the decimal point when coercing 10.10 to number

" }}}

" Combine strings {{{

" The concatenate operator in vim is '.'

echom "Hello, " . "world"

" Result: Hello, world

echom 10 . "Hello"

" Result: 10Hello
" First vim will coerce 10 to string then concatenate it with Hello

echom 10.1 . "Hello"

" Result: Error
" Vim just let you using a String as a Float when performing addition
" But not allow you to use Float as a string when concatenating

" }}}

" Special Characters {{{

" Like most other programming languages, Vimscript let we use escape sequences
" in strings to represent hard-to-type characters.

echom "foo \"bar\""

" Result: foo "bar"

echom "foo\\bar"

" Result: foo\bar

echom "foo\nbar"

" Result:
" foo
" bar

echom "foo\nbar"

" Result: foo^@bar
" ^@ is Vim's way of saying "newline character"

" }}}

" Literal String {{{

" Vim also let us use "literal strings" to avoid excessive use of escape sequences

echom '\n\\'

" Result: \n\\
" Using single quotes tell vim that we want the string exactly as-is, with no
" escape sequences

echom 'That''s enough'
" Two single quote in a row will produce one single quote
" Two single quotes is the only sequence that has special meaning in a literal string

" }}}

" Truthiness {{{

if "foo"
  echo "yes"
else
  echo "no"
endif

" Result: no

" 'foo' string is coerce to 0, and 0 mean false so it jump to else and print 'no'

" }}}
