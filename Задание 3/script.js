const sendBtn = document.querySelector('.send-btn');
const geolocationBtn = document.querySelector('.geolocation-btn');
const inputMessage = document.querySelector('.input-message');
const chat = document.querySelector('.wrapper-chat');
// const senderMessage = document.querySelector('.sender');
// const serverMessage = document.querySelector('.server');
const url = "wss://echo.websocket.org/";

let websocket;

function initWebSocket() {
    websocket = new WebSocket(url);
    websocket.onopen = function (event) {
        console.log('Соединение установлено');
    };
    websocket.onmessage = function (event) {
        writeToScreen('Сервер: ' + event.data, 'server');
    };
    websocket.onerror = function (event) {
        console.log('Ошибка: ' + event.data);
    };
}

function writeToScreen(message, type) {
    let messageDiv = document.createElement('div');
    messageDiv.className = 'message ' + type;
    messageDiv.innerHTML = message;
    chat.appendChild(messageDiv);
    chat.scrollTop = chat.scrollHeight;
}

sendBtn.addEventListener('click', () => {
    const message = inputMessage.value;
    if (message) {
        chat.style.display = 'flex';
        inputMessage.value = '';
        if (websocket && websocket.readyState === WebSocket.OPEN) {
            writeToScreen('Вы:' + message, 'sender');
            websocket.send(message);
        } else {
            console.log('Соединение не установлено.');
        }
    }
});

const error = () => {
    writeToScreen('Невозможно определить ваше местоположение', 'server')
};

const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const geoLink = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    writeToScreen('<a href="' + geoLink + '" target="_blank">Ссылка на карту</a>', 'server')
};

geolocationBtn.addEventListener('click', () => {
    if (navigator.geolocation) {
        writeToScreen('Определение местоположения...', 'server');
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        writeToScreen('Геолокация не поддерживается вашим браузером', 'server');
    }
});

initWebSocket();
