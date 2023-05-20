async function GetData(props) {
  const promise = await fetch(props.url
    , {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
  )
  
  let response = await promise.json();

  if (response.length > 1 && "ranking" in response[0]) {
    response = response.sort((a, b) => {
      return b.ranking - a.ranking;
    })
  }
  await props.setData(response);

  
};

export default GetData;