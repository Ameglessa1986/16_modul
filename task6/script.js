function usePromise() {

    //Создание Promise
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            let randomInt = Math.floor(Math.random() * 100 - 1);
            if (randomInt % 2 == 0) {
                resolve(`Случайное число — ${randomInt}`);
            } else {
                reject(`Случайное число — ${randomInt}`);
            }

            console.log(randomInt);
        }, 1000);
    });
        // Выполнение
            myPromise
        .then((result) => {
            console.log('Завершено без ошибок.', result);
        })
        .catch((error) => {
            console.log('Завершено с ошибкой.', error);
        })
};

console.log('Запуск Promise');
usePromise();