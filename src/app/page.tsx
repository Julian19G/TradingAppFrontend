"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const TradingBackground = dynamic(() => import("../components/TradingBackground"), { ssr: false });
const NoticiasList = dynamic(() => import("../components/NoticiasList"), { ssr: false });
const SenalCard = dynamic(() => import("../components/SenalCard"), { ssr: false });

type Noticia = {
  id: number;
  titulo: string;
  link: string;
  fecha: string;
  clasificacion: string;
};

type Senal = {
  id: number;
  signal: string;
  close: number;
  timestamp: string;
};

export default function TradingBot() {
  const [noticias, setNoticias] = useState<Noticia[] | null>(null);
  const [senales, setSenales] = useState<Senal[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const [showElements, setShowElements] = useState(false); // Estado para animación

  useEffect(() => {
    setIsClient(true);

    const fetchData = async () => {
      try {
        const [noticiasRes, senalesRes] = await Promise.all([
          fetch("http://127.0.0.1:8000/noticias"),
          fetch("http://127.0.0.1:8000/senales"),
        ]);

        if (!noticiasRes.ok || !senalesRes.ok) throw new Error("Error al obtener los datos");

        const noticiasData = await noticiasRes.json();
        const senalesData = await senalesRes.json();

        setNoticias(noticiasData);
        setSenales(senalesData);
      } catch (error) {
        console.error("❌ Error al obtener datos:", error);
      } finally {
        setLoading(false);
        setTimeout(() => setShowElements(true), 300); // Retraso para animación
      }
    };

    fetchData();
  }, []);

  if (!isClient) return null;

  return (
    <div className="relative min-h-screen bg-[#0a0f1e] text-white p-8">
      <TradingBackground />

      {/* Título con animación */}
      <div
        className={`absolute top-6 left-1/2 transform -translate-x-1/2 z-50 bg-black/50 px-6 py-2 rounded-xl shadow-lg backdrop-blur-md transition-all duration-700 delay-100 ${
          showElements ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
        }`}
      >
        <h1 className="text-4xl font-bold text-center text-white hover:text-purple-500">
          TradingBot
        </h1>
      </div>

      {/* Contenedor de las cards con animación */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-1 gap-6 mt-20">
        {/* Card de Noticias */}
        <div
          className={`bg-[#121826] p-6 rounded-2xl shadow-lg border border-gray-700 transition-all duration-700 ${
            showElements ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {loading ? (
            <p className="text-gray-400">Cargando datos...</p>
          ) : noticias && noticias.length > 0 ? (
            <NoticiasList noticias={noticias} />
          ) : (
            <p className="text-gray-500">No hay noticias disponibles.</p>
          )}
        </div>

        {/* Card de Señales con delay adicional */}
        <div
          className={`bg-[#121826] p-6 rounded-2xl shadow-lg border border-gray-700 transition-all duration-700 delay-200 ${
            showElements ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {loading ? (
            <p className="text-gray-400">Cargando datos...</p>
          ) : senales && senales.length > 0 ? (
            <SenalCard senal={senales[senales.length - 1]} />
          ) : (
            <p className="text-gray-500">No hay señales disponibles.</p>
          )}
        </div>
      </div>
    </div>
  );
}

