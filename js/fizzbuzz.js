function fizzbuzz () {
  var tbody = document.getElementById('fizzbuzz'),
      iv,
      i = 1;

  document.getElementById('action').classList.add('hidden');
  document.getElementById('display').classList.remove('hidden');

  // http://www.imdb.com/title/tt0099810
  // http://www.imdb.com/title/tt0099810/quotes?item=qt0458337
  function oneFizzBuzzOnlyPlease () {
    var tr = document.createElement('tr'),
        td = tr.appendChild(document.createElement('td'));

    tr.insertBefore(document.createElement('td'), td);
    tr.firstChild.innerHTML = i;
    td.innerHTML = ((i % 3) ? '' : 'Fizz')
                 + ((i % 5) ? '' : 'Buzz');
    
    tbody.insertBefore(tr, tbody.firstChild);

    if (++i > 100) {
      clearInterval(iv);
    }
  }
  iv = setInterval(oneFizzBuzzOnlyPlease, 500);
}