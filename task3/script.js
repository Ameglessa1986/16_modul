    let customDiv;

    function loadReport() {
        const select = document.getElementById("select_id");
        const year = select.value;
        if (year !== 'none') {
            const xhr = new XMLHttpRequest();
            const URL = "https://my.api.mockaroo.com/revenue_2017-2019.json?key=fd36b440"
            xhr.open('GET', URL, true);
            xhr.send();
            xhr.onload = function () {
                let value = JSON.parse(xhr.response);
                console.log(value);
                const y = year - 2017;
                // console.log(value[y].sales)
                let table = `<table border="1">
                    <caption>Отчёт</caption>
                    <tr>
                        <th>1 кв.</th>
                        <th>2 кв.</th>
                        <th>3 кв.</th>
                        <th>4 кв.</th>
                    </tr>
                    <tr><td>${value[y].sales.q1}</td><td>${value[y].sales.q2}</td><td>${value[y].sales.q3}</td><td>${value[y].sales.q4}</td></tr>
                </table>`
                if (customDiv !== undefined) {
                    document.body.removeChild(customDiv);
                }
                customDiv = document.createElement("div");
                customDiv.innerHTML = table;
                document.body.appendChild(customDiv);
            }

        } else alert('Выберите пожалуйста год')
    }

    const btn = document.getElementById("btn_id")
    btn.addEventListener('click', loadReport)