import { GetServerSideProps } from "next";
import React from "react";

interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface productProps {
  products: IProduct;
}

// Berjalan sisi client
function Index({ products }: productProps) {
  console.log("component", products);
  return (
    <div>
      <h1>product Page</h1>
      <h1>{products.title}</h1>
      <p>{products.price}</p>
      <img src={products.image} />
      <p>{products.description}</p>
      <p>{products.category}</p>
      <p>{products.rating.rate}</p>
    </div>
  );
}

// getServerSideProps kan berjalan dari sisi server
export const getServerSideProps: GetServerSideProps = async ({params}) => {
  console.log(params)
    if (!params) {
    return {
      notFound: true,
    };
  }
  const response = await fetch(`https://fakestoreapi.com/products/${params?.productId}`);
  const products = await response.json();
  if (!products.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      products,
    },
  };
};

export default Index;
