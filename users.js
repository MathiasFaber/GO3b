class user {
    constructor(name, birthday, gender, location)
    {
        this.name = name;
        this.birthday = birthday;
        this.gender = gender;
        this.location = location;
        //like funktion
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
//hej, redigeret
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