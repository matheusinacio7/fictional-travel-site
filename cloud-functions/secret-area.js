exports.handler = (event, context, callback) => {
  let body = {};
  let password = "";

  if(event.body){
    body = JSON.parse(event.body);
    password = body.password;
  }

  if(password == "javascript") {
    callback(null, {
      statusCode: 200,
      body: 'Welcome to the secret area.'
    })
  } else {
    callback(null, {
      statusCode: 401,
      body: 'Get out of here.'
    })
  }

}