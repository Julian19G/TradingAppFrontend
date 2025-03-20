import React from "react";
import NoticiaCard from "./NoticiaCard";

type NoticiasListProps = {
  noticias: {
    id: number;
    titulo: string;
    link: string;
    fecha: string;
    clasificacion: string;
  }[];
};

const NoticiasList: React.FC<NoticiasListProps> = ({ noticias }) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4 text-center">📰 Últimas Noticias</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {noticias.slice(-5).map((noticia) => (
          <NoticiaCard key={noticia.id} noticia={noticia} />
        ))}
      </div>
    </section>
  );
};

export default NoticiasList;
