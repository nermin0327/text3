
// 1-ci tapshiriq

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => response.json())
//   .then((json) => {
//     console.log(json);
//     for(let i=0; i<json.length; i++){
//       console.log(json[i])
//       let transaction=document.createElement('p')
//       transaction.innerText =`${json[i].name}`
//       document.body.append(transaction)
//   }
//   })   
// 2-ci tapshiriq
//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'greeting',
//       body: 'hello,everyone',
//       userId: 1,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json));