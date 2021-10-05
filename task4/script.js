function useRequest(url, callback) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function() {
        if (xhr.status != 200) {
        console.log('Статус ответа: ', xhr.status);
      } else {
        const result = JSON.parse(xhr.response);
        if (callback) {
          callback(result);
        }
      }
    };
    
    xhr.onerror = function() {
      console.log('Ошибка!', xhr.status);
    };
    
    xhr.send();
  };
  
  // Node для вставки результата запроса
  const resultNode = document.querySelector('.j-result');

  // Node для вставки ссылки 
  const resultLink = document.querySelector('.j-link');

  // Кнопка-запрос
  const btnNode = document.querySelector('.j-btn-request');
  const value = document.querySelector('#select').value;
    
  //Функция обработки полученного результата
    function displayResult(apiData) {
    let cards = '';
    console.log('start cards', cards);
    console.log(apiData);
    
    apiData.forEach(item => {
        if (item.year == value) {
            const cardBlock = `
               <table>
                <tr>
                    <th>кв. 1</th>
                    <th>кв. 2</th>
                    <th>кв. 3</th>
                    <th>кв. 4</th>
                </tr>
                <tr>
                    <td>${item.sales.q1}</td>
                    <td>${item.sales.q2}</td>
                    <td>${item.sales.q3}</td>
                    <td>${item.sales.q4}</td>
                </tr>
            </table>
            <div class="link">
              <a target="_balnk" href="https://quickchart.io/chart?c={type:'bar',data:{labels:['Кв.1','Кв.2','Кв.3','Кв.4'], datasets:[{label:'Выручка за ${value} год',data:[${item.sales.q1, item.sales.q2, item.sales.q3, item.sales.q4}]}]}}">Quickchart.io</a>
             
            </div>
          `;
          cards = cards + cardBlock;
        }
    });
        console.log('end cards', cards);
        resultNode.innerHTML = cards;
  }
    // Обработчик для запроса
  btnNode.addEventListener('click', () => {
    useRequest('https://my.api.mockaroo.com/revenue_2017-2019.json?key=fd36b440', displayResult);
  })