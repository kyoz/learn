from scene import Scene
from textwrap import dedent

class LivingRoom(Scene):

    def enter(self):
        print(dedent('''
            [§] You'v entered Living Room

            Wait a minute !!!
            There are blood on the ground. Something when wrong !!!

            What you gonna do:
                1. Go to Kitchen
                2. Go to Bathroom
                3. Go to Bedroom
            '''))

        choice = input('> ')

        while choice not in "123":
            print('\n# Are you stupid ?. Choose 1, 2 or 3 please !')
            choice = input("> ")

        if choice == '1':
            return 'kitchen'
        elif choice == '2':
            return 'bathroom'
        else:
            return 'bedroom'

class Kitchen(Scene):

    def enter(self):
        print(dedent('''
            [§] You'v entered Kitchen

            There's some food messed around on the table

            What you gonna do:
                1. Try it
                2. Investigate it
                3. Go investigate bathroom
            '''))

        choice = input('> ')

        while choice not in "123":
            print('\n# Are you stupid ?. Choose 1, 2 or 3 please !')
            choice = input("> ")

        if choice == '1':
            print(dedent('''
                You are stupid. These food is full of poison.
                You have died !!!
                '''))
            return 'lose'

        elif choice == '2':
            print(dedent('''
                There're some poison in it !!!
                Someone must have died because of it
                You follow the blood and go to bedroom
                '''))
            return 'bedroom'

        else:
            return 'bathroom'


class Bathroom(Scene):

    def enter(self):
        print(dedent('''
            [§] You'v entered Bathroom

            There's a dead guy on the bath
            In his mouth have xianua
            You then hear some strange noise from Bedroom !!!

            What you gonna do:
                1. Just don't care
                2. Rust to the Bedroom
            '''))

        choice = input('> ')

        while choice not in "12":
            print('\n# Are you stupid ?. Choose 1 or 2 please !')
            choice = input("> ")

        if choice == '1':
            print(dedent('''
                There's a strange old man with a gun on his hand
                He aim at you. BANG BANG BANG !!!
                YOU HAVE DIED
                '''))
            return 'lose'

        else:
            return 'bedroom'


class Bedroom(Scene):

    def enter(self):
        print(dedent('''
            [§] You'v entered Bedroom

            There's a strange old man
            He's assembling a shotgun

            What you gonna do:
                1. Sneak in and watching him
                2. Pick the pan and knock in out
            '''))

        choice = input('> ')

        while choice not in "12":
            print('\n# Are you stupid ?. Choose 1 or 2 please !')
            choice = input("> ")

        if choice == '1':
            print(dedent('''
                You make a sound. And he notice you.
                BANG! BANG!
                YOU'V DEAD
                '''))
            return 'lose'

        else:
            print(dedent('''
                You knock him out.
                Take the gun and tire him up.
                You then call for the police.
                '''))
            return 'win'


class Win(Scene):

    def enter(self):
        print(dedent('''
            [§] You Win. The murderer has been captured
            '''))
        exit(0)


class Lose(Scene):

    def enter(self):
        print(dedent('''
            [§] You Lose. The murderer has been escaped
            '''))
        exit(0)
