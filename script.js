var employeeinfo = new Array();
var numbers = new Array();
function submit() {
	'use strict';
    var firstname = document.getElementById('firstname').value;
	var lastname = document.getElementById('lastname').value;
    var department = document.getElementById('department').value;
    var n = 0;
    var i;
    
    var num = Math.random()*100000000;
    n = num.toFixed(0);
    
    numbers.push(n);
    console.log(numbers);
    
    for(var i=0;i<numbers.length;i++){
      if(n == numbers[i]){
        num = Math.random()*100000000;
        n = num.toFixed(0);
      }
    }
    
    var d = new Date();
  
    var weekday = new Array(7);
      weekday[0] =  "Sun";
      weekday[1] = "Mon";
      weekday[2] = "Tue";
      weekday[3] = "Wed";
      weekday[4] = "Thur";
      weekday[5] = "Fri";
      weekday[6] = "Sat";
    var day = weekday[d.getDay()];
  
    var monthly = new Array(12);
      monthly[0]  = "Jan";
      monthly[1]  = "Feb";
      monthly[2]  = "Mar";
      monthly[3]  = "Apr";
      monthly[4]  = "May";
      monthly[5]  = "June";
      monthly[6]  = "July";
      monthly[7]  = "Aug";
      monthly[8]  = "Sep";
      monthly[9]  = "Oct";
      monthly[10] = "Nov";
      monthly[11] = "Dec";
    var month = monthly[d.getMonth()];
  
    var hiredate = day+" "+month+" "+d.getDate()+" "+d.getFullYear();
  
    document.getElementById("employeeadd").value = "Employee Added"
	document.getElementById('name').value = "Name: " + firstname + " " + lastname;
    document.getElementById('departmentfield').value = "Department: " + department;
    document.getElementById('employeeid').value = "Employee ID: " + n;
	document.getElementById('date').value = "Hire Date: "+hiredate;
    document.getElementById('total').value = "Total Employees: "+(employeeinfo.length+1);
  
    employeeinfo.push([firstname,lastname,department,n,hiredate]);
    console.log(employeeinfo);

  
  return false;    
}

function init() {
	'use strict';
	document.getElementById('theForm').onsubmit = submit;
}
window.onload = init;
