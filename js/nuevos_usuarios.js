$(document).ready(function() {
    // Array para almacenar los usuarios
    var users = [];

    // Función para agregar un nuevo usuario
    function addUser(name, rut, phone, email) {
      users.push({ name: name, rut: rut, phone: phone, email: email });
    }

    // Función para renderizar la tabla de usuarios
    function renderUserTable() {
      var tableBody = $("#userTableBody");
      tableBody.empty();

      for (var i = 0; i < users.length; i++) {
        var user = users[i];
        var row = $("<tr></tr>");

        var nameCell = $("<td></td>").text(user.name);
        var rutCell = $("<td></td>").text(user.rut);
        var phoneCell = $("<td></td>").text(user.phone);
        var emailCell = $("<td></td>").text(user.email);
        var actionsCell = $("<td></td>");
        var deleteButton = $("<button class='btn btn-danger btn-sm'>Eliminar</button>");
        
        // Evento para eliminar un usuario
        deleteButton.on("click", function() {
          var rowIndex = $(this).closest("tr").index();
          users.splice(rowIndex, 1);
          renderUserTable();
        });

        actionsCell.append(deleteButton);
        row.append(nameCell, rutCell, phoneCell, emailCell, actionsCell);
        tableBody.append(row);
      }
    }

    // Evento de envío del formulario para agregar usuario
    $("#addUserForm").on("submit", function(e) {
      e.preventDefault();
      var name = $("#name").val();
      var rut = $("#rut").val();
      var phone = $("#phone").val();
      var email = $("#email").val();
      addUser(name, rut, phone, email);
      renderUserTable();
      $("#addUserForm")[0].reset();
    });
  });