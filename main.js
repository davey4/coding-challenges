const myfunc = () => {
  let myDiv = document.getElementsByClassName("vague");
  myDiv.forEach((el) => {
    let div = el.innerHtml().toLowerCase().replace("-", " ");
  });
};
myfunc();

const nextFunc = () => {
  let table = document.getElementById("car");
  let headers = table.getElementsByTagName(tr);
  let a = headers[0].getElementsByTagName(td);
  a.forEach((el) => {
    el.setAttributes(role, "columnheader");
  });
  for (let i = 1; i < headers.length; i++) {
    let td = headers[i].getElementsByTagName(td);
    td[0].setAttributes(role, "rowheader");
  }
};
nextFunc();
