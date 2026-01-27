
import CIcon from "@coreui/icons-react";
import { CFooter } from "@coreui/react";
import { 
  cilCode, 
  cilCheckCircle,
} from "@coreui/icons";

const developers = [
  {
    nombre: "Colaborador 1",
    rol: "Tesista / Desarrollador",
    descripcion: "Estudiante de la carrara software.",
    initials: "KS"
  },
  {
    nombre: "Colaborador 2",
    rol: "Tesista / Desarrollador",
    descripcion: "Estudiante de la carrara software.",
    initials: "LM"
  },
];

const NosotrosPage = () => {
  return (
    <div className="min-h-screen bg-white p-6 md:p-12">
      
      {/* --- ENCABEZADO DE LA PÁGINA --- */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
            Equipo de Desarrollo e Investigación
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Plataforma diseñada para la gestión de indicadores académicos, 
            bajo los estándares de calidad de la <strong>ESPOCH</strong>.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        
        {/* --- SECCIÓN 1: GRUPO DE INVESTIGACIÓN (BI-DATA) --- */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-10 relative overflow-hidden">
            {/* Decoración de fondo */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-gray-50 rounded-full blur-3xl opacity-50"></div>

            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                
                {/* --- ÁREA DEL LOGO --- */}

                <div className="flex-shrink-0 w-40 h-40 flex items-center justify-center">
                  <img
                    src="https://bi-data.espoch.edu.ec/web/image/968-49d9a668/Untitled.png"
                    alt="Grupo BI-DATA"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        Grupo de Investigación Bi-Data
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        Este sistema es el resultado de la investigación aplicada en <strong>Inteligencia de Negocios y Ciencia de Datos</strong>. 
                        El grupo Bi-Data provee de las herramientas e infraestructura necesarias para garantizar el cumplimiento del proyecto.
                    </p>
                    
                    {/* Badges de tecnologías/Metodologías */}
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-lg border border-gray-200">
                            Business Intelligence
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-lg border border-gray-200">
                            Data Warehousing
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-lg border border-gray-200">
                            Software Académico
                        </span>
                    </div>
                </div>
            </div>
        </div>

        {/* --- SECCIÓN 2: DESARROLLADORES (TESISTAS) --- */}
        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <CIcon icon={cilCode} className="text-[#9d1c2b]" />
            Equipo de Desarrollo (Tesistas)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {developers.map((dev, index) => (
                <div 
                    key={index} 
                    className="group bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-5 items-start"
                >
                    {/* Avatar / Iniciales */}
                    <div className="w-14 h-14 rounded-full bg-[#9d1c2b] flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-110 transition-transform flex-shrink-0">
                        {dev.initials}
                        {/* O puedes usar <CIcon icon={cilUser} /> si prefieres icono */}
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-gray-900">{dev.nombre}</h4>
                        <span className="text-xs font-bold text-[#9d1c2b] uppercase tracking-wide mb-2 block">
                            {dev.rol}
                        </span>
                        <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                            {dev.descripcion}
                        </p>
                        
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                            <CIcon icon={cilCheckCircle} size="sm" className="text-green-500" />
                            <span>Carrera de Ingeniería de Software</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* --- FOOTER SIMPLE --- */}
        <div className=" mb-[-60px]">
          <CFooter className="mt-10 bg-white border-t border-gray-200">
            <div className="flex text-sm text-gray-600">
              <span>© 2026 BI-Data</span>
            </div>
          </CFooter>
        </div>

      </div>
    </div>
  );
};

export default NosotrosPage;