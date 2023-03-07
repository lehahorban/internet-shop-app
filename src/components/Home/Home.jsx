import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Poster from "../Poster/Poster";
import Products from "../Products/Products";
import Categories from "../Categories/Categories";
import Banner from "../Banner/Banner";
import { filterByPrice } from "../../features/products/productsSlice";

function Home() {
  const {
    products: { list, filtered },
    categories,
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!list.length) {
      return;
    }
    dispatch(filterByPrice(100));
  }, [dispatch, list.length]);
  return (
    <>
      <Poster />
      <Products products={list} amount={5} title="Trending" />
      <Categories
        categories={categories.list}
        amount={5}
        title="Worth seeing"
      />
      <Banner />
      <Products products={filtered} amount={5} title="Less then 100%" />
    </>
  );
}

export default Home;
