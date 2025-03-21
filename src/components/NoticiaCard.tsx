import React from "react";

type NoticiaProps = {
  noticia: {
    id: number;
    titulo: string;
    link: string;
    fecha: string;
    clasificacion: string;
  };
};

const NoticiaCard: React.FC<NoticiaProps> = ({ noticia }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-xl border border-gray-700 hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center">
      <h3 className="text-xl font-semibold text-white hover:text-purple-400 transition-colors duration-300">
        {noticia.titulo}
      </h3>
      <p className="text-sm text-gray-400">{noticia.fecha}</p>
      
      <button
        onClick={() => window.open(noticia.link, "_blank")}
        className="mt-3 bg-blue-600 hover:bg-purple-600 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 shadow-md"
      >
        Leer más
      </button>

      {/* Espacio y centrado para la clasificación */}
      <div className="mt-4">
        <span className="text-xs bg-blue-600 px-3 py-1 rounded-lg shadow-md text-white">
          Tipo de noticia: {noticia.clasificacion}
        </span>
      </div>
    </div>
  );
};

export default NoticiaCard;
