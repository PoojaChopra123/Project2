#import the Flask class from the flask module
from flask import Flask, render_template
from data import Articles

#create the application object
app = Flask(__name__)

Articles = Articles()

# use decoratoes to link the function to a url
@app.route('/')
def home():
    return render_template("home.html")

@app.route('/articles')
def articles():
    return render_template('articles.html', articles = Articles) #render a template

@app.route('/about')
def about():
    return render_template('about.html')

# start the server with "run()" method
if __name__ == '__main__':
    app.run(debug=True)