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
    <div className="bg-gray-900 p-6 rounded-xl shadow-xl border border-gray-700 hover:scale-105 transition-transform duration-300">
      <h3 className="text-xl font-semibold text-white hover:text-purple-400 transition-colors duration-300">
        {noticia.titulo}
      </h3>
      <p className="text-sm text-gray-400">{noticia.fecha}</p>
      <a
        href={noticia.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-purple-400 hover:underline mt-2 block transition-colors duration-300"
      >
        Leer más
      </a>
      <span className="text-xs bg-blue-600 px-3 py-1 rounded-lg mt-3 inline-block shadow-md">
        {noticia.clasificacion}
      </span>
    </div>
  );
};

export default NoticiaCard;
