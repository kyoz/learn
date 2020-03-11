## Animal is-a object (yes, sort of confusing) look at the extra credit
class Animal(object):
    pass

## Dog is-a Animal
class Dog(Animal):

    def __init__(self, name):
        ## ??
        self.name = name

## Cat is-a Animal
class Cat(Animal):

    def __init__(self, name):
        ## ??
        self.name = name

## Person Class
class Person(object):

    def __init__(self, name):
        ## Person has-a name
        self.name = name

        ## Person has-a pet of some kind
        self.pet = None

## Employee is-a Person
class Employee(Person):

    def __init__(self, name, salary):
        ## ? hmm what is this strange magic ?
        super(Employee, self).__init__(name)
        ## employee has-a salary
        self.salary = salary

## Fish Class
class Fish(object):
    pass

## Salmon is a Fish
class Salmon(Fish):
    pass

## Halibut is a Fish
class Halibut(Fish):
    pass

## Rover is-a Dog
rover = Dog("Rover")

## Satan is a cat
satan = Cat("Satan")

## Mary is a Person
mary = Person("Mary")

## Mary has a pet is cat name "Satan"
mary.pet = satan

## frank is an employee
frank = Employee("Frank", 120000)

## frank has a dog name "Rover"
frank.pet = rover

## flipper is a Fish
flipper = Fish()

## crouse is a Salmon
crouse = Salmon()

## harry is a Halibut
harry = Halibut()
