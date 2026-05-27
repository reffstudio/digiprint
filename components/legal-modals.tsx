"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const termsSections = [
  {
    heading: "A. Uso del Sitio Web",
    paragraphs: [
      "El contenido disponible en este sitio tiene fines informativos y comerciales relacionados con los servicios de impresión industrial, producción gráfica y soluciones personalizadas ofrecidas por DigiPrint MX.",
      "El usuario se compromete a utilizar este sitio de manera legal, responsable y respetuosa, evitando cualquier actividad que pueda afectar el funcionamiento del sitio, la reputación de la empresa o los derechos de terceros.",
      "Queda prohibido:",
    ],
    bullets: [
      "Utilizar el sitio para actividades ilícitas o fraudulentas.",
      "Intentar acceder sin autorización a sistemas, servidores o información.",
      "Enviar contenido malicioso, spam o promociones no autorizadas.",
      "Copiar o reutilizar contenido del sitio sin autorización previa.",
    ],
  },
  {
    heading: "B. Solicitudes, Cotizaciones y Pedidos",
    paragraphs: [
      "Las cotizaciones proporcionadas por DigiPrint MX son informativas y podrán variar dependiendo de especificaciones finales, materiales, cantidades, tiempos de producción y disponibilidad.",
      "Todo pedido será considerado confirmado una vez que:",
    ],
    bullets: [
      "El cliente apruebe el diseño o especificaciones finales.",
      "Se confirme el pago correspondiente, parcial o total según aplique.",
      "Se validen archivos y requerimientos de producción.",
    ],
    afterBullets: [
      "El cliente es responsable de revisar cuidadosamente textos, medidas, colores, diseños y especificaciones antes de autorizar producción.",
    ],
  },
  {
    heading: "C. Archivos y Material Proporcionado por el Cliente",
    paragraphs: [
      "El cliente declara contar con los derechos, permisos y autorizaciones necesarias sobre cualquier imagen, logotipo, diseño, marca o material enviado para impresión o producción.",
      "DigiPrint MX no se hace responsable por reclamaciones derivadas de derechos de autor, propiedad intelectual o uso no autorizado de materiales proporcionados por el cliente.",
      "Asimismo, no nos responsabilizamos por errores de impresión derivados de archivos entregados incorrectamente, baja resolución, errores ortográficos o configuraciones no aprobadas para impresión.",
    ],
  },
  {
    heading: "D. Producción, Tiempos de Entrega y Disponibilidad",
    paragraphs: [
      "Los tiempos de producción y entrega son estimados y pueden variar por volumen de trabajo, validaciones, disponibilidad de materiales, causas logísticas o situaciones fuera de nuestro control.",
      "Aunque buscamos cumplir los tiempos acordados, DigiPrint MX no será responsable por retrasos ocasionados por terceros, servicios de mensajería, fallas técnicas o eventos de fuerza mayor.",
    ],
  },
  {
    heading: "E. Pagos y Facturación",
    paragraphs: [
      "Todos los servicios y productos están sujetos a pago conforme a las condiciones acordadas con el cliente.",
      "Aceptamos distintos métodos de pago autorizados. En ciertos proyectos podrá requerirse anticipo antes de iniciar producción.",
      "Las facturas deberán solicitarse dentro del periodo fiscal correspondiente proporcionando la información correcta y completa.",
    ],
  },
  {
    heading: "F. Privacidad y Protección de Datos",
    paragraphs: [
      "La información proporcionada por los usuarios será tratada conforme a nuestra Política de Privacidad.",
      "Implementamos medidas razonables de seguridad para proteger la información personal y comercial de nuestros clientes; sin embargo, ningún sistema digital es completamente seguro.",
    ],
  },
  {
    heading: "G. Propiedad Intelectual",
    paragraphs: [
      "Todo el contenido de este sitio web, incluyendo textos, imágenes, logotipos, gráficos, diseños, elementos visuales y material digital, es propiedad de DigiPrint MX o se utiliza bajo autorización correspondiente.",
      "Queda prohibida su reproducción, distribución, modificación o uso sin autorización previa por escrito.",
    ],
  },
  {
    heading: "H. Limitación de Responsabilidad",
    paragraphs: [
      "DigiPrint MX no será responsable por daños directos o indirectos derivados del uso del sitio web, interrupciones del servicio, errores técnicos o decisiones tomadas con base en la información publicada en el sitio.",
    ],
  },
  {
    heading: "I. Modificaciones",
    paragraphs: [
      "Nos reservamos el derecho de actualizar o modificar estos Términos y Condiciones en cualquier momento y sin previo aviso. Las modificaciones entrarán en vigor una vez publicadas en este sitio web.",
    ],
  },
  {
    heading: "J. Contacto",
    paragraphs: [
      "Para cualquier duda relacionada con estos Términos y Condiciones, puede comunicarse con nosotros a través de:",
    ],
    link: "https://www.digiprint.mx/",
  },
]

