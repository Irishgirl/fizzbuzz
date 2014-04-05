function fizzbuzz () {
  var tbody = document.getElementById('fizzbuzz'),
      fbString,
      tr,
      td,
      i;
  
  for (i = 1; i <= 100; i++) {
    fbString = (i % 3 === 0) ? 'Fizz' : '';
    fbString += (i % 5 === 0) ? 'Buzz' : '';
    
    tr = document.createElement('tr');
    td = document.createElement('td');
    td.innerHTML = i;
    tr.appendChild(td);
    td = document.createElement('td');
    td.innerHTML = fbString;
    tr.appendChild(td);
    tbody.appendChild(tr);
  }
}