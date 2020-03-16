class Parent(object):

    def implicit(self):
        print("This is Parent implicit() method")

class Child(Parent):
    pass

dad = Parent()
son = Child()

dad.implicit()
son.implicit()
