class Parent(object):

    def yell(self):
        print("I'm daddy")

class Child(Parent):

    def yell(self):
        print("\nBefore Parent yell()")
        super(Child, self).yell()
        print("After Parent yell()")

dad = Parent()
son = Child()

dad.yell()
son.yell()
