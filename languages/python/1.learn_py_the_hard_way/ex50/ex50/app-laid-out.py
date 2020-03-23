from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/hello", methods=['POST', 'GET'])
def index():
    greeting ="Hello World"

    if request.method == 'POST':
        name = request.form['name']
        greet = request.form['greet']
        greeting = f"{greet}, {name}"
        return render_template("index-laid-out.html", greeting=greeting)
    else:
        return render_template("form-laid-out.html")

if __name__ == "__main__":
    app.run()
