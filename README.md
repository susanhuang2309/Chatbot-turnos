# Chatbot-turnos

Aplicación web que permite a los usuarios consultar disponibilidad y reservar turnos mediante un chatbot. El sistema automatiza la gestión de reservas y conecta diferentes servicios para almacenar la información y administrar los turnos.

# Objetivo

Transformar un chatbot desarrollado inicialmente de forma local en una aplicación web pública y funcional, accesible desde distintos dispositivos.

# Problema

La gestión manual de turnos puede generar diferentes inconvenientes:

- Reservas duplicadas.
- Errores al registrar información.
- Falta de actualización de la disponibilidad.
- Demoras en la respuesta al usuario.
- Dificultad para acceder al sistema desde distintos dispositivos.

Además, una aplicación que funciona únicamente en `localhost` depende de que la computadora donde está alojada permanezca encendida y no puede ser utilizada fácilmente por otras personas.


# Solución

Se desarrolló una aplicación web que automatiza el proceso de reserva de turnos.
El usuario interactúa con el chatbot desde una página web. La solicitud es enviada mediante un **webhook** a Make, que funciona como núcleo de procesamiento del sistema.
Make valida los datos recibidos, consulta la disponibilidad en Google Calendar y, si existe disponibilidad, registra o actualiza al usuario en Supabase, crea el evento en Google Calendar y guarda el turno en la base de datos.
Finalmente, el sistema devuelve una respuesta al usuario confirmando la reserva.

# Tecnologías utilizadas

- **HTML, CSS y JavaScript** — Interfaz web
- **Make** — Automatización y procesamiento de solicitudes
- **Supabase** — Base de datos de usuarios y turnos
- **Google Calendar** — Gestión de disponibilidad y eventos
- **Vercel** — Publicación de la aplicación
- **GitHub** — Control de versiones

# Funcionamiento

1. El usuario solicita un turno desde la página web.
2. La información se envía mediante un **webhook** a Make.
3. Make valida los datos recibidos.
4. Se consulta Google Calendar para comprobar la disponibilidad.
5. Si el horario está ocupado, se informa al usuario y el proceso finaliza.
6. Si está disponible, se busca al usuario en Supabase y se registra o actualiza su información.
7. Se crea el evento en Google Calendar.
8. El turno se guarda en la tabla `turnos` de Supabase.
9. Make devuelve una confirmación al usuario.

# Arquitectura
<img width="1816" height="696" alt="image" src="https://github.com/user-attachments/assets/61ffe730-7516-4459-b306-dca364ba49df" />

# Pruebas

Se verificó el funcionamiento del sistema mediante pruebas de:

Reserva de turnos disponibles.
Intentos de reserva en horarios ocupados.
Registro y actualización de usuarios.
Creación de eventos en Google Calendar.
Almacenamiento de turnos en Supabase.
Funcionamiento desde diferentes dispositivos y conexiones.

# Integrantes
Susan Huang
Gala Monteverde

# Futuras mejoras
Panel administrativo.
Cancelación de turnos.
Recordatorios automáticos.
Historial de turnos.
Autenticación de usuarios.
Integración con WhatsApp.
Estadísticas de reservas.
