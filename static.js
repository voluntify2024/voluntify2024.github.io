document.getElementById('dataForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const responseMessage = document.getElementById('responseMessage');

    try {
        const response = await fetch('/api/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name }),
        });

        const data = await response.json();
        if (data.success) {
            responseMessage.textContent = data.message;
        } else {
            responseMessage.textContent = 'Произошла ошибка.';
        }
    } catch (error) {
        responseMessage.textContent = 'Не удалось подключиться к серверу.';
    }
});
