// Функция postData для поста данных с различными аргументами
const postData = async (url, data) => {
    const resull = await fetch(url, {
        method: "POST",
        body: data,
        headers: {
            'Content-type': 'application/json'
        }
    });

    return await resull.json();
};

// Функция getResourses для передачи данных с сервера для создания карточек   
async function getResourses(url) {
    let resull = await fetch(url);

    if (!resull.ok) { //блок ошибки записываем в ручную
        throw new Error(`Could not fetch ${url}, status ${resull.status}`);
    }

    return await resull.json();
}

export {postData};
export {getResourses};
