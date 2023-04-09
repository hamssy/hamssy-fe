import React from "react";
import { Product } from "@/components/Product";

type Product = {
  id: string | number;
  href: string;
  imageSrc: string;
  name: string;
  price: number;
};

const products: Product[] = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: 48,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: 35,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: 89,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: 35,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
  },
  // More products...
];

export const ProductList = () => (
  <div className="bg-white">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">Products</h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
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
