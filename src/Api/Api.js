export const getData = (url)=> {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(response => {
            if (response.status === 200 ) {
                response.json().then(data => {
                    resolve(data)
                }).catch(error => {
                    reject(error)
                })
            } else {
                reject(new Error(`response number is ${response.status}`))
            }
        }).catch(error => {
            reject(error)
        })
    })
} 

