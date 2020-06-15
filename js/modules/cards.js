function cards() {
    // Использование классов для карточек

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUA();
        }

        changeToUA() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');

            if (this.classes.length === 0) {
                this.classes = 'menu__item';
                element.classList.add(this.classes);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }
            
            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            this.parent.append(element);
        }
    }

    // Функция getResourses для передачи данных с сервера для создания карточек   
    const getResourses = async (url) => {
        const resull = await fetch(url);

        if (!resull.ok) { //блок ошибки записываем в ручную
            throw new Error(`Could not fetch ${url}, status ${resull.status}`);
        }

        return await resull.json();
    };

    getResourses('http://localhost:3000/menu')
    .then(data => {
        data.forEach(({img, altimg, title, descr, price}) => {       // {}- деструктуризация обьекта, берем только значения
            new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
        });
    });
}

module.exports = cards;