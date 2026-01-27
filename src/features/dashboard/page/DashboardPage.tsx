import { useState } from 'react'
import {
  CModal,
  CModalHeader,
  CModalBody,
  CFooter,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilEducation,
  cilPeople,
  cilInstitution,
  cilChartLine,
  cilCheckCircle,
  cilLocationPin,
  cilEnvelopeClosed,
  cilFile,
  cilCloudDownload,
  cilLightbulb,
  cilBadge,
  cilClock,
  cilUser,
  cilCalendar,
} from '@coreui/icons'

type CoreUIIcon = typeof cilEducation

// --- INTERFAZ DE DATOS ---
interface IndicadorProps {
  id: string
  nombre: string
  estado: 'Activo' | 'En Revisión' | 'Proyectado'
  icon: CoreUIIcon
  color: string
  bg: string
  descripcion: string
  metodologia: string
  periodicidad: string
  fuente: string
}

// --- 1. DATA: INDICADORES ESTUDIANTILES (MIGI-ESPOCH) ---
const indicadoresEstudiantes: IndicadorProps[] = [
  {
    id: 'tasa-titulacion',
    nombre: 'Tasa de Titulación',
    estado: 'Activo',
    icon: cilEducation,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    descripcion: 'Porcentaje de estudiantes de una cohorte de ingreso que obtienen su título profesional dentro del tiempo de duración de la carrera más un año de gracia.',
    metodologia: 'Seguimiento a cohortes (ingresantes en periodo T) verificando su estado de titulación en T+Duración+1 año.',
    periodicidad: 'El siguiente indicador tienen como periodicidad el semestre en el que se realiza la evaluación.',
    fuente: 'Sistema Académico YANKAY'
  },
  {
    id: 'tasa-retencion',
    nombre: 'Tasa de Retención',
    estado: 'Activo',
    icon: cilCheckCircle,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    descripcion: 'Proporción de estudiantes matriculados en un periodo académico que continúan sus estudios en el periodo inmediatamente siguiente.',
    metodologia: 'Cruce de bases de datos de matriculados entre el periodo actual (t) y el periodo anterior (t-1), excluyendo graduados.',
    periodicidad: 'El siguiente indicador tienen como periodicidad el semestre en el que se realiza la evaluación.',
    fuente: 'Sistema Académico YANKAY'
  },
  {
    id: 'tasa-desercion',
    nombre: 'Tasa de Deserción',
    estado: 'Activo',
    icon: cilChartLine,
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    descripcion: 'Porcentaje de estudiantes que no registran matrícula por dos periodos académicos consecutivos y no se han graduado.',
    metodologia: 'Identificación de estudiantes ausentes en la matrícula actual que no poseen registro de título ni suspensión temporal aprobada.',
    periodicidad: 'El siguiente indicador tienen como periodicidad el semestre en el que se realiza la evaluación.',
    fuente: 'Sistema Académico YANKAY'
  },
]

// --- 2. DATA: PERSONAL ACADÉMICO (3 CARDS ALINEADAS) ---
const indicadoresPersonal: IndicadorProps[] = [
  { 
    id: 'docentes-phd',
    nombre: 'Docentes con PhD', 
    estado: 'Activo',
    icon: cilBadge, // Icono de medalla/título
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    descripcion: 'Porcentaje de la planta docente (titular y no titular) que posee grado académico de Doctor (PhD) o equivalente reconocido por SENESCYT.',
    metodologia: 'Verificación de títulos registrados en SENESCYT y validados por Talento Humano.',
    periodicidad: 'El siguiente indicador tienen como periodicidad el semestre en el que se realiza la evaluación.',
    fuente: 'Dirección de Talento Humano/SENESCYT'
  },
  { 
    id: 'tiempo-completo',
    nombre: 'Tiempo Completo', 
    estado: 'Activo',
    icon: cilClock, // Icono de tiempo
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    descripcion: 'Proporción de docentes con dedicación exclusiva (40 horas semanales) destinados a docencia, investigación y gestión.',
    metodologia: 'Cálculo basado en el distributivo de trabajo docente aprobado por Consejo de Facultad.',
    periodicidad: 'El siguiente indicador tienen como periodicidad el semestre en el que se realiza la evaluación.',
    fuente: 'Dirección de Talento Humano'
  },
  { 
    id: 'docentes-titulares',
    nombre: 'Docentes Titulares', 
    estado: 'Activo',
    icon: cilUser, // Icono de usuario/personal
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    descripcion: 'Porcentaje de profesores que han ingresado a la carrera docente mediante concurso público de méritos y oposición.',
    metodologia: 'Conteo de personal con nombramiento definitivo según escalafón (Auxiliar, Agregado, Principal).',
    periodicidad: 'El siguiente indicador tienen como periodicidad el semestre en el que se realiza la evaluación.',
    fuente: 'Dirección de Talento Humano'
  },
]

