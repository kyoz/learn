" ~/.vim/colors/ {{{

" File inside this folder is treat as color schemes. For Example if we run
color mycolors
" Vim will look for a file at ~/.vim/colors/mycolors.vim and run it
" That file should contain all the Vimscripts commands to generate your color
" schemes

" }}}

" ~/.vim/plugin/ {{{

" File inside ~/.vim/plugin/ will each be run one every time vim start
" Those file are meant to cotain code that we always Vim to run when it loaded

" }}}

" ~/.vim/ftdetect/ {{{

" Any file in ~/.vim/ftdetect/ will also be run every time we start Vim
" ftdetect stands for "filetype detection". The files in this directory should
" set up autocommands that detect and set the filetype of files, and nothing
" else. This mean they should never be more than one or two lines long.

" }}}

" ~/.vim/ftplugin/ {{{

" File in this folder are different, the naming of these files matters.
" When vim sets a buffer's filetype to a value it then looks for a file in
" this folder that match.

" For example, if we run:
set filetype=derp
" Vim will look for ~/.vim/ftplugin/derp.vim. If the file exist, run it

" Vim also support directories inside ~/.vim/ftplugin. If we run:
set filetype=derp
" Vim will also run any .vim files inside ~/.vim/ftplugin/derp/
" This let we split up our plugin's ftplugin files into logical groups

" Note: Because these files are run everytime a buffer's filetype is set, they must
" only set buffer-local options. If they set options globally, they would
" overwrite them for all open buffers

" }}}

" ~/.vim/indent/ {{{

" Files in ~/.vim/indent/ are a lot like ftplugin files. They get loaded base
" on their names.

" Indent files should set options related to indentation for their filetypes,
" and those option should be buffer-local

" }}}

" ~/.vim/compiler/ {{{

" File in this folder work exactly like indent files.
" They should set compiler-related options in the current buffer based on
" their names

" }}}

" ~/.vim/after/ {{{

" File in this folder will be loaded everytime Vim starts, but after the files
" in ~/.vim/plugin/
" This allow us to override Vim's internal files

" }}}

" ~/.vim/autoload/ {{{

" autoload is a way to delay the loading of your plugin's code until it's
" actually need

" }}}

" ~/.vim/doc/ {{{

" Where you can add documentation for your plugin

" }}}
