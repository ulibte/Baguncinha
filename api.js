

export const login = async (username, password) => {
    const response = await fetch('http://10.0.2.2:3000/login', {//Android team make 10.0.2.2 be the localhost
        method: 'POST',
        headers: {'content-type': "application/json",},
        body: JSON.stringify({username, password}), //coco é verdade
    })
    const responseText = await response.text()
    console.log(responseText);
    const statusCode = await response.status
    if(statusCode === 200){
        return true
    }else{
        throw new Error(responseText)
    }
}