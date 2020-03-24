from flask import Flask, session, redirect, url_for, escape, request
from flask import render_template
from ex52 import game

app = Flask(__name__)

@app.route("/")
def index():
    # this is used to "Setup" the session with starting values
    session["room_name"] = game.START
    return redirect(url_for("game_view"))

@app.route("/game_view", methods=["GET", "POST"])
def game_view():
    room_name = session.get("room_name")

    if request.method == "GET":
        if room_name:
            room = game.load_room(room_name)
            return render_template("show_room.html", room=room)
        else:
            return render_template("you_died.html")
    else:
        action = request.form.get("action")

        if room_name and action:
            room = game.load_room(room_name)
            next_room = room.go(action)

            if not next_room:
                session['room_name'] = game.name_room(room)
            else:
                session['room_name'] = game.name_room(next_room)

        return redirect(url_for("game_view"))

# YOU SHOULD CHANGE THIS IF YOU PUT ON THE INTERNET
app.secret_key = '11223344AVASDQIJCIAJSDKLASDJ/i23j'

if __name__ == "__main__":
    app.run()
