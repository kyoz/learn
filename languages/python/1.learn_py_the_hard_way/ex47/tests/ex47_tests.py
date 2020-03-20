from nose.tools import assert_equal
from ex47.game import Room


def test_room():
    gold = Room("GoldRoom", "This room has gold in it you can grab some")
    assert_equal(gold.name, "GoldRoom")
    assert_equal(gold.paths, {})

def test_room_paths():
    center = Room("Center", "Test room is in the center.")
    north = Room("North", "Test room is in the north.")
    south = Room("South", "Test room is in the south.")

    center.add_paths({
        'north': north,
        'south': south
    })

    assert_equal(center.go('north'), north)
    assert_equal(center.go('south'), south)

def test_map():
    start = Room("Start", "You can go west and down a hole")
    west = Room("Trees", "There are trees here")
    down = Room("Dugeon", "It's dark down here, you can go up")

    start.add_paths({ 'west': west, 'down': down })
    west.add_paths({ 'east': start })
    down.add_paths({ 'up': start })

    assert_equal(start.go('west'), west)
    assert_equal(start.go('west').go('east'), start)
    assert_equal(start.go('down').go('up'), start)
