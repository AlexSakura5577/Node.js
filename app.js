const fs = require("fs");

fs.readFile("./test.txt", 'utf-8', (error, data) => {

    fs.mkdir("./files", () => {

        fs.writeFile("./files/test_2.txt", `${data}\nNew text!`, () => {
            error ? console.log(error) : null;
        });
    });
});

setTimeout(() => {
    if (fs.existsSync("./files/test_2.txt")) {
        fs.unlink("./files/test_2.txt", () => { });
    }
}, 4000);
setTimeout(() => {
    if (fs.existsSync("./files")) {
        fs.rmdir("./files", () => { });
    }
}, 6000);

//console.log("Just test!");