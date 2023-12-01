import Wrapper from "@/components/Wrapper";
import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProducts from "@/components/RelatedProducts";

const PrdouctsDetails = () => {
  return ( 
  <div className="w-full md:py-20">
    <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
            {/* empieza columna izquierda*/}
            <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                <ProductDetailsCarousel />
            </div>
            {/* termina columna izquierda*/}

            {/* empieza columna derecha*/}
            <div className="flex-[1] py-3">
                {/*TITULO DE PRODUCTO*/}
                <div className="text-[34px] font-semibold mb-2">
                    Pelicanos
                </div>
                {/*SUBTITULO DE PRODUCTO*/}
                <div className="text-lg font-semibold mb-5">
                Funda de impacto
                </div>
                {/*PRECIO*/}
                <div className="text-lg font-semibold">
                  $320.00 MXN
                </div>
                <div className="text-md font-medium text-black/[0.5]">
                  incl. of taxes
                </div>
                <div className="text-md font-medium text-black/[0.5] mb-20">
                  {`(Also includes all applicable duties)`}
                </div>

                {/* EMPIEZA SELECCION DE COLOR */}
                <div className="mb-10">
                  {/* EMPIEZA CABEZA */}
                  <div className="flex justify-between mb-2">
                    <div className="text-md font-semibold">
                      Selecciona Color
                    </div>
                    <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                      Seleccion
                    </div>
                  </div>
                  {/* TERMINA CABEZA */}

                  {/* EMPIEZA COLORES */}
                    <div className="grid grid-cols-3 gap-2">
                      <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                        BLANCO
                      </div>
                      <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                        NEGRO
                      </div>
                      <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                        AZUL
                      </div>
                      <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                        ROJO
                      </div>
                      <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                        VERDE
                      </div>
                      <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                        NARANJA
                      </div>
                    </div>
                  {/* TERMINA COLORES */}
                  
                  {/* EMPIEZA MIUESTRA DE ERROR */}
                  <div className="text-red-600 mt-1">
                    Selecciona un color
                  </div>
                  {/* TERMINA MUESTRA DE ERROR */}

                  {/* EMPIEZA BOTON AGREGAR AL CARRO */}
                    <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3">
                      Agregar al Carrito
                    </button>
                  {/* TERMINA BOTON AGREGAR AL CARRO */}

                  {/* EMPIEZA BOTON FAVORITOS */}
                  <button className="w-full py-4 rounded-full border text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                      Lista de Deseos
                      <IoMdHeartEmpty size={20}/>
                    </button>
                  {/* TERMINA BOTON FAVORITOS */}

                  <div>
                    <div className="text-lg font-bold mb-5">
                      Detalles
                    </div>
                    <div className="text-md mb-5">
                    Soporta los embates diarios y/o golpes fuertes. Algunas son aprueba de agua. Disponibles para varios modelos. Existen modelos económicos que protegen lo necesario.
                    </div>
                  </div>

                </div>
                {/* TERMINA SELECCION DE COLOR */}
                
            </div>
            {/* termina columna derecha*/}
        </div>

        <RelatedProducts />
    </Wrapper>
  </div>
  
  );
};

export default PrdouctsDetails;
