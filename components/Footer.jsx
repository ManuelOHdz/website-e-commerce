import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Wrapper from "./Wrapper";

const Footer = () => {
    return (
        <footer className="bg-white text-black pt-14 pb-3">
            <Wrapper className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
                {/* LEFT START */}
                <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
                    {/* MENU START */}
                    <div className="flex flex-col gap-3 shrink-0">
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            sucursales
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            registrate
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            envianos tus comentarios
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            descuento de estudiante
                        </div>
                    </div>
                    {/* MENU END */}

                    {/* NORMAL MENU START */}
                    <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
                        {/* MENU START */}
                        <div className="flex flex-col gap-3">
                            <div className="font-oswald font-medium uppercase text-sm">
                                ayuda
                            </div>
                            <div className="text-sm text-black hover:text-gray-500 cursor-pointer">
                                Entrega
                            </div>
                            <div className="text-sm text-black hover:text-gray-500 cursor-pointer">
                                Devoluciones
                            </div>
                            <div className="text-sm text-black hover:text-gray-500 cursor-pointer">
                                Opciones de pago
                            </div>
                            <div className="text-sm text-black hover:text-gray-500 cursor-pointer">
                                Contactanos
                            </div>
                        </div>
                        {/* MENU END */}

                        {/* MENU START */}
                        <div className="flex flex-col gap-3">
                            <div className="font-oswald font-medium uppercase text-sm">
                                Sobre Case Mobile
                            </div>
                            <div className="text-sm text-black/[0.5] hover:text-gray-500 cursor-pointer">
                                Noticias
                            </div>

                            <div className="text-sm text-black/[0.5] hover:text-gray-500 cursor-pointer">
                                Inversores
                            </div>
                            <div className="text-sm text-black/[0.5] hover:text-gray-500 cursor-pointer">
                                Sustainability
                            </div>
                        </div>
                        {/* MENU END */}
                    </div>
                    {/* NORMAL MENU END */}
                </div>
                {/* LEFT END */}

                {/* RIGHT START */}
                <div className="flex gap-4 justify-center md:justify-start">
                    <div onClick={()=> window.open("https://facebook.com", "_blank")} className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-black/[0.10] cursor-pointer">
                        <FaFacebookF size={20} />
                    </div>
                    <div onClick={()=> window.open("https://x.com", "_blank")} className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-black/[0.10] cursor-pointer">
                        <FaTwitter size={20} />
                    </div>
                    <div onClick={()=> window.open("https://youtube.com", "_blank")} className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-black/[0.10] cursor-pointer">
                        <FaYoutube size={20} />
                    </div>
                    <div onClick={()=> window.open("https://instagram.com", "_blank")} className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-black/[0.10] cursor-pointer">
                        <FaInstagram size={20} />
                    </div>
                </div>
                {/* RIGHT END */}
            </Wrapper>
            <Wrapper className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
                {/* LEFT START */}
                <div className="text-[12px] text-black/[0.5] hover:text-gray-500 cursor-pointer text-center md:text-left">
                    © 2023 Case Mobile, Inc. All Rights Reserved
                </div>
                {/* LEFT END */}

                {/* RIGHT START */}
                <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
                    <div className="text-[12px] text-black/[0.5] hover:text-gray-500 cursor-pointer">
                        Guias
                    </div>
                    <div className="text-[12px] text-black/[0.5] hover:text-gray-500 cursor-pointer">
                        Terminos de venta
                    </div>
                    <div className="text-[12px] text-black/[0.5] hover:text-gray-500 cursor-pointer">
                        Terminos de uso
                    </div>
                    <div className="text-[12px] text-black/[0.5] hover:text-gray-500 cursor-pointer">
                        Politica de Privacidad
                    </div>
                </div>
                {/* RIGHT END */}
            </Wrapper>
        </footer>
    );
};

export default Footer;