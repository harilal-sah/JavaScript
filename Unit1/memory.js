//Memory are of two types:

/*
    1. Stack(Primitive):
    2. Heap(Non-Primitive):
 */

    let youtubeName = "NamasteWorld"
    let anotherName = youtubeName;
    anotherName = "Hello WOrld"
    console.log(anotherName)
    console.log(youtubeName)

    let userOne = {
      emailId : "hsk@official.com",
      upiId : "9608694969@ybl"
    }

    let userTwo = userOne
    userTwo.emailId = "harilalsahk@gmail.com";

    console.log(userOne.emailId);
    console.log(userTwo.emailId);