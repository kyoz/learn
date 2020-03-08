from sys import argv

script, from_file, to_file = argv

open(to_file, 'w').write(open(from_file).read())
print(f"Copied {from_file} to {to_file}")
