function promise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Sou a promise');
            resovel();
        }, 2000);
    })
}

export default async function(){
    await promise();
    console.log('terminou');
    
}
