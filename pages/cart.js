import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import CartItem from "@/components/CartItem";
import React from "react";

const Cart = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        {/* EMPIEZA ENCABEZADO Y PARRAFO */}
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Carrito de Compras
          </div>
        </div>
        {/* TERMINA ENCABEZADO Y PARRAFO */}

        {/* EMPIEZA CONTENIDO DE CARRITO */}
        <div className="flex flex-col lg:flex-row gap-12 py-10">
          {/* EMPIEZA PRODUCTOS EN CARRITO */}
          <div className="flex-[2]">
            <div className="text-lg font-bold">Productos del Carro</div>
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          {/* TERMINA PRODUCTOS EN CARRITO */}

          {/* EMPIEZA RESUMEN DE TOTAL */}
          <div className="flex-[1]">
            <div className="text-lg font-bold">Resumen de Total</div>

            <div className="p-5 my-5 bg-black/[0.07] rounded-xl">
              <div className="flex justify-between">
                <div className="uppercase text-md md:text-lg font-medium text-black">Subtotal</div>
                <div className="text-md md:text-lg fnot-medium text-black">$960</div>
              </div>
              <div className="text-sm md:text-md py-5 border-t mt-5">
              El subtotal refleja el precio total de su pedido, incluidos aranceles e impuestos, antes de cualquier descuento aplicable.  No incluye costos de envío ni tarifas de transacciones internacionales. 
              </div>
            </div>

            {/* EMPIEZA BOTON */}
            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
              Checkout
            </button>
            {/* EMPIEZA BOTON */}

          </div>
          {/* TERMINA RESUMEN DE TOTAL */}
        </div>
        {/* TERMINA CONTENIDO DE CARRITO */}
      </Wrapper>
    </div>
  );
};

export default Cart;
