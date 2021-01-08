export const login = async (userName, password) => {
  const response = await fetch('http://10.0.2.2:3000/login', {
    // Android team make 10.0.2.2 be the localhost
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ userName, password }), // coco é verdade
  });
  console.log('responseOk: ', response.ok);
  if (response.ok) {
    const responseJson = await response.json();
    return responseJson.token;
  }

  const responseErrorText = await response.text();
  throw new Error(responseErrorText);
  /* const statusCode = await response.status
    if(statusCode === 200){
        return true
    }else{
        throw new Error(responseText)
    } */
};

export async function getRandomWord(maxSize = 5, minSize = 2) {
  const uri = `http://10.0.2.2:3000/randomWord?${`max=${maxSize}`}&${`min=${minSize}`}`;
  const response = await fetch(uri);
  const { word } = await response.json();
  return word;
}
