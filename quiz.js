const correctAnswers = {
        q1: 'paris',
        q2: 'vinci',
        q3: '4',
        q4: 'jupiter',
        q5: 'hydrogene'
};

    document.getElementById('quizForm').addEventListener('submit', function(e) {
        e.preventDefault();
        let score = 0;
        const formData = new FormData(this);

        for(let [question, answer] of formData.entries()) {
            if(correctAnswers[question] === answer) {
                score++;
            }
        }

        document.getElementById('result').innerHTML = `Votre score est de ${score}/5!`;
    });
