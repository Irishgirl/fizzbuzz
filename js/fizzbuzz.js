function fizzbuzz () {
  var tbody = document.getElementById('fizzbuzz'),
      rows = [],
      iv,
      i = 1;

  document.getElementById('action').classList.add('hidden');
  document.getElementById('display').classList.remove('hidden');

  // http://www.imdb.com/title/tt0099810
  // http://www.imdb.com/title/tt0099810/quotes?item=qt0458337
  function oneFizzBuzzOnlyPlease () {
    var tr, td, row = (i - 1) % 20;

    if (row >= rows.length) {
      tr = rows[row] = document.createElement('tr');
      tbody.appendChild(tr);
    } else {
      tr = rows[row];
    }

    td = tr.appendChild(document.createElement('td'));
    td.innerHTML = i;
    td = tr.appendChild(document.createElement('td'));

    td.className = [
      (i % 3) ? '' : 'fizz',
      (i % 5) ? '' : 'buzz'
    ].join(' ');
    
    if (++i > 100) {
      clearInterval(iv);
    }
  }
  iv = setInterval(oneFizzBuzzOnlyPlease, 250);
}