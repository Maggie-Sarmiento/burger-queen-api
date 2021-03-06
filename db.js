const db = {
  empleado: [
    {
      role: 'Admin',
      name: 'Maggie',
      lastname: 'Sarmiento',
      email: 'gsmaggie001@gmail.com',
      date: '2022-05-05',
      id: 1,
    },
    {
      role: 'Admin',
      name: 'Skarlet',
      lastname: 'Araque',
      email: 'skarlet15m@gmail.com',
      date: '2022-05-09',
      id: 2,
    },
    {
      date: '2022-05-09',
      role: 'Admin',
      name: 'Sara',
      lastname: 'Rojas',
      email: 'sara@gmail.com',
      id: 3,
    },
    {
      role: 'Jefe de cocina',
      lastname: 'España',
      email: 'lalo@gmail.com',
      date: '2022-05-09',
      name: 'Lalo',
      id: 4,
    },
    {
      date: '2022-05-10',
      role: 'Mesero',
      name: 'Kike',
      lastname: 'Soberanis',
      email: 'kike@gmail.com',
      id: 5,
    },
  ],
  menu: [
    {
      name: 'Cafe con Leche',
      price: 7,
      popularity: 4,
      image: 'https://cdn.shopify.com/s/files/1/0438/4479/6573/products/Latte-moka-caliente-12oz-_354ml_-01.jpg?v=1601056479',
      id: 1,
    },
    {
      id: 2,
      name: 'Cafe',
      price: 7,
      popularity: 5,
      image: 'https://ae01.alicdn.com/kf/H1c2054b527494e9faee9a11dfd37572bi.jpg',
    },
    {
      id: 3,
      name: 'Jugo de Naranja',
      price: 7.8,
      popularity: 4,
      image: 'https://verandavalencia.com/wp-content/uploads/2017/07/zumo-de-naranja-natural.jpg',
    },
    {
      name: 'Sandwich',
      price: 15,
      popularity: 4.8,
      image: 'https://eggs.org.nz/wp-content/uploads/2021/12/Club-Sandwiches-500x500.jpg',
      id: 4,
    },
  ],
  menuLunch: [
    {
      id: 1,
      name: 'Hamburguesa Simple',
      price: 10,
      popularity: 4,
      image: 'https://elporxosantmarti.com/wp-content/uploads/2021/12/hamburguesa-anos-20.jpg',
    },
    {
      id: 2,
      name: 'Hamburguesa Doble',
      price: 15,
      popularity: 5,
      image: 'https://cdn.shopify.com/s/files/1/0248/7310/7536/products/haz-keto-bollos-para-hamburguesa-3_1200x1200.jpg?v=1623868484',
    },
    {
      id: 3,
      name: 'Papas Fritas',
      price: 5,
      popularity: 4,
      image: 'https://godmyshop.com/wp-content/uploads/2020/11/papas-fritas-300x300.jpg',
    },
  ],
  orders: [
    {
      client: 'Maggie',
      table: '9',
      total: '22.00',
      status: 'process',
      hours: '11:27:53',
      startTime: 1653323273796,
      endTime: 1653324513486,
      totalTime: 21,
      products: [
        {
          name: 'Sandwich',
          price: 15,
          popularity: 4.8,
          image: 'https://eggs.org.nz/wp-content/uploads/2021/12/Club-Sandwiches-500x500.jpg',
          id: 4,
        },
        {
          id: 2,
          name: 'Cafe',
          price: 7,
          popularity: 5,
          image: 'https://ae01.alicdn.com/kf/H1c2054b527494e9faee9a11dfd37572bi.jpg',
        },
      ],
      id: 3,
    },
    {
      client: 'Ramon',
      table: '3',
      total: '25.00',
      status: 'ready',
      hours: '11:27:53',
      startTime: 1653323273796,
      endTime: 1653324181447,
      totalTime: 15,
      products: [
        {
          name: 'Refresco 1L',
          price: 10,
          popularity: 4,
          image: 'https://superlomas.odoo.com/web/image/product.template/3087/image_256/REFRESCO%20COCA%20COLA%20PET%20NR%201%20LT?unique=af1926f',
          id: 8,
        },
        {
          id: 2,
          name: 'Hamburguesa Doble',
          price: 15,
          popularity: 5,
          image: 'https://cdn.shopify.com/s/files/1/0248/7310/7536/products/haz-keto-bollos-para-hamburguesa-3_1200x1200.jpg?v=1623868484',
        },
      ],
      id: 7,
    },
    {
      client: 'Laila',
      table: '2',
      total: '20.00',
      status: 'delivered',
      hours: '11:46:59',
      startTime: 1653324419936,
      endTime: 1653325338812,
      totalTime: 15,
      products: [
        {
          id: 1,
          name: 'Hamburguesa Simple',
          price: 10,
          popularity: 4,
          image: 'https://elporxosantmarti.com/wp-content/uploads/2021/12/hamburguesa-anos-20.jpg',
        },
        {
          name: 'Refresco 1L',
          price: 10,
          popularity: 4,
          image: 'https://superlomas.odoo.com/web/image/product.template/3087/image_256/REFRESCO%20COCA%20COLA%20PET%20NR%201%20LT?unique=af1926f',
          id: 8,
        },
      ],
      id: 8,
    },
  ],
};

module.exports = { db };
