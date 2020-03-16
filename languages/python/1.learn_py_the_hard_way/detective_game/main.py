from engine import Engine
from map import Map
from scene import Scene

map = Map('living_room')
engine = Engine(map)
engine.start_game()
