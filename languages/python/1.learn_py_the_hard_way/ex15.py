from sys import argv

script, filename = argv

txt = open(filename)

print(f"Here's your file {filename} content:")
print(txt.read())

print("Type the filename again:")
new_file_name = input("> ")

new_txt = open(new_file_name)

print(new_txt.read())
