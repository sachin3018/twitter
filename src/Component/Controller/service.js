async function signup(userInfo){
    var status = 504;

     await fetch('url',{
      method: 'POST',
      headers:{'Content-type':'application/json'},
        body: userInfo
    }).then(r=>r.json()).then(res=>{
      if(res){
        localStorage.setItem("user",res)
        status = 200
      }
    });

    return status;
}