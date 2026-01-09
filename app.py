import requests
from flask import Flask, render_template, request, redirect, flash

app = Flask(__name__)

app.secret_key = "my_super_secret_key_060606062222!@#"

BOT_TOKEN = "8284604028:AAGlxZajz6L1mQv5JBw9QkczLpsAmpTF_7E"
CHAT_ID = "8373982910"
@app.route("/")
def homepage():
    return render_template("home_page.html")
@app.route("/profile")
def profile():
    return render_template("index.html")
@app.route("/education")
def education():
    return render_template("education.html")

@app.route("/projects")
def projects():
    return render_template("projects.html")

@app.route("/contact", methods=["GET", "POST"])
def contact():
    if request.method == "POST":
        name = request.form.get("name")
        email = request.form.get("email")
        message = request.form.get("message")

        telegram_message = f"📩 New Contact Form Submission:\n\nName: {name}\nEmail: {email}\nMessage:\n{message}"

        # Use GET request
        url = f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage"
        params = {
            "chat_id": 8373982910,
            "text": telegram_message
        }

        try:
            response = requests.get(url, params=params)  # <--- GET instead of POST
            print(response.text)  # See Telegram API response
            if response.status_code == 200:
                flash("Message sent successfully!", "success")
            else:
                flash(f"Failed to send message. Telegram returned {response.status_code}", "danger")
        except Exception as e:
            flash(f"Error: {e}", "danger")

        return redirect("/contact")

    return render_template("contact.html")
@app.route("/cv")
def cv():
    return render_template("CV.html")

if __name__ == "__main__":
    app.run(debug=True)