import { GithubLogo, InstagramLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="flex justify-center bg-verde-claro-hover">
        <div className="container flex flex-col items-center py-4">
          <p className="text-2xl text-verde-escuro italic font-black uppercase">
            Desconto Expresso
          </p>
          <p className="text-lg">Acesse nossas redes sociais</p>
          <div className="flex gap-4 font-bold">
            <Link to="https://www.instagram.com/descontoexpressoecommerce/">
              {" "}
              <InstagramLogo
                size={48}
                weight="bold"
                className="transition-colors duration-400 ease-in-out hover:text-verde-escuro"
              />
            </Link>
            <Link to="https://github.com/descontoexpresso">
              {" "}
              <GithubLogo
                size={48}
                weight="bold"
                className="transition-colors duration-300 ease-in-out hover:text-verde-escuro"
              />
            </Link>
          </div>
          <div className="h-1"></div>
          <p className="text-lg">&copy; 2024</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
