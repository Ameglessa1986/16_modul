const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`


const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector("list");
const students = listNode.querySelectorAll("student");
let newArr = [];

for (let i = 0; i < students.length; i++) {
    const item = students.item(i);
    const nameNode = item.querySelector("name");
    const firstNode = nameNode.querySelector("first");
    const secondNode = nameNode.querySelector("second");
    const ageNode = item.querySelector("age");
    const profNode = item.querySelector("prof");

    const langAttr = nameNode.getAttribute('lang');

    let resultObj = {
        name: `${firstNode.textContent} ${secondNode.textContent}`,
        age: ageNode.textContent,
        prof: profNode.textContent,
        lang: langAttr
    };
    newArr.push(resultObj);
}
const result = {
    list: newArr
}
console.log(result);