from sys import argv

script, filename = argv

print(f"We're going to erase {filename}.")
print("If you don't want that, hit CTRL-C (^C).")
print("If you do want that, hit RETURN.")

input("?")

print("Opening the file...")
target = open(filename, 'w')

print("Truncating the file. Goodbye !")
target.truncate()

print("Now I'm going to ask you for three lines.")

line1 = input("line 1: ")
line2 = input("line 2: ")
line3 = input("line 3: ")

print("I'm going to write these lines to the file.")

# target.write(f"{line1}\n{line2}\n{line3}\n")
# Or another ways
target.write(f'''{line1}
{line2}
{line3}
''')

print("Written ! We are closing it...")
target.close()
