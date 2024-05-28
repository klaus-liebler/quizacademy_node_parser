import { readFile, readFileSync, writeFileSync } from 'node:fs';
interface QuizEvent{
    questions:Array<Question>
}

interface QuizacademyFile{
    events:Array<QuizEvent>
}

const completeFile = JSON.parse(readFileSync("qa-course-RT.json").toString()) as QuizacademyFile
interface Answer {
    text: string;
    is_right: boolean;
}

interface Question {
    text: string;
    answers: Answer[];
}

// Function to display questions and their correct answers
function displayQuestionsAndAnswers(file: QuizacademyFile): void {
    var content=""
    file.events.forEach(ev=>{
        ev.questions.forEach(question => {
            content+=(`Frage: ${question.text}\n`);
            question.answers.forEach(answer => {
                content+=(`- Lösung "${answer.text}" ist ${answer.is_right?"richtig":"falsch"}\n`);
                
            });
            content+="\n"
        });
    })
    writeFileSync("fragen.txt", content)
    
}

// Call the function
displayQuestionsAndAnswers(completeFile);