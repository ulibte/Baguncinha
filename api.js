


export const login = async () => {
    const response = await fetch('http://10.0.2.2:3000/str', {//Android team make 10.0.2.2 be the localhost
        method: 'POST',
        headers: {'content-type': "text/plain",},
        body: 'iae seu merdaaaaaaaaaaa',
    })
    console.log(await response.text())
}

export const isLoggedIn = async () => {
    const response = await fetch('http://10.0.2.2:3000/isLogged', {//Android team make 10.0.2.2 be the localhost
        method: 'POST',
        headers: {'content-type': "text/plain",},
        body: 'lixo', //coco é verdade
    })
    //console.log(await response.text())
    const responseText = await response.text()
    if (responseText)
        return true
    else
        return false
       
}