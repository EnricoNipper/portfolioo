
import { useTranslations } from 'next-intl';
import Image from 'next/image';


const Portf = () => {
    const t = useTranslations("Portf");
    return(
        <section className="py-10"> {/* Seção de portfólio */}
          <div>
            <h3 className='text-center'> 
              <span className="text-3xl  font-semibold text-[50px]   text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 ">{t("h1")}</span></h3> {/* Título da seção */}
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            {t("p1")}
            <span className="text-teal-500"> {t("span1")} </span>
             {t("p2")}
              <span className="text-teal-500"> {t("span2")} </span>
            </p> {/* Descrição do portfólio */}
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            {t("p3")}
            </p> {/* Descrição do portfólio */}
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap"> {/* Container para os projetos do portfólio */}
            <div className="basis-1/3 flex-1 ">
           
             <Image
                className="rounded-lg object-cover"
                src="/web1.png"
                alt="Project 1"
                width="300"
                height="200"
                layout="responsive"
               />
                </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width="300"
                height="200"
                layout="responsive"
                src="/web2.png"
                alt="Project 1"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width="300"
                height="200"
                layout="responsive"
                src="/web3.png"
                alt="Project 1"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width="300"
                height="200"
                layout="responsive"
                src="/web4.png"
                alt="Project 1"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width="300"
                height="200"
                layout="responsive"
                src="/web5.png"
                alt="Project 1"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width="300"
                height="200"
                layout="responsive"
                src="/web6.png"
                alt="Project 1"
              />
            
            
           
            </div>
            
          </div>
          
        </section>
    );
};

export default Portf;