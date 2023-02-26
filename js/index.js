const loadData = () =>{
    const url =('https://jsonplaceholder.typicode.com/posts');
    fetch(url)
    .then(res=> res.json())
    .then(data=>displyData(data))
    .catch ((error) =>{
        console.log(error);
    })
};
const displyData =(datas) =>{
    // console.log(datas.slice(0,5));
    for( const data of datas.slice(0,10)){
        console.log(data.title);
        const container = document.getElementById('post-info');
        const div = document.createElement('div');
        div.innerHTML =`
        <h1 class="text-3xl text-center">${data.title}</h1>
        
        `;
        container.appendChild(div);


    }

};
loadData();