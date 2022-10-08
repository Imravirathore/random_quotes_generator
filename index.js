const btn = document.getElementById('btn');

// Ek Event lagaya hai ki Button k click karne par yah function chalna chaiye

btn.addEventListener('click', () => {

    // Ek Array banaya hai jisme 7 color diye hai

    const randomQuotes =
        [
            "The purpose of our lives is to be happy",
            "Arise, awake, and stop not until the goal is achieved",
            "Get busy living or get busy dying",
            "Talk to yourself once in a day, otherwise, you may miss meeting an excellent person in this world",
            "Many of life’s failures are people who did not realize how close they were to success when they gave up",
            "A man is not poor without a rupee but a man is really poor without a dream and ambition",
            "Everything we do, physical or mental, is Karma, and it leaves its marks on us",
            "Do one thing at a time, and while doing it put your whole soul into it to the exclusion of all else",
            "Believe in yourself and the world will be at your feet"
        ];

    const randomNum = Math.floor(Math.random() * randomQuotes.length)



    document.getElementById("quotes").innerHTML = randomQuotes[randomNum]

    console.log(randomQuotes);



})