export interface Doctor {
  id: number;
  name: string;
  photo: string;
  bio: string;
  specialties: string[];
  contact: {
    phone?: string;
    whatsapp?: string;
    email?: string;
  };
}

export const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Francisco Camacho",
    photo: "/images/doctors/dr-francisco-camacho.png",
    bio: `Tu bienestar, nuestra prioridad absoluta. 🤝✨ En UMEIB, te presentamos al Dr. Francisco Camacho, un especialista de primer nivel que combina la precisión de la Cirugía General con el arte de la Cirugía Plástica, Estética y Reconstructiva.

¿Buscas una solución médica o un cambio estético? El Dr. Camacho cuenta con la experiencia para brindarte resultados seguros y confiables en:

✨ Estética y Reconstrucción: Cirugía Plástica, Maxilofacial, atención de Quemaduras, Cáncer de Piel y Lunares.
💪 Salud General y Quirúrgica: Cirugía General, Hernias, Eventraciones, Cálculos en la Vesícula, Histerectomías y Cirugía Menor.

Tu salud merece ser atendida por los mejores. ¡Confía en la experiencia!

📞 Agenda tu consulta hoy mismo: 0424-5212582. Te esperamos.`,
    specialties: ["cirugia-general", "cirugia-plastica"],
    contact: { phone: "0424-5212582" }
  },
  {
    id: 2,
    name: "Dr. Oswal Arcaya",
    photo: "/images/doctors/dr-oswal-arcaya.png",
    bio: `Recupera tu movilidad y vuelve a hacer lo que amas sin dolor. ✨
¿Un dolor persistente te detiene? ¿Te lesionaste haciendo deporte? El Dr. Oswal Arcaya, especialista en Traumatología y Ortopedia en UMEIB, está aquí para ayudarte a recuperar el control de tu cuerpo.

Con una atención integral y tecnología de vanguardia, tratamos:
✅ Lesiones Músculoesqueléticas y Deportivas.
✅ Lesiones Degenerativas.
✅ Cirugía Artroscópica (menos invasiva y recuperación más rápida).
✅ Cirugías de Emergencia y Electivas.

No te acostumbres a vivir con dolor. ¡Tu bienestar es nuestra misión y estamos más cerca de ti!`,
    specialties: ["traumatologia"],
    contact: { phone: "0424-5212582" }
  },
  {
    id: 3,
    name: "Dra. Ada Gabriela Hernández",
    photo: "/images/doctors/dra-ada-gabriela-hern-ndez.png",
    bio: `Salud vascular y estética: Un dúo perfecto para tus piernas. ✨
En UMEIB (Unidad Médica de Atención Inmediata), entendemos que cuidar de ti va más allá de un diagnóstico. Por eso, hemos reunido a los mejores especialistas para ofrecerte una atención integral, desde un chequeo pediátrico hasta ese tratamiento estético que tanto deseas. 👨‍⚕️👩‍⚕️💖

La Dra. Ada Gabriela Hernández no solo cuida la circulación de tus piernas con su consulta de angiología, sino que también las embellece con medicina estética.

✅ ¿Necesitas un diagnóstico preciso? ¡Eco Doppler disponible!
✅ ¿Quieres despedirte de esas varices? ¡Escleroterapia es la solución!
✅ ¿Buscas el alivio definitivo? ¡Cura de úlceras es posible!
✅ Y para un toque final: ¡Medicina Estética para un aspecto increíble!

Descubre todas nuestras especialidades en la imagen y vive la experiencia de una atención médica más cerca de ti.`,
    specialties: ["angiologia", "medicina-estetica"],
    contact: { phone: "0424-5212582" }
  },
  {
    id: 4,
    name: "Dra. Laura Graterol",
    photo: "/images/doctors/dra-laura-graterol.png",
    bio: `Tu salud femenina merece atención experta en cada etapa de tu vida. ✨
En UMEIB, nos enorgullece contar con la Dra. Laura Graterol, una especialista dedicada a acompañarte con calidez y profesionalismo. Desde tu primera consulta hasta la planificación familiar, el control prenatal y más, estamos aquí para ti.

✅ Planificación Familiar para tus decisiones.
✅ Control Prenatal para un embarazo saludable.
✅ Atención experta en Partos y Cesáreas.
✅ Cirugías Ginecológicas con tecnología avanzada.
✅ Tratamiento efectivo para VPH.

No dejes tu bienestar para después. Tu salud es nuestra prioridad y estamos más cerca de ti.`,
    specialties: ["ginecologia-y-obstetricia"],
    contact: { phone: "0424-5212582" }
  },
  {
    id: 5,
    name: "Dra. Leymar Briceño",
    photo: "/images/doctors/dra-leymar-brice-o.png",
    bio: `Tu bienestar Otorrinolaringológico, bajo la atención de una experta. 🏥
En UMEIB, entendemos que respirar, escuchar y hablar bien son fundamentales para tu vida. Por eso, te ofrecemos la atención experta de la Dra. Leymar Briceño, especialista en patologías de oído, nariz y garganta. Diagnóstico preciso, tecnología avanzada y un trato cercano para tu tranquilidad.

✅ Audición y Equilibrio.
✅ Nariz y Alergias.
✅ Garganta y Voz.

Tu salud es lo más importante y estamos más cerca de ti.

💬 ¡Escríbenos por WhatsApp y reserva tu cita! 👇`,
    specialties: ["otorrinolaringologia"],
    contact: { phone: "0424-5212582" }
  },
  {
    id: 6,
    name: "Dra. Rosanna González",
    photo: "/images/doctors/dra-rosanna-gonz-lez.png",
    bio: `El dolor no tiene por qué ser parte de tu rutina. Ya sea por una lesión deportiva, el desgaste natural de las articulaciones o una emergencia, la Dra. Rosanna González está lista para brindarte una atención especializada en traumatología.

En UMEIB, nos enfocamos en que recuperes tu ritmo de vida con tratamientos avanzados como la viscosuplementación y cirugías de alta precisión.

✅ Lesiones musculoesqueléticas
✅ Medicina deportiva
✅ Cirugías electivas y de emergencia

¡No dejes que el dolor te detenga! Agenda tu cita hoy mismo.

📲 Contáctanos: 0424-5212582 / 0412-2193657
📍 Ubícanos en UMEIB.`,
    specialties: ["traumatologia"],
    contact: { phone: "0424-5212582" }
  },
  {
    id: 7,
    name: "Dra. Lenny Mujica",
    photo: "/images/doctors/lenny-mujica.png",
    bio: `Sabemos que lo más importante para ti es el bienestar y crecimiento sano de tus pequeños. Por eso, la Dra. Lenny Mujica (Pediatra - Puericultor) te ofrece una atención integral y humana en cada etapa de su desarrollo. 👶✨

Nuestros servicios incluyen:
✅ Control de niño sano y enfermo.
✅ Consulta pediátrica prenatal.
✅ Asesoría y colocación de vacunas.
✅ Control de crecimiento y desarrollo.
✅ Atención de emergencias pediátricas.

Ofrecemos la comodidad que necesitas:
📍 Consulta presencial
🏠 A domicilio
💻 Online (según el caso)

¡No descuides su salud! Agenda tu cita hoy mismo:
📞 0424-5212582
📩 O escríbenos al DM: @lennymujica`,
    specialties: ["pediatria"],
    contact: { phone: "0424-5212582" }
  },
  {
    id: 8,
    name: "Lic. Eurelbys Juárez",
    photo: "/images/doctors/lic-eurelbys-ju-rez.png",
    bio: `¡Tus pies merecen el mejor cuidado profesional! 👣✨

Muchas veces olvidamos que nuestros pies son la base de todo nuestro movimiento. En UMEIB, la Lic. Eurelbys Juárez te ofrece una consulta especializada de quiropedia para que camines con total comodidad y salud.

Desde tratamientos láser para hongos hasta la solución definitiva para uñas encarnadas, estamos listos para atenderte. 🏥

✅ Quiropedia Clínica
✅ Láser para hongos
✅ Extracción de uñas encarnadas
✅ Tratamiento para resequedad y callosidades

📍 ¡Visítanos y siente la diferencia!
📲 Agenda tu cita al 0424-5212582`,
    specialties: ["quiropedia"],
    contact: { phone: "0424-5212582" }
  },
  {
    id: 9,
    name: "Dra. Luisa Delgado",
    photo: "/images/doctors/luisa-delgado.png",
    bio: `La prevención y la atención oportuna son las claves para una vida plena. La Dra. Luisa Delgado, especialista en Cirugía General y Laparoscópica, te ofrece una atención médica integral, segura y de alta calidad para cuidar de ti y de los tuyos.

Desde una evaluación inicial hasta procedimientos especializados, su prioridad es tu bienestar y pronta recuperación.

¿Cuáles son sus servicios?
🩺 Consulta Médica Especializada.
📅 Cirugías Programadas y de Emergencia.
📈 Control Postoperatorio detallado.
🔬 Toma de Biopsia.
🩹 Procedimientos Menores y Manejo Avanzado de Heridas.

Tu salud no puede esperar. Agenda tu consulta hoy mismo y recíbela en las instalaciones de UMEIB.
📲 Reserva tu cita:

📞 Teléfonos: (0412)-139-7387 / (0424)-521-2582

📍 Ubicación: @umeib.ve carrera 16 entre calles 27 y 28

📬 O escríbenos directamente al DM de @dra.luisa.delgado`,
    specialties: ["cirugia-general"],
    contact: { phone: "0424-5212582" }
  }
];

export function getDoctorsBySpecialty(slug: string): Doctor[] {
  return doctors.filter(d => d.specialties.includes(slug));
}

export function getAllDoctors(): Doctor[] {
  return doctors;
}