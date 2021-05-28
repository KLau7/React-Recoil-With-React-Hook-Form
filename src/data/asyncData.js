export function getData(id) {
  const data = [
    {
      id: 0,
      name: 'NG Siu Lung'
    },
    {
      id: 1,
      name: 'Lam Chiu Ming '
    },
    {
      id: 2,
      name: 'Lau Ka Wun'
    }
  ];
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data[id]);
    }, 200);
  });
}


export function dataAPI(){
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
}