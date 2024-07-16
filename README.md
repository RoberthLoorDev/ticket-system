# Sistema de Gestión de Tickets para Soporte TI Empresarial

## Descripción
Este sistema proporciona una plataforma eficiente para la gestión de tickets de soporte en áreas de TI empresariales. Facilita la comunicación entre empleados, administradores y profesionales de soporte, optimizando el proceso de resolución de problemas técnicos.

## Instalación
1. Clonar el repositorio
2. Instalar dependencias: npm install
3. Iniciar el servidor de desarrollo: npm run dev

## Uso
El sistema consta de tres interfaces principales:

1. Interfaz de Empleado:
   - Ver tickets creados
   - Crear nuevos tickets especificando:
     * Área del solicitante
     * Prioridad
     * Asunto
     * Descripción detallada

2. Interfaz de Administrador:
   - Recibir notificaciones de nuevos tickets
   - Ver todos los tickets creados
   - Asignar profesionales de soporte a los tickets
   - Establecer fechas límite para la resolución

3. Interfaz de Soporte:
   - Recibir notificaciones de tickets asignados
   - Ver y gestionar tickets asignados

## Características Principales
- Creación y seguimiento de tickets en tiempo real
- Sistema de notificaciones por correo electrónico
- Asignación de prioridades y fechas límite
- Interfaz intuitiva para tres tipos de usuarios

## Tecnologías Utilizadas
- Frontend: React, Tailwind
- Backend: Express
- Base de datos: PostgresSQL

## Contribución
Las contribuciones son bienvenidas. Por favor, lea las guías de contribución antes de enviar un pull request.