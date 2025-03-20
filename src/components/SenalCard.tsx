import React from "react";

type SenalProps = {
  senal: {
    signal: string;
    close: number;
    timestamp: string;
  } | null;
};

const SenalCard: React.FC<SenalProps> = ({ senal }) => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4 text-center text-white">📊 Última Señal</h2>
      {senal ? (
        <div className="bg-gray-900 p-6 rounded-xl shadow-xl border border-gray-700 hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold text-white hover:text-purple-400 transition-colors duration-300">
            Señal: {senal.signal}
          </h3>
          <p className="text-sm text-gray-400">Fecha: {senal.timestamp}</p>
          <p className="text-lg font-medium text-gray-300 hover:text-purple-400 transition-colors duration-300">
            Precio de cierre: ${senal.close}
          </p>
        </div>
      ) : (
        <p className="text-gray-400 text-center">No hay señales disponibles.</p>
      )}
    </section>
  );
};

export default SenalCard;
