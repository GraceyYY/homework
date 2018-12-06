let ajax = new XMLHttpRequest();
ajax.request = function(url, method, callback, formData) {
  ajax.onreadystatechange = handleStateChange(ajax, callback);
  if (method === 'GET') {
    ajax.open('GET', url);
    ajax.send(null);
  }
  if (method === 'POST') {
    ajax.open('POST', url);
    ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    ajax.send(formData);
  }
}

function handleStateChange(xhr, callback) {
  if (xhr.readyState === 4) {
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      //request was successful
      callback(xhr);
    } else {
      //request was unsuccessful, do something to handle error
      alert(`Request was unsuccessful: ${xhr.status}`);
    }
  }
};