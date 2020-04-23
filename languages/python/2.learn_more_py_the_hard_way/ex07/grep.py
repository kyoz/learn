from sys import exit
import argparse
import os.path

class Grep:
    args = ()
    results = []

    def __init__(self):
        self.get_arguments()
        self.check_arguments()
        self.grep()
        self.print_result()

    def get_arguments(self):
        parser = argparse.ArgumentParser(description='Find content in file')

        parser.add_argument('search_content', metavar="Search Content", help="The content that grep will search")
        parser.add_argument('search_file', metavar="Search File", help="The file that grep will search content in")

        self.args = parser.parse_args()
        pass

    def check_arguments(self):
        if not os.path.isfile(self.args.search_file):
            print('File not exist')
            exit(1)

    def grep(self):
        search_content = self.args.search_content
        search_file = self.args.search_file

        file = open(search_file, 'r')

        for line in file:
            if search_content in line:
                search_content_with_color = '\033[91m' + search_content + '\033[0m'
                self.results.append(line.replace(search_content, search_content_with_color))

        file.close()

    def print_result(self):
        if (len(self.results) == 0):
            print("Not found any content")
            exit(1)

        for line in self.results:
            print(line)

grep = Grep()
