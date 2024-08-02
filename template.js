// функция шаблонизатор:
function template(tagName, innerHtml) {
    return `<${tagName}>${innerHtml}</${tagName}>`
};

module.exports = template;
