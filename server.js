require('dotenv').config({ path: './other_env_files/as.env' });

// console.log(process.env.MY_VARIABLE);

const tag = process.env.TAG;
const content = process.env.CONTENT;

if (tag === undefined || content === undefined) {
    console.error('Отсутствуют обязательные переменные окружения: TAG и CONTENT');
    process.exit(1);
};

console.log(`<${tag}>${content}</${tag}>`);

// console.log(process);

// стандартный ввод:
// process.stdin.resume();
// process.stdin.on('data', function (data) {
//     console.log('Введено ' + data.toString().trim());
// });

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



