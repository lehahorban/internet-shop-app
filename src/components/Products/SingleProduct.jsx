import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProductQuery } from "../../features/api/apiSlice";
import { ROUTES } from "../../utils/routes";
import Product from "./Product";
import Products from "./Products";
import { getRelatedProducts } from "../../features/products/productsSlice";
import { useDispatch, useSelector } from "react-redux";

function SingleProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });
  const { related, list } = useSelector(({ products }) => products);

  useEffect(() => {
    if (!isLoading && !isFetching && !isSuccess) {
      navigate(ROUTES.HOME);
    }
  }, [isLoading, isFetching, isSuccess, navigate]);

  useEffect(() => {
    if (!data || !list.length) {
      return;
    }
    dispatch(getRelatedProducts(data.category.id));
  }, [data, list.length, dispatch]);

  return !data ? (
    <section className="preloader">Loading...</section>
  ) : (
    <>
      <Product {...data} />
      <Products products={related} amount={5} title="Related products" />
    </>
  );
}

export default SingleProduct;
