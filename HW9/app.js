/* async function go() {
  const p1 = fetch('URL').then(r => r.json());
  const p2 = fetch('URL').then(r => r.json());
   //wait for both of them to come back
   const res = await Promise.all([p1,p2]);
  console.log(res);
  const dataPromises = await res.map(r => r.json());
  //const wesAndScott = await Promise.all(dataPromises);
  //console.log(wesAndScott);
  //or 
  const [wes, scott] = await Promise.all(dataPromises);
  console.log(wes, scott);
}
go(); */
async function getData(names){
  const promises = names.map(name => fetch('URL'${name}).then(r => r.json()));
  const [wes, scott /* or people is number is unknown */] = await Promise.all(promises); //promise .race will just have the fastest one come to appear and then the next on ewill appear when it can come
  console.log(wes, scott /* people */);
}
getData(['wesbox', 'stolinski'/* , 'new person' */]);