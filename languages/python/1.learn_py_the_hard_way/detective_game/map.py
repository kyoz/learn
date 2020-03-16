from scenes import LivingRoom, Kitchen, Bathroom, Bedroom, Win, Lose

class Map(object):

    scenes = {
        'living_room': LivingRoom(),
        'kitchen': Kitchen(),
        'bathroom': Bathroom(),
        'bedroom': Bedroom(),
        'win': Win(),
        'lose': Lose()
    }

    def __init__(self, start_scene):
        self.start_scene = start_scene

    def get_scene_by_name(self, scene_name):
        next_scene = Map.scenes.get(scene_name)
        return next_scene

    def get_opening_scene(self):
        return self.get_scene_by_name(self.start_scene)
