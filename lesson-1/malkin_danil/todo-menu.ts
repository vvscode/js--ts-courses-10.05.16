/**
 * Created by igor on 1/6/16.
 */

type menuList = { title: string, items?: menuList }[];

let menuList:menuList = [
    {
        title: 'Животные', items: [
        {
            title: 'Млекопитающие', items: [
            {title: 'Коровы'},
            {title: 'Ослы'},
            {title: 'Собаки'},
            {title: 'Тигры'}
        ]
        },
        {
            title: 'Другие', items: [
            {title: 'Змеи', items: [
                {title: 'Ядовитые'},
                {title: 'Вовсе не ядовитые'}
            ]},
            {title: 'Птицы'},
            {title: 'Ящерицы'},
        ],
        },
    ]
    },
    {
        title: 'Рыбы', items: [
        {
            title: 'Аквариумные', items: [
            {title: 'Гуппи'},
            {title: 'Скалярии'}
        ]
        },
        {
            title: 'Форель', items: [
            {title: 'Морская форель'}
        ]
        },
    ]
    }
];

function generateMenu(list:menuList):string {
    let html:string = `<ul>`;
    for (let a of list) {
        if (Array.isArray(a.items) && a.items.length !== 0 ) {
            html += `<li><a class="title">${a.title}</a>`;
            html += generateMenu(a.items);
        } else {
            html += `<li><a>${a.title}</a>`;
        }
        html += `</li>`;
    }
    html += `</ul>`;
    return html;
}


let navMenuList:HTMLElement = document.querySelector('.menu') as HTMLElement;
navMenuList.innerHTML = generateMenu(menuList);
navMenuList.onclick = (e:MouseEvent) => {
    let el = e.target as HTMLElement;
    let classList = el.classList;
    if (classList.contains(`title`)) {
        let parentLi = el.parentNode as HTMLElement;
        parentLi.classList.toggle('menu-open');
    }
};