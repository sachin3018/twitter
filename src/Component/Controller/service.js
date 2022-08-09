async function signup(userInfo){
  var response = {
    status : 504,
    message : "",
    user : {}
  }

     await fetch('url',{
      method: 'POST',
      headers:{'Content-type':'application/json'},
      body: userInfo
    }).then(r=>r.json()).then(res=>{
      if(res){
        //add user here according to the response
        response.user = res["user"]
        response.status = 200
        response.message = "Tweet Posted successfully"
      }
    });

    return response;
}

async function postTweet(postTweetData){
    var response = {
      status : 504,
      message : ""
    }

    await fetch('url',{
      method : 'POST',
      headers : {'Content-type':'application/json'},
      body : postTweetData,
    }).then(r=>r.json()).then(res => {
      if(res){
        response.status = 200
        response.message = "Tweet Posted successfully"
      }
    }).catch(err => {
      response.message = "something went wrong!!"
    })
    return response
}

async function viewAllTweet(category){
 var response = {
  status : 504,
  tweet : []
 }

  if(category === 'my'){
    await fetch('url')
               .then(res => res.json)
               .then(res => {
                response.status = 200
                response.tweet = res['tweet']
               }).catch(err => {
                response.status = 504
                response.tweet = ["something went wrong"]
               })
  }
  if(category === 'all'){
    await fetch('url')
               .then(res => res.json)
               .then(res => {
                response.status = 200
                response.tweet = res['tweet']
               }).catch(err => {
                response.status = 504
                response.tweet = ["something went wrong"]
               })
  }

  return response;
}

async function changePassword(password){
  const response = {
    status : 504,
    message : ""
  }

  await fetch('url',{
    method : 'PUT',
    headers : {'Content-type':'application/json'},
    body : password,
  })
             .then(res => res.json)
             .then(res => {
              response.status = 200
              response.message = "password changes successfully"
             })
             .catch(err => {
              response.message = "something went wrong"
             })
  return response
}


async function getAllUsers(){
  var response = {
    status : 504,
    user : []
  }

  await fetch('url')
        .then(res => res.json())
        .then(res => {
          response.status = 200
          response.user = res['user']
        })
        .catch(err => {
          response.user = ["Something went wrong"]
        })
  return response;
}