// импорт файла template.js
// const template = require('./template');

////////////////////////////////////////////////////////////////
// просмотр содержимого переменной окружения:
// console.log(process.env.MY_VARIABLE);

//////////////////////////////////////////////////////////
// использование переменных окружения:
// require('dotenv').config({ path: './other_env_files/as.env' });

// const tag = process.env.TAG;
// const content = process.env.CONTENT;

// if (tag === undefined || content === undefined) {
//     console.error('Отсутствуют обязательные переменные окружения: TAG и CONTENT');
//     process.exit(1);
// };

// // console.log(`<${tag}>${content}</${tag}>`);
// console.log(template(tag, content));

////////////////////////////////////////////////////////////////
// стандартный ввод:
// process.stdin.resume();
// process.stdin.on('data', function (data) {
//     console.log('Введено ' + data.toString().trim());
// });

////////////////////////////////////////////////////////////////
// кастомный шаблонизатор:
// let tag;
// let content;

// console.log('Введите тег и контент для шаблонизации...');

// process.stdin.resume();
// process.stdin.on('data', function (data) {
//     if (tag === undefined) {
//         tag = data.toString().trim();
//         return;
//     }

//     content = data.toString().trim();
//     console.log(`<${tag}>${content}</${tag}>`);

//     process.exit(0);
// });

////////////////////////////////////////////////////////////////
// работа с файловой системой:
// const fs = require('fs');
// const text = fs.readFileSync('./data.txt', 'utf8');
// const data = text.trim().split('\n').map(item => item.trim());
// console.log(template(data[0], data[1]));

////////////////////////////////////////////////////////////////
// простейший http сервер:
const http = require('http');
require('dotenv').config({ path: './other_env_files/as.env' });
const port = process.env.PORT;

let message = 'Добрый день, вы находитесь на странице';

const server = http.createServer((req, res) => {
    const url = req.url;

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write(`${message} ${url}`);

    res.end();
});

server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});














