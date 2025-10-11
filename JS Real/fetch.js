// Fetch: Data Mangaana kisi Web api se
fetch ('https://randomuser.me/api/') // fetch URL pe jaata hai vahaa se leke aata hai
.then(function (rawdata) {
    return rawdata.json();  // Readable format k liye data ko json me return krvaana hai phir next .then me uska data mil jaayega
})
.then((realJsonData) => {
    console.log(realJsonData.results[0].name); // Ye location pe apne ko real data milaa hai JSON me.
})
.catch(function (error) {
    console.log(error);
})

// GET,POST Basics:
// GET: Data website pe jaana and lekar aana
// POST: URL pe data bhejna 