const privacySections = [
  {
    heading: "Información que recopilamos",
    paragraphs: [
      "Podemos recopilar información personal que el usuario proporciona de manera voluntaria cuando:",
    ],
    bullets: [
      "Completa formularios de contacto.",
      "Solicita cotizaciones o información sobre nuestros servicios.",
      "Envía archivos para impresión o producción.",
      "Se comunica con nosotros vía correo electrónico, teléfono o WhatsApp.",
      "Solicita atención comercial o soporte.",
    ],
    afterBullets: ["La información recopilada puede incluir:"],
    extraBullets: [
      "Nombre completo",
      "Nombre de empresa o negocio",
      "Correo electrónico",
      "Número telefónico",
      "Dirección de envío o facturación",
      "Información relacionada con proyectos de impresión, diseños o archivos proporcionados por el cliente",
    ],
  },
  {
    heading: "Uso de la información",
    paragraphs: ["La información recopilada podrá utilizarse para:"],
    bullets: [
      "Responder solicitudes de información o cotizaciones.",
      "Dar seguimiento a pedidos y proyectos.",
      "Proporcionar atención al cliente.",
      "Enviar información relacionada con nuestros productos y servicios.",
      "Mejorar nuestro sitio web, procesos y experiencia del usuario.",
      "Cumplir con obligaciones legales y fiscales aplicables.",
    ],
  },
  {
    heading: "Protección de la información",
    paragraphs: [
      "Implementamos medidas técnicas, administrativas y organizacionales razonables para proteger la información personal contra acceso no autorizado, pérdida, alteración o divulgación indebida.",
      "Sin embargo, ningún método de transmisión electrónica o almacenamiento digital es completamente seguro, por lo que no podemos garantizar seguridad absoluta.",
    ],
  },
  {
    heading: "Compartición de información",
    paragraphs: [
      "En DigiPrint MX no vendemos, rentamos ni compartimos información personal con terceros para fines comerciales.",
      "La información únicamente podrá compartirse con proveedores o terceros de confianza que participen en procesos necesarios para la operación del sitio web, procesamiento de pedidos, servicios tecnológicos o logísticos, bajo acuerdos de confidencialidad y protección de datos.",
    ],
  },
  {
    heading: "Archivos y contenido proporcionado por el cliente",
    paragraphs: [
      "Los archivos, diseños, imágenes o materiales enviados por los clientes serán utilizados exclusivamente para fines relacionados con la producción, cotización o desarrollo de los servicios solicitados.",
      "El cliente es responsable de contar con los derechos, permisos o licencias correspondientes sobre el contenido proporcionado.",
    ],
  },
  {
    heading: "Derechos del usuario",
    paragraphs: ["El usuario tiene derecho a:"],
    bullets: [
      "Acceder a sus datos personales.",
      "Solicitar corrección o actualización de información.",
      "Solicitar la eliminación de sus datos cuando sea legalmente procedente.",
      "Limitar el uso o divulgación de su información.",
    ],
    afterBullets: [
      "Para ejercer cualquiera de estos derechos, puede contactarnos a través de los medios publicados en nuestro sitio web.",
    ],
  },
  {
    heading: "Enlaces externos",
    paragraphs: [
      "Nuestro sitio web puede contener enlaces a sitios externos de terceros. No somos responsables por las políticas de privacidad, contenido o prácticas de dichos sitios.",
    ],
  },
  {
    heading: "Cambios a esta política",
    paragraphs: [
      "Nos reservamos el derecho de modificar o actualizar esta Política de Privacidad en cualquier momento. Los cambios serán publicados en esta misma sección del sitio web.",
    ],
  },
  {
    heading: "Contacto",
    paragraphs: [
      "Si tienes preguntas relacionadas con esta Política de Privacidad o el tratamiento de tus datos personales, puedes comunicarte con nosotros a través de:",
    ],
    link: "https://www.digiprint.mx/",
  },
]

