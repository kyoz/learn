class Parent(object):

    def yell(self):
        print("I'm daddy")

class Child(Parent):

    def yell(self):
        print("I'm just a baby")

dad = Parent()
son = Child()

dad.yell()
son.yell()

