
import "./Destaques.css";
import sideDown from "../../../assets/sidedown.png";
import sideTop from "../../../assets/sidetop.png";
import { useNavigate } from "react-router-dom";

function Destaques() {
  const navigate = useNavigate();

  const goToProdutos = () => {
    navigate("/produtos");
  };

  return (
    <div className="main  flex gap-8   items-center justify-center ">
      <div className="square bg-[url('./assets/produtos-destaque.jpg')] bg-contain bg-center bg-no-repeat bg-cover  flex justify-center items-center  flex-col">
        <span className=" main-imagem  font-semibold text-center">
          Inovando para tornar o mercado mais justo e acessível a todos!
        </span>
        <button
          className="bg-transparent  btn  p-4 px-5 mt-7 "
          onClick={goToProdutos}
        >
          Veja mais
        </button>
      </div>
      <div className=" aa flex  flex-col gap-8">
        <div
          id="top"
          className="side top   rounded-xl  flex justify-center items-center  overflow-hidden "
        >
          <span className=" -mr-6 font-semibold text-center">
            Laticínios para a sua jornada de saúde e bem-estar!
          </span>
          <img src={sideTop} alt="" />
        </div>
        <div className="side  rounded-xl  flex justify-center items-center overflow-hidden ">
          <span className="-mr-6 font-semibold text-center">
            Todos legumes e verduras fresco para todos{" "}
          </span>
          <img src={sideDown} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Destaques;
