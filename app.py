from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Главная страница
@app.route('/')
def index():
    return render_template('index.html')

# Пример API для обработки данных
@app.route('/api/data', methods=['POST'])
def process_data():
    data = request.json
    response = {
        'message': f"Привет, {data.get('name', 'Гость')}!",
        'success': True
    }
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
