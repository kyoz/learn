class Engine:

    def __init__(self, scene):
        self.scene = scene

    def start_game(self):
        current_scene = self.scene.get_opening_scene()
        last_scene = self.scene.get_scene_by_name('finished')

        while current_scene != last_scene:
            next_scene_name = current_scene.enter()
            current_scene = self.scene.get_scene_by_name(next_scene_name)

        # be sure to print out the last scene
        current_scene.enter()
