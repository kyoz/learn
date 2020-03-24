import argparse

parser = argparse.ArgumentParser(description='Please add some arguments ^_^')

parser.add_argument('integers', metavar='N', type=int, nargs='+')
parser.add_argument('-n', '--name', help='name help')
parser.add_argument('-d', '--description', help='description help')
parser.add_argument('-v', '--value', help='value help')
parser.add_argument('-s', '--start', action='store_true')
parser.add_argument('-r', '--restart', action='store_false')

args = parser.parse_args()

print(args)
