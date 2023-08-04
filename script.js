function validateForm() {
  let n = document.forms["myform"]["name"].value;
  let mail = document.forms["myform"]["ma"].value;
  let msg = document.forms["myform"]["ms"].value;
  let regex = /[\w\d]+@[\w]+\.[\w]+/gm;
  if (n == "") {
    alert("Please enter a name");
    return false;
  }
  if (mail == "") {
    alert("Please enter a mail");
    return false;
  } else if (!mail.match(regex)) {
    console.log(mail.match(regex));
    alert("Please enter valid mail");
    return false;
  }
  if (msg == "") {
    alert("Please enter a msg");
    return false;
  } else if (msg.length > 200) {
    alert("Message length exceeded");
    return false;
  }
}
