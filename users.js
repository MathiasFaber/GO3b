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
    
    //Denne funktion skal skabe et unikt bruger-ID når person opretter sig i dating appen.
    //Funktionen giver bruger 1 nr. 1 og bruger 2 nr 2 osv. 
    generateUserID (){
        var counter = 0;
        return function () {counter += 1; return counter}
    }

}

class paymentUser extends user{
    constructor(name, birthday, gender, location, email, password, uniqueUserID, cardHolderName, expireDate, cardNumber, cvcNumber)
    {
    super(name, birthday, gender, location, email, password, uniqueUserID, cardHolderName)
        this.expireDate = expireDate;
        this.cardNumber = cardNumber;
        this.cvcNumber = cvcNumber;
    // add super like eller sådan noget
    }
}


class freeUser extends user{
    constructor(name, birthday, gender, location, email, password, uniqueUserID)
    {
        super(name, birthday, gender, location, email, password, uniqueUserID)
    }
}

function validatePaid(){
    var x = document.getElementById("cardNumber").nodeValue;
    if (x == null){
        var newUser = new freeUser ("Mathias", [2000, 02, 02], "Male", "Denmark", "mafaber@hotmail.dk", "hej123", 1);

    } else{
        var newUser = new paymentUser ("Mathias", [2000, 03, 03], "Male", "Sweden", "Mafaber@hotmail.dk", "hej234", 2, "Mathias Faber Kristiansen", [2022, 01, 01], 1234567891234567, 123);
    }
}





