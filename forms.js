$(document).ready(function() {
    var array = [];
    var totalSalary = 0;
    $('#employeeinfo').on('submit', function(event) {
      event.preventDefault();

      var values = {};
      $.each($('#employeeinfo').serializeArray(), function(i, field) {
        values[field.name] = field.value;
      });

      console.log(values);


//clear inputs
$('#employeeinfo').find('input[type=text]').val('');



  //  Delete Button. Maybe. Only if it actually works.
   $('#container').on('click', '.deleteMe', deleted);
   function deleted() {
      $(this).remove('empSalary');
      $(this).closest('.person').remove();
      $('#allSalary').append('<p class = salary>Total Salary:' + totalSalary + '</p>')


};




      appendDom(values);
      addSalary(values);
    });

    function appendDom(empInfo) {
      $('#container').append('<div class="person"></div>');
      var $el = $('#container').children().last();

      $el.append('<p>First Name: ' + empInfo.employeefirstname + '</p>');
      $el.append('<p>Last Name: ' + empInfo.employeelastname + '</p>');
      $el.append('<p>ID Number: ' + empInfo.employeeId + '</p>');
      $el.append('<p>Job Title: ' + empInfo.employeeJobTitle + '</p>');
      $el.append('<p>Yearly Salary: ' + empInfo.employeeSalary + '</p>');
      $el.append('<button type="button" class="deleteMe" name="deleteMe">Delete</button>');

    }

    function addSalary(empInfo) {
      var empSalary = empInfo.employeeSalary;
      totalSalary += Number(empSalary);
      $('.salary').remove();
      $('#allSalary').append('<p class = salary>Total Salary:' + totalSalary/12 + '</p>')
    }






});
