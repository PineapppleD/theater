from flask import Flask, request
import pypyodbc as odbc
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

conn = odbc.connect('Driver={SQL Server};'
                      'Server=DESKTOP-2AMRQTU;'
                      'Database=theater;')

# Create a cursor object for executing SQL queries
cursor = conn.cursor()


@app.route("/actors", methods=["GET", "POST", "DELETE", "PUT"])
def actors():

    # Execute a query and retrieve the results
    cursor.execute('SELECT * FROM actor')
    actors = cursor.fetchall()
    return {
        "response" : actors
    }

@app.route('/deleteauthor/<int:id>')
def delete_author(id):
    try:
        cursor.execute(f'DELETE FROM author WHERE authorid={id}')
        conn.commit()
        return {"success": True}, 200
    except Exception as e:
        print(str(e))
        return {"error": True}, 500

@app.route('/deleteactor/<int:id>')
def delete_actor(id):
    try:
        cursor.execute(f'DELETE FROM actor WHERE actorid={id}')
        conn.commit()
        return {"success": True}, 200
    except Exception as e:
        print(str(e))
        return {"error": True}, 500

@app.route('/deleteperformance/<int:id>')
def delete_performance(id):
    try:
        cursor.execute(f'DELETE FROM performance WHERE performanceID={id}')
        conn.commit()
        return {"success": True}, 200
    except Exception as e:
        print(str(e))
        return {"error": True}, 500

@app.route('/deleteconductor/<int:id>')
def deleteconductor(id):
    try:
        cursor.execute(f'DELETE FROM conductor WHERE conductorID={id}')
        conn.commit()
        return {"success": True}, 200
    except Exception as e:
        print(str(e))
        return {"error": True}, 500

@app.route('/deleteproducer/<int:id>')
def delete_producer(id):
    try:
        cursor.execute(f'DELETE FROM producer WHERE producerID={id}')
        conn.commit()
        return {"success": True}, 200
    except Exception as e:
        print(str(e))
        return {"error": True}, 500


@app.route('/deleteTicket/<int:id>')
def delete_ticket(id):
    try:
        cursor.execute(f'DELETE FROM ticket WHERE ticketID={id}')
        conn.commit()
        return {"success": True}, 200
    except Exception as e:
        print(str(e))
        return {"error": True}, 500

@app.route('/deleteorchestra/<int:id>')
def delete_orchestra(id):
    try:
        cursor.execute(f'DELETE FROM orchestra WHERE orchestraID={id}')
        conn.commit()
        return {"success": True}, 200
    except Exception as e:
        print(str(e))
        return {"error": True}, 500


@app.route("/authors", methods=["GET", "POST", "DELETE", "PUT"])
def authors():
    if request.method == "GET":
        cursor.execute('SELECT * FROM author')
        authors = cursor.fetchall()
        return {
            "response": authors
        }

@app.route("/performances", methods=["GET", "POST", "DELETE", "PUT"])
def performances():
    if request.method == "GET":
        cursor.execute('SELECT * FROM performance')
        performances = cursor.fetchall()
        return {
            "response": performances
        }
    if request.method == "DELETE":
        row_id = request.form.get('id')
        cursor.execute(f'DELETE FROM performance WHERE id={row_id}')
        return {
            "Success": True
        }

@app.route("/conductors", methods=["GET", "POST", "DELETE", "PUT"])
def conductors():
    cursor.execute('SELECT * FROM conductor')
    conductors = cursor.fetchall()
    return {
        "response": conductors
    }

@app.route("/producers", methods=["GET", "POST", "DELETE", "PUT"])
def producers():
    cursor.execute('SELECT * FROM producer')
    producers = cursor.fetchall()
    return {
        "response": producers
    }



if __name__ == "__main__":
    app.run(debug=True)