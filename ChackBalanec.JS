var request = new XMLHttpRequest();

request.open('POST', 'https://private-anon-5f270e7975-payeercom.apiary-mock.com/ajax/api/api.php?getBalance');

request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = "account=P1065058185&apiId=12345&apiPass=Wrocvcbn09&action=getBalance";

request.send(body);