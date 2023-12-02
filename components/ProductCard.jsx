import Link from "next/link";
import React from "react";

const ProductCard = () => {
  return (
    <Link href="/product/1" className="transform overflow-hidden bg-white duration-200 hover:scale-105">
      <img className="w-full" src="https://cdn-image02.casetify.com/usr/4787/34787/~v181/30895019x2_iphone-15-pro-max__color_natural-titanium_16005970.png.1000x1000-w.m80.webp" alt="Product Image" />
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">Nombre Del Producto</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold">$320.00</p>
          <p className="text-base font-medium line-through">$510</p>
          <p className="ml-auto text-base font-medium text-green-500">20% DESCUENTO</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
