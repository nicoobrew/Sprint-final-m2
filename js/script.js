$(document).ready(function() {
    $('#calendar').fullCalendar({
        header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      defaultView: 'month',
      editable: true,
      events: [
        {
          title: 'Cita',
          start: '2023-05-19',
          end: '2023-05-19'
        },
        {
          title: 'Exámenes',
          start: '2023-05-22',
          end: '2023-05-22'
        }
        // Agrega más eventos aquí
      ]
    });
  });