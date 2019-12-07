var tariffs = [
    {
        logo: './img/device.svg',
        name: 'Mobile',
        description: 'Get notifications about new releases in our mobile app.',
        price: '10'
    },
    {
        logo: './img/laptop.svg',
        name: 'Desktop',
        description: 'Enjoy new episodes on your laptop in browser with our web service, which suppopts all the platforms.',
        price: '15'
    },
    {
        logo: './img/monitor.svg',
        name: 'TV',
        description: 'Watch your favorite series at home on large screen with our TV application.',
        price: '20'
    }
];

function setTariffLogo(tariffId) {
    document.querySelector('.modal__tariff-logo').src = tariffs[tariffId].logo;
    document.querySelector('.modal__tariff-logo').title = tariffs[tariffId].name;
    document.querySelector('.modal__tariff-logo').alt = tariffs[tariffId].name;
}

function setTariffName(tariffId) {
    document.querySelector('.modal__tariff-name').textContent = tariffs[tariffId].name;
}

function setTariffDescription(tariffId) {
    document.querySelector('.modal__tariff-description').textContent = tariffs[tariffId].description;
}

function setTariffPrice(tariffId) {
    document.querySelector('#tariff-price').textContent = tariffs[tariffId].price;
}

function setTariff(tariffId) {
    setTariffLogo(tariffId);
    setTariffName(tariffId);
    setTariffDescription(tariffId);
    setTariffPrice(tariffId);
}

function showModal() {
    modal.classList.add('modal--target');
    document.body.style.overflow = 'hidden';
}

function hiddenModal() {
    modal.classList.remove('modal--target');
    document.body.style.overflow = '';
}

/** ready */
document.addEventListener("DOMContentLoaded", function () {

    tariffItem = document.querySelectorAll('.tariff__item');
    modal = document.querySelector('.modal');

    Array.from(tariffItem).forEach(link => {
        link.addEventListener('click', function (e) {
            tariffId = e.currentTarget.dataset.tariff_id;
            setTariff(tariffId);
            showModal();
        });
    });

    document.querySelector('.modal__close').addEventListener('click', function () {
        hiddenModal();
    });

    modal.addEventListener('click', function (e) {
        if (modal == e.target) {
            hiddenModal();
        }
    });

});