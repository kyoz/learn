" Numbers {{{

" Vimscript has two types of numeric variables: Numbers and Floats
" - A Number is a 32 bit signed integer
" - A Float is a floating point number

" }}}

" Number Formats {{{

echom 100

" Result: 100
" Nothing special here

echom 0xff

" Result: 255
" We can specify numbers in hex notation by prefixing them with 0x or 0X

echom 010

" Result: 8
" We can also use octal by starting number with 0. Be careful with this cause
" it's easy to make mistakes.

echom 017
echom 019

" Result:
" 15               <---        17 in octal is equal to 15
" 19               <---        19 is not a valid octal number so Vim treats is
"                              as a decimal number
" We should avoid use octal numbers when possible

" }}}

" Float Formats {{{

echo 101.1

" Result: 101.1

echo 5.45e+3

" Result: 5450.0
" We can also use exponential notation

echo 15.45e-2
" Result: 0.1545

echo 15.3e9
" Result: 1.53e10

" }}}

" Coercion {{{

" When we combine a number and float through arithmetic, comparision, or any
" other operation, Vim will cast the Number to Float

echo 2 * 2.0

" Result: 4.0

" }}}

" Division {{{

" When deviding two Numbers, the remaainder is  dropped

echo 3/2

" Result: 1

echo 3/2.0

" Result: 1.5
" The 3 is coerced to a Float, and then normal floating point devision is performed

" }}}