type Section = {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
  afterBullets?: string[]
  extraBullets?: string[]
  link?: string
}

function LegalSection({ section }: { section: Section }) {
  return (
    <section className="space-y-3">
      <h3 className="text-base font-semibold text-[#000066]">{section.heading}</h3>
      {section.paragraphs?.map((paragraph, i) => (
        <p key={`p-${i}`} className="text-sm leading-relaxed text-foreground/80">
          {paragraph}
        </p>
      ))}
      {section.bullets && section.bullets.length > 0 && (
        <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground/80">
          {section.bullets.map((bullet, i) => (
            <li key={`b-${i}`}>{bullet}</li>
          ))}
        </ul>
      )}
      {section.afterBullets?.map((paragraph, i) => (
        <p key={`ap-${i}`} className="text-sm leading-relaxed text-foreground/80">
          {paragraph}
        </p>
      ))}
      {section.extraBullets && section.extraBullets.length > 0 && (
        <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground/80">
          {section.extraBullets.map((bullet, i) => (
            <li key={`eb-${i}`}>{bullet}</li>
          ))}
        </ul>
      )}
      {section.link && (
        <a
          href={section.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm font-medium text-[#000066] hover:text-[#ff0000] transition-colors break-all"
        >
          {section.link}
        </a>
      )}
    </section>
  )
}

const linkClass =
  "text-xs uppercase tracking-[0.15em] text-[#000066]/60 hover:text-[#000066] transition-colors cursor-pointer"

export function LegalLinks() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
      <Dialog>
        <DialogTrigger className={linkClass}>Términos y Condiciones</DialogTrigger>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-hidden flex flex-col p-0">
          <DialogHeader className="px-6 pt-6 pb-3 border-b">
            <DialogTitle className="text-xl text-[#000066]">Términos y Condiciones</DialogTitle>
          </DialogHeader>
          <div className="overflow-y-auto px-6 py-4 space-y-5">
            <p className="text-sm leading-relaxed text-foreground/80">
              Bienvenido al sitio web de DigiPrint MX. Al acceder y utilizar este sitio web, así
              como nuestros servicios, el usuario acepta los siguientes Términos y Condiciones. Si
              no está de acuerdo con alguno de ellos, le recomendamos no utilizar este sitio.
            </p>
            {termsSections.map((section) => (
              <LegalSection key={section.heading} section={section} />
            ))}
          </div>
        </DialogContent>
      </Dialog>

      <span className="text-xs text-[#000066]/30">·</span>

      <Dialog>
        <DialogTrigger className={linkClass}>Política de Privacidad</DialogTrigger>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-hidden flex flex-col p-0">
          <DialogHeader className="px-6 pt-6 pb-3 border-b">
            <DialogTitle className="text-xl text-[#000066]">Política de Privacidad</DialogTitle>
          </DialogHeader>
          <div className="overflow-y-auto px-6 py-4 space-y-5">
            <p className="text-sm leading-relaxed text-foreground/80">
              En DigiPrint MX, valoramos y protegemos la privacidad de nuestros clientes,
              visitantes y usuarios. Esta Política de Privacidad explica cómo recopilamos,
              utilizamos, almacenamos y protegemos la información que nos proporcionas al utilizar
              nuestro sitio web o al contactarnos para solicitar información sobre nuestros
              productos y servicios de impresión industrial.
            </p>
            {privacySections.map((section) => (
              <LegalSection key={section.heading} section={section} />
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
