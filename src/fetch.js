export function getData (url){
    return new Promise((resolve,reject) =>{
        fetch(url)
        .then((response) => response.json())
        .then((responseJSON) => {
            resolve(responseJSON);
        })
        .catch((error) => {
            console.log('error===='+error);
        })
    })
}



