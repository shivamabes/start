async function fetchdata(){
  try {
    let response=await fetch("https://api.github.com/users?per_page=10");
    let data=await response.json();
    data.forEach(element => {
      document.write(`Login ${element.login} ID ${element.node_id} URL ${element.html_url}`)
    });
  } catch (error) {
    console.log(error)
  }
}
fetchdata()