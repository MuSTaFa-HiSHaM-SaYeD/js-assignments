

// assignment 2

    // 1st way "inline style way"
        document.write("<h1 style=\"color:blue; \
        text-align:center; \
        font-family:Arial; \
        font-size:80px; \
        font-weight:bold;\">\
        \
        Elzero \
        \
        </h1>");
    
    // 2nd way "style tag way"
        document.write("<h1> Elzero </h1>");
        document.write("<style> h1{color: blue;\
            font-size: 80px;\
            font-weight: bold;\
            text-align: center;\
            font-family: Arial }</style>");


// assignment 3
    window.console.log("%cElzero %cWeb %cSchool","color:red; font-size:40px;","color:green; font-size:40px; font-weight:bold;","font-size:40px; background-color:blue;");


// assignment 4
    console.group("Group 1");
    console.log(1);
    console.log(2);
    console.group("Group 1.1");
    console.log(1);
    console.log(2);
    console.group("Group 1.1.1");
    console.log(1);
    console.log(2);
    console.groupEnd();
    console.groupEnd();
    console.groupEnd();
    console.group("Group 2");
    console.log(1);
    console.log(2);
    console.groupEnd();

// assignment 5
    console.table(["Elzero","Ahmed","Badr","Eslam","Mostafa"]);


// assignment 6

    //1st way
        /* 
        console.log("Iam In Console");
        document.write("Iam In Page");
        */

    // 2nd way
        // console.log("Iam In Console");
        // document.write("Iam In Page");