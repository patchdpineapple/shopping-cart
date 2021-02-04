import headphone from './img/headphone.png';
import mouse from './img/mouse.jpg';
import keyboard from './img/keyboard.jpg';
import laptop from './img/laptop.jpg';
import chair from './img/chair.png';
import mousepad from './img/mousepad.jpg';



const productsList = [
    {
        id: 1,
        name: 'Razer Kraken Gaming Headset',
        description: 'All-Day Comfort: Oval, cooling gel-infused cushions that prevent overheating and pressure build-up ',
        price: 59.99,
        image: headphone,
    },
    {
        id: 2,
        name: 'Logitech G305',
        description: 'Next-gen 12,000 DPI HERO optical sensor delivers unrivaled gaming performance, accuracy and power efficiency ',
        price: 40.55,
        image: mouse,

    },
    {
        id: 3,
        name: 'Redragon K551 Mechanical Gaming Keyboard',
        description: 'Mechanical Gaming keyboard Redragon K551 104 Keys with Dust Proof Mechanical Switches Cherry MX Red equivalent Linear switches',
        price: 35.99,
        image: keyboard,

    },
    {
        id: 4,
        name: 'Dell XPS 15 9500',
        description: 'A 15-inch laptop with an InfinityEdge display and Adobe RGB color. Featuring 10th Gen Intel Core processors, optional 4K display and Dell Mobile Connect.',
        price: 1699.99,
        image: laptop,

    },
    {
        id: 5,
        name: 'Fantech Alpha GC-181 Gaming Chair',
        description: '',
        price: 90.99,
        image: chair,

    },
    {
        id: 6,
        name: 'SteelSeries QcK Mouse Pad',
        description: 'Exclusive QcK micro woven cloth optimized for low and high DPI tracking movements ',
        price: 13.49,
        image: mousepad,

    },
];

export default productsList;