class Parent(object):

    def override(self):
        print("[Parent] override()")

    def implicit(self):
        print("[Parent] implicit()")

    def altered(self):
        print("[Parent] altered()")

class Child(object):

    def __init__(self):
        self.other = Parent()

    def implicit(self):
        self.other.implicit()

    def override(self):
        print("[Child] override()")

    def altered(self):
        print("[Child] Before altered()")
        self.other.altered()
        print("[Child] After altered()")

son = Child()

son.implicit()
son.override()
son.altered()
