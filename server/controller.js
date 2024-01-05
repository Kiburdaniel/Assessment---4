module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = [
            "Your dreams are worth your best efforts to achieve them.", "You will always get what you want through your charm and personality.",
            "You will have a fine capacity for the enjoyment of life.", "You will enjoy good health; you will be surrounded by luxury.",
            "You will travel far and wide, both pleasure and business."];
         
    // choose random fortune  
         let randomFortuneIndex = Math.floor(Math.random() * fortunes.length);
         let randomFortune = fortunes[randomFortuneIndex];
         res.status(200).send(randomFortune);},
        
    getReview: (req, res) => {
        const reviews = ["*", "**", "***", "****", "*****"];
    // choose random review  
        let randomIndex = Math.floor(Math.random() * reviews.length);
        let randomReview = reviews[randomIndex];
      
        res.status(200).send(randomReview);
    },
    getRandomnumber: (req, res) => {
        const randomNumbere = Math.floor(Math.random() * 10);
    // choose random number  
      
        res.status(200).send(randomNumber);
    }
}