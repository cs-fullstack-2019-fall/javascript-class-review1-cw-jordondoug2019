// ### Problem 1:
//
// Put the start of your program in a main function.
// Create a class for Books with name, rating, genre, and author. Create 3 instances of Books and put them in an array.
//     Afterwards print each one in the format below:
//     ```
// The book [BOOK NAME] has [RATING] stars!!!
// ```

class Books {
    constructor(name,rating,genre,author)
    {
        this.name=name;
        this.rating=rating;
        this.genre=genre;
        this.author=author;
    }
}

function main()
{
    let book1=new Books("cat in the Hat","5 stars","children","Dr. Seuss");
    let book2=new Books("The Four Agreements","5 stars", "self-help", "Don Miguel Ruiz");
    let book3= new Books("1984","5 stars","kinda-fiction","George Orwell");
    let booklist=[book1,book2,book3];
    console.log(booklist);

     for (index in booklist)
     {
         nameList= booklist[index].name;
         ratingList=booklist[index].rating;
            console.log("The book  " +nameList+ " has "+ ratingList+ " stars!!!")
     }
}
main();