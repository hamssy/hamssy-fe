import { CategoryFilter } from "@/components/CategoryFilter";
import { ProductData, ProductList } from "@/components/ProductList";
import { GetServerSideProps, GetStaticProps } from "next";
import axios from "axios";

type Props = {
  products: ProductData[];
};

export default function CategoryProduct({ products }: Props) {
  return (
    <>
      <CategoryFilter />
      <ProductList products={products ?? []} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const response = await axios.get<ProductData[]>(
    `/categories/${params?.categoryId}`
  );
  return {
    props: { products: response.data },
  };
};
