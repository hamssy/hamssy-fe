import { atom } from "jotai";
import { MobileMenu } from "@/components/MobileMenu";
import { DecorativeImage } from "@/components/DecorativeImage";
import { Header } from "@/components/Header";
import { Introduction } from "@/components/Introduction";
import { ShopByCategory } from "@/components/ShopByCategory";
import { ShopByCollection } from "@/components/ShopByCollection";
import axios from "axios";

export type Navigation = {
  categories: {
    name: string;
    featured: {
      name: string;
      href: string;
    }[];
    collection: {
      name: string;
      href: string;
    }[];
    categories: {
      name: string;
      href: string;
    }[];
    brands: {
      name: string;
      href: string;
    }[];
  }[];
  pages: {
    name: string;
    href: string;
  }[];
};

const currencies = ["CAD", "USD", "AUD", "EUR", "GBP"];
const navigation = {
  categories: [
    {
      name: "POP",
      featured: [
        { name: "Albums", href: "#" },
        { name: "MD", href: "#" },
        { name: "Digital", href: "#" },
      ],
      collection: [
        { name: "Everything", href: "#" },
        { name: "Core", href: "#" },
        { name: "New Arrivals", href: "#" },
        { name: "Sale", href: "#" },
      ],
      categories: [
        { name: "K-Pop", href: "#" },
        { name: "Webtoons", href: "#" },
        { name: "Dramas", href: "#" },
        { name: "Movies", href: "#" },
      ],
      brands: [
        { name: "Shinee", href: "#" },
        { name: "Taemin", href: "#" },
        { name: "Significant Other", href: "#" },
      ],
    },
    {
      name: "BOOKS",
      featured: [
        { name: "Paper Book", href: "#" },
        { name: "E-Book", href: "#" },
        { name: "MD", href: "#" },
      ],
      collection: [
        { name: "Everything", href: "#" },
        { name: "Core", href: "#" },
        { name: "New Arrivals", href: "#" },
        { name: "Sale", href: "#" },
      ],
      categories: [
        { name: "Fiction", href: "#" },
        { name: "Non-fiction", href: "#" },
        { name: "Photo", href: "#" },
        { name: "Others", href: "#" },
      ],
      brands: [
        { name: "Significant Other", href: "#" },
        { name: "My Way", href: "#" },
        { name: "Counterfeit", href: "#" },
        { name: "Re-Arranged", href: "#" },
        { name: "Full Nelson", href: "#" },
      ],
    },
  ],
  pages: [{ name: "ABOUT", href: "#" }],
};

export type Category = {
  name: string;
  href: string;
  imageSrc: string;
};

const categories = [
  {
    name: "New Arrivals",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-category-01.jpg",
  },
  {
    name: "Productivity",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-category-02.jpg",
  },
  {
    name: "Workspace",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-category-04.jpg",
  },
  {
    name: "Accessories",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-category-05.jpg",
  },
  {
    name: "Sale",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-category-03.jpg",
  },
];
export type Collection = {
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
};

const collections = [
  {
    name: "Handcrafted Collection",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg",
    imageAlt:
      "Brown leather key ring with brass metal loops and rivets on wood table.",
    description:
      "Keep your phone, keys, and wallet together, so you can lose everything at once.",
  },
  {
    name: "Organized Desk Collection",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg",
    imageAlt:
      "Natural leather mouse pad on white desk next to porcelain mug and keyboard.",
    description:
      "The rest of the house will still be a mess, but your desk will look great.",
  },
  {
    name: "Focus Collection",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg",
    imageAlt:
      "Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.",
    description:
      "Be more productive than enterprise project managers with a single piece of paper.",
  },
];

export const mobileMenuOpenAtom = atom(false);

const Home = () => {
  return (
    <>
      <MobileMenu navigation={navigation} currencies={currencies} />
      <div className="relative bg-gray-900">
        <DecorativeImage />
        <Header navigation={navigation} currencies={currencies} />
        <Introduction />
      </div>

      <main>
        <ShopByCategory categories={categories} />
        <ShopByCollection collections={collections} />
      </main>
    </>
  );
};

export default Home;
