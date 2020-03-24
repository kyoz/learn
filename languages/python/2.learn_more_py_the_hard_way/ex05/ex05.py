from sys import exit
import argparse
import os.path

class Concat():
    args = ()

    def __init__(self):
        self.get_arguments()
        self.check_arguments()
        self.print_files()

    def get_arguments(self):
        parser = argparse.ArgumentParser(description='Concatenate File(s) to standard output')

        parser.add_argument('files', metavar="File(s)", nargs='+')
        parser.add_argument('-n', '--number', help='number all output lines', action='store_true')

        self.args = parser.parse_args()

    def check_arguments(self):
        for file in self.args.files:
            if not os.path.isfile(file):
                print(f"File '{file}' is not exit")
                exit(1)

    def print_files(self):
        count = 1

        for file in self.args.files:
            open_file = open(file, 'r')
            lines = open_file.readlines()

            for line in lines:
                if self.args.number:
                    # For better this should sum all line of all files and get
                    # the length of sum number to use for rjust
                    print(f'{str(count).rjust(8)}  {line.strip()}')
                    count += 1
                else:
                    print(line.strip())

            open_file.close()


concat = Concat()
