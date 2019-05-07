/* created by gmake -f config.mak */
#define POTION_MAJOR 0
#define POTION_MINOR 3
#define POTION_VERSION "0.3"
#define POTION_DATE   "2015-10-17"
#define POTION_COMMIT "7963cbc"
#define POTION_REV    1264
#define POTION_CC     "gcc-mp-5"
#define POTION_CFLAGS "-D_GNU_SOURCE -fno-strict-aliasing -msse2  -DHAVE_LIBUDIS86 -DJIT_DEBUG -DDEBUG --param ssp-buffer-size=1 -g3 -fno-stack-protector -Wall -Wno-variadic-macros -Wno-pointer-arith -Wno-return-type -Wno-switch -Wno-unused-label"
#define POTION_LDFLAGS ""
#define POTION_MAKE   "gmake"
#define POTION_PREFIX "/usr/local"
#define POTION_EXE    ""
#define POTION_DLL    ".dylib"
#define POTION_LOADEXT ".bundle"
#define POTION_WIN32  0
#define POTION_JIT    1
#define POTION_JIT_TARGET POTION_X86
#define POTION_JIT_NAME  x86

#define HAVE_LIBUDIS86 1 
#define JIT_DEBUG 1 
#define DEBUG 1

#define POTION_PLATFORM   "x86_64-apple-darwin14"
#define POTION_LIBEXT     ".a"

#define PN_SIZE_T         8
#define LONG_SIZE_T       8
#define DOUBLE_SIZE_T     8
#define INT_SIZE_T        4
#define SHORT_SIZE_T      2
#define CHAR_SIZE_T       1
#define LONGLONG_SIZE_T   8
#define PN_LITTLE_ENDIAN  1
#define POTION_PAGESIZE   4096
#define POTION_STACK_DIR  -1
#define HAVE_ASAN_ATTR    1
#ifndef SANDBOX
#define WITH_EXTERN	1
#endif
