import React, { createContext, useEffect, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [products, setProducts] = useState([
    {
      _id: '1',
      title: "Nike Zoom '92",
      images: [
        'img/products/nike/product-1-1-1.jpg',
        'img/products/nike/product-1-1-2.jpg',
        'img/products/nike/product-1-1-3.jpg',
        'img/products/nike/product-1-1-4.jpg',
      ],
      description:
        "A nod to '90s basketball shoes, the Jordan Zoom '92 focuses on comfort, while tapping into the irreverent spirit of that era's designs. A stretchy-fit sleeve and underfoot cushioning offer a comfortable fit. '90s-inspired details give the shoe its retro flavour.",
      categories: ['nike', 'men'],
      sizes: ['37', '38', '39', '40', '41', '42'],
      price: 99,
      oldPrice: 199,
      count: 1,
      filter: 'topselling',
    },
    {
      _id: '2',
      title: "Nike Blazer Mid '77 Vintage",
      images: [
        'img/products/nike/product-3-1.jpg',
        'img/products/nike/product-1-2.jpg',
        'img/products/nike/product-1-3.jpg',
        'img/products/nike/product-1-4.jpg',
      ],
      description: "A nod to '90s basketball shoes, the Jordan Zoom '92 focuses on comfort.",
      categories: ['nike', 'men'],
      sizes: ['38', '39', '40', '41'],
      price: 89,
      oldPrice: 129,
      count: 1,
      filter: 'topselling',
    },
    {
      _id: '3',
      title: 'Air Jordan 3 Retro SE',
      images: [
        'img/products/nike/product-2-1.jpg',
        'img/products/nike/product-1-2.jpg',
        'img/products/nike/product-1-3.jpg',
        'img/products/nike/product-1-4.jpg',
      ],
      description: "A nod to '90s basketball shoes, the Jordan Zoom '92 focuses on comfort.",
      categories: ['nike', 'men'],
      sizes: ['38', '39', '40', '41', '42'],
      price: 99,
      oldPrice: 109,
      count: 1,
      filter: '',
    },
    {
      _id: '4',
      title: 'Adidas Ultra Boots new',
      images: [
        'img/products/adidas/product-1-1.jpg',
        'img/products/adidas/product-1-2.jpg',
        'img/products/adidas/product-1-3.jpg',
        'img/products/adidas/product-1-4.jpg',
      ],
      description: "A nod to '90s basketball shoes, the Jordan Zoom '92 focuses on comfort.",
      categories: ['adidas', 'men'],
      sizes: ['38', '39', '40', '41', '42'],
      price: 69,
      oldPrice: 119,
      count: 1,
      filter: 'topselling',
    },
    {
      _id: '5',
      title: 'X ghosted Tuft 16.2',
      images: [
        'img/products/adidas/product-2-1.jpg',
        'img/products/adidas/product-1-2.jpg',
        'img/products/adidas/product-1-3.jpg',
        'img/products/adidas/product-1-4.jpg',
      ],
      description: "A nod to '90s basketball shoes, the Jordan Zoom '92 focuses on comfort.",
      categories: ['adidas', 'men'],
      sizes: ['38', '39', '40', '41', '42'],
      price: 109,
      oldPrice: 199,
      count: 1,
      filter: 'topselling',
    },
    {
      _id: '6',
      title: 'Converse Chuck Taylor All Star 1970s Rival',
      images: [
        'img/products/converse/product-1-1.jpg',
        'img/products/converse/product-1-2.jpg',
        'img/products/converse/product-1-3.jpg',
        'img/products/converse/product-1-4.jpg',
      ],
      description: "A nod to '90s basketball shoes, the Jordan Zoom '92 focuses on comfort.",
      categories: ['converse', 'men'],
      sizes: ['38', '39', '40', '41', '42'],
      price: 80,
      oldPrice: 100,
      count: 1,
      filter: 'topselling',
    },
    {
      _id: '7',
      title: 'Converse Chuck Taylor All Star 1970s Renew ',
      images: [
        'img/products/converse/product-2-1.jpg',
        'img/products/converse/product-1-2.jpg',
        'img/products/converse/product-1-3.jpg',
        'img/products/converse/product-1-4.jpg',
      ],
      description: "A nod to '90s basketball shoes, the Jordan Zoom '92 focuses on comfort.",
      categories: ['converse', 'men'],
      sizes: ['36', '38', '39', '40', '41', '42'],
      price: 90,
      oldPrice: 99,
      count: 1,
      filter: 'topselling',
    },
    {
      _id: '8',
      title: 'Clyde All-Pro Basketball Shoes',
      images: [
        'img/products/puma/product-1-1.jpg',
        'img/products/puma/product-1-2.jpg',
        'img/products/puma/product-1-3.jpg',
        'img/products/puma/product-1-4.jpg',
      ],
      description: "A nod to '90s basketball shoes, the Jordan Zoom '92 focuses on comfort.",
      categories: ['puma', 'men'],
      sizes: ['38', '39', '40', '41', '42'],
      price: 100,
      oldPrice: 199,
      count: 1,
      filter: '',
    },
    {
      _id: '9',
      title: "RS-X 8W Men's Sneakers",
      images: [
        'img/products/puma/product-2-1.jpg',
        'img/products/puma/product-1-2.jpg',
        'img/products/puma/product-1-3.jpg',
        'img/products/puma/product-1-4.jpg',
      ],
      description: "A nod to '90s basketball shoes, the Jordan Zoom '92 focuses on comfort.",
      categories: ['puma', 'men'],
      sizes: ['38', '39', '40', '41', '42'],
      price: 50,
      oldPrice: 159,
      count: 1,
      filter: '',
    },
    {
      _id: '10',
      title: 'NMD_R1 Crystal White',
      images: [
        'img/products/adidas/NMD_Crystal_01.jpg',
        'img/products/adidas/NMD_Crystal_02.jpg',
        'img/products/adidas/product-1-3.jpg',
        'img/products/adidas/product-1-4.jpg',
      ],
      description: 'PHIÊN BẢN MỚI MẺ CỦA MỘT BIỂU TƯỢNG VĂN HÓA SNEAKER.',
      categories: ['adidas', 'men', 'women'],
      sizes: ['38', '39', '40', '41', '42'],
      price: 50,
      oldPrice: 159,
      count: 1,
      filter: '',
    },
    {
      _id: '11',
      title: 'NMD_R1 Pride',
      images: [
        'img/products/adidas/NMD_R1_Pride_01.jpg',
        'img/products/adidas/NMD_R1_Pride_02.jpg',
        'img/products/adidas/product-1-3.jpg',
        'img/products/adidas/product-1-4.jpg',
      ],
      description: 'ĐÔI GIÀY ĐẶC TRƯNG DÀNH CHO NHỮNG AI KHÔNG NGẠI THỂ HIỆN BẢN THÂN.',
      categories: ['adidas', 'men', 'women'],
      sizes: ['38', '39', '40', '41', '42'],
      price: 50,
      oldPrice: 159,
      count: 1,
      filter: '',
    },
  ]);

  const [cart, setCart] = useState([]);

  const addCart = (id) => {
    const check = cart.every((item) => {
      return item._id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product._id === id;
      });
      setCart([...cart, ...data]);
    } else {
      alert('Product has been added to cart');
    }
  };

  // dung localStorage de luu products co trong Cart
  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem('dataCart'));
    if (dataCart) {
      setCart(dataCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('dataCart', JSON.stringify(cart));
  }, [cart]);

  const value = {
    products: [products, setProducts],
    cart: [cart, setCart],
    addCart: addCart,
  };

  return <DataContext.Provider value={value}>{props.children}</DataContext.Provider>;
};
