function fizzbuzz () {
  var i = 0,
      tbody = document.getElementById('fizzbuzz'),
      fbString = '',
      tr, td;
  
  for (i = 1; i <= 100; i++) {
    fbString = '';
    if (i % 3 === 0) {
      fbString = 'Fizz';
    }
    if (i % 5 === 0) {
      fbString = fbString + 'Buzz';
    }
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