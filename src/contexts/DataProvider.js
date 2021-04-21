import React, { createContext, useEffect, useState } from 'react';
import productApi from '../apis/productApi';

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = {
          _page: 1,
          _limit: 9,
        };
        const response = await productApi.getAll(params);
        // console.log(response);
        setProducts(response.data);
      } catch (error) {
        console.log('Failed to fetch product list: ', error);
      }
    };

    fetchProductList();
  }, []);

  const [cart, setCart] = useState([]);

  const addCart = (id) => {
    const check = cart.every((item) => {
      return item.id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product.id === id;
      });
      console.log(data);
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
