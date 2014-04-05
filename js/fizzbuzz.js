function fizzbuzz () {
  var tbody = document.getElementById('fizzbuzz'),
      fbString,
      tr,
      td,
      i;

  /* for older browsers IE < 10, use this:
  document.getElementById('action').className = 'hidden';
  document.getElementById('display').className = '';
  */

  document.getElementById('action').classList.add('hidden');
  document.getElementById('display').classList.remove('hidden');

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