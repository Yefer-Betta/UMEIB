export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  metaDesc: string;
  keywords: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'cuando-acudir-a-consulta-medica-inmediata',
    title: '¿Cuándo acudir a una consulta médica inmediata?',
    excerpt: 'Conoce los síntomas y señales que indican que debes buscar atención médica sin demora. La prevención y la acción temprana pueden marcar la diferencia.',
    content: `
      <p>Muchas veces ignoramos señales que nuestro cuerpo nos envía, atribuyéndolas al estrés, el cansancio o simplemente "algo pasajero". Sin embargo, reconocer cuándo es necesario buscar atención médica inmediata puede marcar una gran diferencia en tu salud y bienestar.</p>

      <h2>Señales de alerta que no debes ignorar</h2>

      <p>Existen síntomas que requieren evaluación médica urgente. Si presentas alguno de los siguientes, no esperes más:</p>

      <ul>
        <li><strong>Dolor en el pecho</strong> — especialmente si se acompaña de dificultad para respirar, sudoración o náuseas.</li>
        <li><strong>Fiebre alta persistente</strong> — temperatura superior a 39°C que no cede con medicamentos.</li>
        <li><strong>Dificultad para respirar</strong> — sensación de falta de aire sin causa aparente.</li>
        <li><strong>Dolor abdominal intenso</strong> — que no mejora con reposo o medicación.</li>
        <li><strong>Mareos o desmayos repentinos</strong> — especialmente si ocurren sin previo aviso.</li>
        <li><strong>Sangrado inusual</strong> — cualquier hemorragia que no se detiene o sangre en la orina/heces.</li>
      </ul>

      <h2>¿Por qué es importante actuar rápido?</h2>

      <p>La atención inmediata no solo trata los síntomas, sino que permite diagnosticar condiciones subyacentes que podrían complicarse si no se abordan a tiempo. Enfermedades como infecciones, problemas cardiovasculares o trastornos metabólicos tienen mejores pronósticos cuando se detectan temprano.</p>

      <h2>¿Qué esperar en una consulta inmediata?</h2>

      <p>En UMEIB, nuestra consulta de atención inmediata está diseñada para ser rápida y efectiva. Realizamos una evaluación completa de tus síntomas, signos vitales y, de ser necesario, exámenes diagnósticos en el mismo lugar. Sin largas esperas ni procesos burocráticos innecesarios.</p>

      <p>No subestimes las señales de tu cuerpo. Ante la duda, consulta. Tu salud es lo más importante.</p>
    `,
    image: '/images/blog-consulta.jpg',
    category: 'Salud General',
    readTime: '4 min',
    date: '12 Jun 2026',
    author: 'Dr. Equipo UMEIB',
    metaDesc: '¿Cuándo debes acudir a una consulta médica inmediata? Conoce los síntomas de alerta y la importancia de la atención temprana en Barquisimeto.',
    keywords: ['consulta médica inmediata', 'urgencias médicas', 'síntomas de alerta', 'atención temprana'],
  },
  {
    id: 2,
    slug: 'beneficios-de-la-medicina-preventiva',
    title: 'Beneficios de la medicina preventiva: cuida tu salud antes de enfermar',
    excerpt: 'La medicina preventiva es la mejor inversión para tu salud a largo plazo. Descubre cómo los chequeos regulares pueden ayudarte a vivir más y mejor.',
    content: `
      <p>La medicina preventiva es el enfoque de la salud que busca evitar la aparición de enfermedades antes de que estas se manifiesten. En lugar de esperar a que surjan síntomas, la prevención actúa de manera proactiva para mantener tu cuerpo en óptimas condiciones.</p>

      <h2>¿Por qué es importante la prevención?</h2>

      <p>Los chequeos médicos regulares permiten detectar factores de riesgo y condiciones incipientes que, si se tratan a tiempo, pueden evitar complicaciones graves. Enfermedades como la hipertensión, la diabetes tipo 2 o ciertos tipos de cáncer tienen tasas de éxito mucho más altas cuando se detectan en etapas tempranas.</p>

      <h2>Principales beneficios</h2>

      <ul>
        <li><strong>Detección temprana</strong> — identifica problemas de salud antes de que se conviertan en enfermedades graves.</li>
        <li><strong>Ahorro económico</strong> — tratar una condición en etapa inicial es significativamente más barato que hacerlo en etapas avanzadas.</li>
        <li><strong>Mejor calidad de vida</strong> — mantenerte saludable te permite disfrutar más de tus actividades diarias y tu familia.</li>
        <li><strong>Mayor esperanza de vida</strong> — las personas que se realizan chequeos regulares viven en promedio más años y con mejor salud.</li>
        <li><strong>Paz mental</strong> — saber que tu salud está en buen estado reduce la ansiedad y el estrés.</li>
      </ul>

      <h2>¿Qué incluye un chequeo preventivo?</h2>

      <p>En UMEIB, nuestros chequeos preventivos incluyen evaluación de signos vitales, análisis de sangre completos, perfil lipídico, glucosa, función renal y hepática, y una consulta médica personalizada donde revisamos tus hábitos de vida y establecemos un plan de salud adaptado a tus necesidades.</p>

      <p>No esperes a estar enfermo para cuidarte. La mejor medicina es la que previene.</p>
    `,
    image: '/images/blog-preventiva.jpg',
    category: 'Prevención',
    readTime: '5 min',
    date: '5 Jun 2026',
    author: 'Dr. Equipo UMEIB',
    metaDesc: 'Beneficios de la medicina preventiva y chequeos regulares. Descubre cómo prevenir enfermedades y mejorar tu calidad de vida en Barquisimeto.',
    keywords: ['medicina preventiva', 'chequeos médicos', 'prevención de enfermedades', 'salud preventiva'],
  },
  {
    id: 3,
    slug: 'que-especialidades-medicas-ofrece-una-clinica-integral',
    title: '¿Qué especialidades médicas ofrece una clínica integral y por qué son importantes?',
    excerpt: 'Una clínica integral reúne múltiples especialidades bajo un mismo techo. Conoce cómo este modelo beneficia tu salud y simplifica tu atención médica.',
    content: `
      <p>Una clínica integral es mucho más que un consultorio médico: es un centro de salud que reúne múltiples especialidades en un solo lugar, facilitando el acceso a una atención coordinada y de calidad. En UMEIB, ofrecemos 16 especialidades para cubrir todas tus necesidades de salud.</p>

      <h2>Ventajas de una clínica integral</h2>

      <p>Contar con múltiples especialidades bajo un mismo techo ofrece beneficios que van más allá de la simple conveniencia:</p>

      <ul>
        <li><strong>Atención coordinada</strong> — tus médicos pueden comunicarse entre sí para ofrecerte un tratamiento integral y coherente.</li>
        <li><strong>Derivaciones inmediatas</strong> — si tu médico general detecta una condición que requiere un especialista, la derivación es inmediata.</li>
        <li><strong>Historial clínico unificado</strong> — toda tu información médica está centralizada, evitando duplicidad de exámenes.</li>
        <li><strong>Ahorro de tiempo</strong> — no necesitas recorrer la ciudad para ver a diferentes especialistas.</li>
        <li><strong>Confianza y continuidad</strong> — construyes una relación de largo plazo con un equipo médico que conoce tu historial.</li>
      </ul>

      <h2>¿Qué especialidades no pueden faltar?</h2>

      <p>Una clínica integral debe ofrecer las especialidades más demandadas por la población. En UMEIB contamos con: Medicina General, Pediatría, Ginecología, Traumatología, Odontología, Psicología, Cirugía General, Otorrinolaringología, entre otras. Cada una juega un rol fundamental en el cuidado de tu salud.</p>

      <h2>El valor de la atención integral</h2>

      <p>La salud no es un conjunto de partes aisladas. Una visión integral permite tratar a la persona en su totalidad: cuerpo y mente. Por eso en UMEIB no solo tratamos síntomas, sino que cuidamos de ti de manera completa.</p>

      <p>Visítanos y descubre cómo la atención integral puede transformar tu experiencia de salud.</p>
    `,
    image: '/images/blog-integral.jpg',
    category: 'Servicios',
    readTime: '4 min',
    date: '29 May 2026',
    author: 'Dr. Equipo UMEIB',
    metaDesc: 'Descubre qué especialidades médicas ofrece una clínica integral y por qué este modelo de atención beneficia tu salud. UMEIB Barquisimeto.',
    keywords: ['clínica integral', 'especialidades médicas', 'atención coordinada', 'centro médico Barquisimeto'],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
