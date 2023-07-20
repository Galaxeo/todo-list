let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/code/todo-list
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
if &shortmess =~ 'A'
  set shortmess=aoOA
else
  set shortmess=aoO
endif
badd +18 ~/code/todo-list/src/card.js
badd +27 ~/code/todo-list/src/selector.js
badd +40 ~/code/todo-list/src/index.js
badd +28 ~/code/todo-list/src/form.js
badd +1 ~/code/todo-list/src/style.css
badd +14 ~/code/todo-list/dist/index.html
badd +189 ~/code/todo-list/LICENSE
argglobal
%argdel
edit ~/code/todo-list/LICENSE
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 60 + 60) / 120)
exe 'vert 2resize ' . ((&columns * 59 + 60) / 120)
argglobal
balt ~/code/todo-list/dist/index.html
let s:l = 189 - ((8 * winheight(0) + 14) / 28)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 189
normal! 030|
wincmd w
argglobal
if bufexists(fnamemodify("~/code/todo-list/dist/index.html", ":p")) | buffer ~/code/todo-list/dist/index.html | else | edit ~/code/todo-list/dist/index.html | endif
if &buftype ==# 'terminal'
  silent file ~/code/todo-list/dist/index.html
endif
balt ~/code/todo-list/src/form.js
let s:l = 20 - ((19 * winheight(0) + 14) / 28)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 20
normal! 0
wincmd w
exe 'vert 1resize ' . ((&columns * 60 + 60) / 120)
exe 'vert 2resize ' . ((&columns * 59 + 60) / 120)
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let &winminheight = s:save_winminheight
let &winminwidth = s:save_winminwidth
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
nohlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