// --- 3. DATA: RECURSOS ---
const recursosData = [
    { titulo: 'Manual de Indicadores', subtitulo: 'MIGI-ESPOCH PDF', icon: cilCloudDownload, url: 'https://www.espoch.edu.ec/wp-content/uploads/2025/05/Manual-de-Indicadores-Institucionales.pdf' },
    { titulo: 'Reglamento de Régimen', subtitulo: 'Normativa Académica', icon: cilFile, url: 'https://www.espoch.edu.ec/wp-content/uploads/2025/02/reglamento_de_rEgimen_acadEmico_codificado_signed.pdf' },
]

const VisualResumePage = () => {
  const [visible, setVisible] = useState(false)
  const [activeIndicador, setActiveIndicador] = useState<IndicadorProps | null>(null)

  const handleCardClick = (item: IndicadorProps) => {
    setActiveIndicador(item)
    setVisible(true)
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 pb-12">
      
      {/* --- HEADER BANNER --- */}
      <div className="h-60 w-full relative bg-gray-900 overflow-hidden rounded-t-xl">
        <div className="absolute inset-0 bg-black/40 z-10 "></div>
        <img 
          src="https://facultadciencias.espoch.edu.ec/img/slider/espoch-principal.jpeg" 
          alt="Espoch Banner" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-20"></div>
      </div>

      {/* --- CONTENEDOR PRINCIPAL --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-10 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* === COLUMNA IZQUIERDA: SIDEBAR / BIO === */}
          <div className="lg:col-span-4 space-y-10">
            
            {/* Tarjeta de Perfil Institucional */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mt-19.5">
              <div className="p-8 text-center lg:text-left">
                <div className="w-24 h-24 mx-auto lg:mx-0 bg-white border-4 border-white rounded-2xl flex items-center justify-center mb-4 shadow-md -mt-12 relative z-20">
                    <div className="bg-[#9d1c2b] w-full h-full rounded-xl flex items-center justify-center">
                       <CIcon icon={cilInstitution} size="3xl" className="text-white" />
                    </div>
                </div>
                
                <h1 className="text-lg font-bold text-gray-900 leading-tight mb-2">
                    Analytics-ESPOCH
                </h1>
                <p className="text-[#9d1c2b] font-medium text-sm mb-4 uppercase tracking-wide">
                    BI-Data
                </p>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-6 border-b border-gray-100 pb-6">
                  Plataforma centralizada para la gestión, monitoreo y evaluación de los indicadores de calidad educativa, alineados al Plan Estratégico de Desarrollo Institucional (PEDI).
                </p>

                {/* Info Contacto */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CIcon icon={cilLocationPin} className="text-[#9d1c2b]" />
                    <span>Riobamba, Ecuador</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CIcon icon={cilEnvelopeClosed} className="text-[#9d1c2b]" />
                    <span>bi.data@espoch.edu.ec</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
               <h3 className="font-bold text-gray-800 mb-4 text-xs uppercase tracking-wide">
                   Documentacion 
               </h3>
               <div className="space-y-3">
                  {recursosData.map((recurso, idx) => (
                    <a
                      key={idx}
                      href={recurso.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer border border-transparent hover:border-gray-100 group">
                        <div className="bg-gray-100 p-2 rounded-md text-gray-600 group-hover:text-[#9d1c2b] group-hover:bg-white transition-colors">
                          <CIcon icon={recurso.icon} size="lg" />
                        </div>

                        <div>
                          <p className="text-sm font-bold text-gray-800">
                            {recurso.titulo}
                          </p>
                          <p className="text-xs text-gray-500 ">
                            {recurso.subtitulo}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
            </div>

            {/* Estado */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-bold text-gray-800 mb-4 text-xs uppercase tracking-wide">
                Indicadores
              </h3>

              <div className="flex justify-between text-sm">
                <div>
                  <p className="text-lg font-bold text-gray-800">6</p>
                  <p className="text-lg text-gray-500">Activos</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-800">3</p>
                  <p className="text-lg text-gray-500">Proyectados</p>
                </div>
              </div>
            </div>
          </div>

          {/* === COLUMNA DERECHA: DASHBOARD === */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* SECCIÓN 1: ESTUDIANTES (3 CARDS) */}
            <section>
              <div className="flex items-center justify-between mb-4 mt-2">
                <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                    <CIcon icon={cilEducation} className="text-[#9d1c2b]" />
                    Indicadores Estudiantiles
                </h2>
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                    Gestión Académica
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {indicadoresEstudiantes.map((item) => (
                  <div 
                    key={item.id}
                    onClick={() => handleCardClick(item)}
                    className="h-full group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-3 rounded-xl ${item.bg} ${item.color}`}>
                                <CIcon icon={item.icon} size="xl" />
                            </div>
                        </div>
                        
                        <h3 className="text-gray-900 font-bold text-lg mb-2 leading-tight">
                            {item.nombre}
                        </h3>
                        <p className="text-gray-500 text-xs line-clamp-3 mb-4">
                            {item.descripcion}
                        </p>
                    </div>

                    <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                        <span className="flex items-center gap-1 text-xs font-medium text-emerald-600">
                            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                            {item.estado}
                        </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECCIÓN 2: PERSONAL DOCENTE (AHORA 3 CARDS IGUALES) */}
            <section>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                        <CIcon icon={cilPeople} className="text-[#9d1c2b]" />
                        Personal Académico
                    </h2>
                    <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                        Talento Humano
                    </span>
                </div>

                {/* Grid modificado a md:grid-cols-3 para alinearse con estudiantes */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {indicadoresPersonal.map((item) => (
                        <div 
                            key={item.id}
                            onClick={() => handleCardClick(item)}
                            className="h-full group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`p-3 rounded-xl ${item.bg} ${item.color}`}>
                                        <CIcon icon={item.icon} size="xl" />
                                    </div>
                                </div>
                                
                                <h3 className="text-gray-900 font-bold text-lg mb-2 leading-tight">
                                    {item.nombre}
                                </h3>
                                <p className="text-gray-500 text-xs line-clamp-3 mb-4">
                                    {item.descripcion}
                                </p>
                            </div>

                            <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                                <span className="flex items-center gap-1 text-xs font-medium text-emerald-600">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                    {item.estado}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECCIÓN 3: ROADMAP */}
            <section className="bg-gray-50 rounded-2xl border border-gray-200 border-dashed p-6">
                 <div className="flex items-center gap-2 mb-4">
                    <CIcon icon={cilLightbulb} className="text-yellow-600" />
                    <h2 className="text-lg font-bold text-gray-700">Futuros Indicadores</h2>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { nombre: 'Afinidad personal académico', fecha: '2026', prioridad: 'Alta' },
                      { nombre: 'Herramientas pedagógicas', fecha: '2026', prioridad: 'Media' },
                      { nombre: 'Ambientes de aprendizaje', fecha: '2027', prioridad: 'Baja' }
                    ].map((futuro, idx) => (
                        <div key={idx} className="bg-white p-4 rounded-xl border border-gray-100 flex flex-col gap-2">
                            <div className="flex justify-between items-start">
                                <span className="text-xs font-bold text-gray-400">Proyección</span>
                                <span className={`text-[10px] px-1 py-0.5 rounded-full border ${
                                    futuro.prioridad === 'Alta' ? 'bg-red-50 text-red-600 border-red-100' :
                                    futuro.prioridad === 'Media' ? 'bg-yellow-50 text-yellow-600 border-yellow-100' :
                                    'bg-green-50 text-green-600 border-green-100'
                                }`}>
                                    Prioridad {futuro.prioridad}
                                </span>
                            </div>
                            <h5 className="font-semibold text-gray-800 text-sm">{futuro.nombre}</h5>
                            <p className="text-xs text-gray-500 mt-auto pt-2 border-t border-gray-50">
                                Fecha estimada: {futuro.fecha}
                            </p>
                        </div>
                    ))}
                 </div>
            </section>
          </div>
        </div>
        <div className=" mb-[-60px]">
          <CFooter className="mt-10 bg-white border-t border-gray-200">
            <div className="flex text-sm text-gray-600">
              <span>© 2026 BI-Data</span>
            </div>
          </CFooter>
        </div>
      </div>

      {/* --- MODAL DETALLES --- */}
      <CModal alignment="center" visible={visible} onClose={() => setVisible(false)} size="lg">
        <CModalHeader className="border-0 pb-0 pt-6 px-8 flex justify-between items-center">
            <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${activeIndicador?.bg}`}>
                   {activeIndicador?.icon && <CIcon icon={activeIndicador.icon} className={activeIndicador.color} size="xl"/>}
                </div>
                <div>
                   <h5 className="text-xl font-bold text-gray-900 m-0">{activeIndicador?.nombre}</h5>
                   <p className="text-xs text-gray-500 uppercase tracking-wide">Ficha Técnica</p>
                </div>
            </div>
        </CModalHeader>
        
        <CModalBody className="p-8 space-y-6">
            <div className="bg-white p-3 rounded-xl text-sm text-gray-700 leading-relaxed border border-gray-100 shadow-inner">
               <span className="font-bold text-gray-900">Definición: </span>
               {activeIndicador?.descripcion}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="border border-gray-100 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                      <CIcon icon={cilCalendar} size="sm"/>
                      <label className="text-xs font-bold text-gray-400 uppercase">Periodicidad</label>
                  </div>
                  <p className="text-xs text-gray-600">
                    {activeIndicador?.periodicidad}
                  </p>
               </div>

               <div className="border border-gray-100 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                      <CIcon icon={cilFile} size="sm"/>
                      <label className="text-xs font-bold text-gray-400 uppercase">Metodología</label>
                  </div>
                  <p className="text-xs text-gray-600">
                     {activeIndicador?.metodologia}
                  </p>
               </div>
            </div>

            <div className="bg-white border-t  border-gray-200 flex justify-between items-center rounded-b-lg">
                <div className="text-xs text-gray-500">
                    <span className="block font-bold text-gray-700 mt-2">Fuente:</span>
                    {activeIndicador?.fuente}
                </div>
            </div>
        </CModalBody>
      </CModal>
    </div>
  )
}

export default VisualResumePage