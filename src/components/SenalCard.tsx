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
      <h2 className="text-2xl font-semibold mb-4 text-center">📊 Última Señal</h2>
      {senal ? (
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Señal: {senal.signal}</h3>
          <p className="text-sm">Fecha: {senal.timestamp}</p>
          <p className="text-gray-400">Precio de cierre: {senal.close}</p>
        </div>
      ) : (
        <p className="text-gray-400">No hay señales disponibles.</p>
      )}
    </section>
  );
};

export default SenalCard;
