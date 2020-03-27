from sys import exit
import argparse
import os.path
import re

class Find:
    args = ()
    result_count = 0

    def __init__(self):
        self.get_arguments()
        self.check_arguments()
        self.search()

    def get_arguments(self):
        parser = argparse.ArgumentParser(description='Find file(s) or folder(s)')

        parser.add_argument('searchDir', metavar="Search Directory", help="Directory to start search from")
        parser.add_argument('searchContent', metavar="Search Content", help="File, Directory name or Regex")
        parser.add_argument("--type", "-t", metavar='type', help="Type (d: Directory or f: File)", default="f")

        self.args = parser.parse_args()

    def check_arguments(self):
        if not os.path.isdir(self.args.searchDir):
            print("Directory is not exist")
            exit(1)

    def search(self):
        self.result_count = 0

        for root, dirs, files in os.walk(self.args.searchDir):
            if self.args.type == "f":
                self.print_result(files)
            else:
                self.print_result(dirs)

        if self.result_count == 0:
            print("No result found !")

    def print_result(self, list):
        for item in list:
            if re.search(self.args.searchContent, item):
                self.result_count += 1
                print(item)


find = Find()
