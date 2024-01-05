const complimentBtn = document.querySelector("#complimentButton");
const fortuneBtn = document.querySelector("#fortuneButton");
const reviewBtn = document.querySelector("#reviewButton");
const randomNumberBtn = document.querySelector("#randomNumberButton");


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};
const getRandonNumber = () => {
    axios.get("http://localhost:4000/api/randomNumber/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};
const getReview = () => {
    axios.get("http://localhost:4000/api/review/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
reviewBtn.addEventListener('click', getReview)
randomNumberBtn.addEventListener('click', getRandomNumber)

