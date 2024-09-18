function generate(){
    let quotes = {
        "- Jules Renard" : '"The truly free man is the one who can turn down an invitation to dinner without giving an excuse."',
        "- Albert Einstein" : '"Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty."',
        "- Vera Nazarian" : '"A choir is made up of many voices, including yours and mine. If one by one all go silent then all that will be left are the soloists."',
    }

    let authors = Object.keys(quotes);
    
    let author = authors[Math.floor(Math.random() * authors.length)];

    let quote = quotes[author];
    
    console.log(author)
    console.log(quote)

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}
