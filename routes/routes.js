exports.loginPageHandler = function(req, res){
  req.session.destroy();
  console.log("Login page");
  res.render('Login.ejs', {Login1: false});
}

exports.interestPageHandler = function(req, res){
  req.session.loggedin = true;
   var person;
   if(req.session.userName){
     console.log("user has already log in: "+req.session.userName);
     person = req.session.userName;
   }
   else{
     person = req.query.nm;
     req.session.userName = person
     console.log("New user not in the session, hence saving user: "+person);
   }
   res.render('select_intrest.ejs',{message: person, Login1: req.session.loggedin});
}

exports.placePageHandler = function(req, res){
  var interest = req.body.interest;
  var taglineValue, cityNameValue;

  if (interest === 'history'){
		cityNameValue = 'Rome';
		taglineValue = 'City of earliest civilization';
	}else if (interest === 'fashion'){
		cityNameValue = 'Paris';
		taglineValue = 'Fashion capital of the world ';
	}else if (interest === 'finance'){
		cityNameValue = 'New York';
		taglineValue = 'Business capital of the world ';
	}else if (interest == 'sports'){
    cityNameValue = 'USA';
    taglineValue = 'The Olympic champions';
  }
  res.render('place.ejs', {person: req.session.userName, cityName: cityNameValue, tagline: taglineValue,
    Login1: req.session.loggedin, message: req.session.userName});
}
