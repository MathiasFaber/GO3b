class user {
    constructor(name, birthday, gender, location, email, password, uniqueUserID)
    {
        this.name = name;
        this.birthday = birthday;
        this.gender = gender;
        this.location = location;
        this.email = email;
        this.password = password;
        this.uniqueUserID = uniqueUserID;
        //like funktion
    };
    
    // Denne funktion skal skabe et unikt bruger-ID når person opretter sig i dating appen.
    //Funktionen giver bruger 1 nr. 1 og bruger 2 nr 2 osv. 
    var add = (function () {
        var counter = 0;
        return function () {counter += 1; return counter}
      })();

    
    //Denne funktion skal lade brugerne like hinanden. Funktionen skal bruges senere i Match funktionen.
    var like = function(){
        
    }


}

class paymentuser extends user{
    constructor(name, birthday, gender, location)
    {
    super(name, birthday, gender, location)
    // add super like eller sådan noget
    }
}

class creditcard{
    constructor(cardHolderName, expireDate, cardNumber, cvcNumber)
    {
        this.cardHolderName = cardHolderName;
        this.expireDate = expireDate;
        this.cardNumber = cardNumber;
        this.cvcNumber = cvcNumber;
    }
}

class freeUser extends user{
    constructor(name, birthday, gender, location)
    {
        super(name, birthday, gender, location)
    }
}

class interest extends user{
    constructor(name)
    {
    super(name)
    }
    //method der siger: If a likes b && b likes a = match
}

class match extends interest{
    constructor(name)
    {
    super(name)
    }

    //Method sammenlinger crud fra brugere. Hvis a har liket b og b har liket a, er der et match. 
}



//CRUD hvor 