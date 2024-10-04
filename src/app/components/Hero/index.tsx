import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex items-center justify-center flex-col py-8 px-8 max-w-[1400px] mx-auto">
        <div className="container flex items-center lg:flex-row flex-col justify-between xl:min-h-[680px]">
            {/* Left Column */}
            <div className="flex flex-col justify-center py-14 md:py-0 text-center md:text-left space-y-6 lg:max-w-[580px]">
                <h1 className="text-5xl lg:text-6xl font-bold">
                    Somos<br />
                    <span className="text-red-400">Kilu💗</span>
                </h1>
                <h2 className="text-2xl tracking-wide">
                    ¡Todo nuestro catalogo desde la comodidad de tu casa!
                </h2>
                <p className=" text-lg text-amber-700 mt-4">
                    Además de resaltar la belleza, Kilu promueve el maquillaje como una forma de expresión personal, 
                    ofreciendo productos que se adaptan a diferentes estilos y necesidades. 
                
                </p>
                <button className="bg-red-300 text-white px-6 py-2 rounded-lg">¡Echar un vistazo ahora!</button>
            </div>

            {/* Right Column */}
            <article className="flex items-center justify-center">
                <Image
                src={"/icono.png"}
                alt="Logo pagina"
                width={550}
                height={550}
                className="w-[350px] md:w-[550px] drop-shadow-2xl brightness-105"
                />
            </article>
        </div>
    </section>
  )
}

export default Hero