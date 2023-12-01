import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";

export default function Home() {
  return <main>
    <HeroBanner/>
    <Wrapper>
      <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
        <div className="text-[28px] md:text-[34px] mb-5 font-extrabold leading-tight">
        OBTEN UN 30% DE DESCUENTO
        </div>
        <div className="text-md md:text-xl">
        Suscríbete para recibir noticias de nuestras últimas novedades y recibe un descuento en tu primer compra.
        </div>
      </div>
      {/* empieza grid productos*/}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
      </div>
      {/* empieza grid productos*/}
    </Wrapper>
  </main>
}
