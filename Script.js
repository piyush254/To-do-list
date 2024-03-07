let Listitems = [
  {
    item: "Buy milk",
    duedate: "7/03/2024",
  },
  {
    item: "Buy chocolates",
    duedate: "7/03/2024",
  },
];
displayitems();

function addtodo() {
  let inputelement = document.querySelector("#todo-input");
  let todoitem = inputelement.value;
  let date = document.querySelector("#tododate");
  let tododate = date.value;

  // console.log(todoitem)
  Listitems.push({
                item:todoitem,
                duedate: tododate
              });
  inputelement.value = "";
  displayitems();
}
function displayitems() {
  let containerelement = document.querySelector(".itemcontainer");
  let newHTML = "";
  for (let i = 0; i <Listitems.length; i++) {
    // let Item = Listitems[i].item
    // let Date = Listitems[i].duedate
    let{item,duedate} = Listitems[i];
    newHTML += `
        <span>${item}</span>
        <span>${duedate}</span>
        <button  class= "buttontodel" onclick="Listitems.splice(${i},1);displayitems();">Delete</button>
        `;
  }
  containerelement.innerHTML = newHTML;
}
