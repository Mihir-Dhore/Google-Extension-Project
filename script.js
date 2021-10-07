fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())
    .then(inspiringData => {

        const inspiringText = inspiringData.attachments[0].text;
        const inspiringQuote = document.getElementById('inspiringQuote');

        inspiringQuote.innerHTML = inspiringText; //inspiring element ke andar joke ko daal deta hai


    })

// JSON means javaScript Object notation
// https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?