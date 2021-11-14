(function(){
    function buildquiz()
    {
        const output=[];
        myquestions.forEach(
            (currentquestion,questionnumber) => {
            const answers=[];
            for(letter in currentquestion.answers){
                answers.push(
                    `<label>
                    <input type="radio" name="question${questionnumber}" value="${letter}">
                    ${letter} :
                    ${currentquestion.answers[letter]}
                    </label> `
                );
            
            }
            output.push(
                `<div class="question">${currentquestion.question}</div>
                <div class="answers">${answers.join('')}</div>`
            );
        }
     );
     quizcontainer.innerHTML=output.join(''); 
    }
    function showresult()
    {
        const answercontainers=quizcontainer.querySelectorAll('.answers');
        let numcorrect=0;
        myquestions.forEach(
        (currentquestion,questionnumber)=>{
            const answercontainer=answercontainers[questionnumber];
            const selector=`input[name=question${questionnumber}]:checked`;
            const useranswer=(answercontainer.querySelector(selector)||{}).value;
            if(useranswer===currentquestion.correctAnswer)
            {
                numcorrect++;
                answercontainers[questionnumber].style.color="green";

            }
            else{
                answercontainers[questionnumber].style.color="red";
            }
        });
        
        resultcontainer.innerHTML=`${numcorrect} out of ${myquestions.length}`;
        
    }
    const quizcontainer=document.getElementById("quiz");
    const resultcontainer=document.getElementById("result");
    const submitbutton=document.getElementById("submit");
    const myquestions=[
        {
            question:"who invented javascript ?",
            answers:{
                a:"Douglas crockford",
                b:"Sheryl sandberg",
                c:"Grendan Fich"
            },
            correctAnswer:"c"
        },
        {
            question:"Which one of these is a javascript package manager?",
            answers:{
                a:"Node.js",
                b:"typecsript",
                c:"npm"
            },
            correctAnswer:"c"
        },
        {
            question:"which tool can you use to ensure code quality?",
            answers:{
                a:"angular",
                b:"jquery",
                c:"requirejs",
                d:"eslint"
            },
            correctAnswer:"d"
        },
    ]
    buildquiz();
    submitbutton.addEventListener('click',showresult);

})();