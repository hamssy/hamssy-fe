import React from "react";
import { Product } from "@/components/Product";

export type ProductData = {
  id: string | number;
  href: string;
  imageSrc: string;
  name: string;
  price: number;
};

type Props = {
  products: ProductData[];
};

export const ProductList = ({ products }: Props) => (
  <div className="bg-white">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">Products</h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products?.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            imageSrc={product.imageSrc}
          />
        ))}
      </div>
    </div>
  </div>
);
