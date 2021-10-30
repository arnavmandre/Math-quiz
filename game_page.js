player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score = 0 ;
player2_score = 0 ; 
document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "question turn :" + player1_name;
document.getElementById("player_answer").innerHTML = "Answer turn :" + player2_name ; 

function send(){

   Number1 = document.getElementById("Number1").value;
   Number2 = document.getElementById("Number2").value;
   word = parseInt(Number1)*parseInt(Number2);
    question_word = "<h4 id='word_display'>Q."+ Number1 + "X" + Number2 + "</h4>";
    input_box = "<br> answer: <input type='text' id='input_check_box'>";
    check_button = "<br><br> <button class ='btn btn-info' onclick = 'check()'>Check</button>";
    row = question_word + input_box + check_button ;
    document.getElementById("output").innerHTML = row ;
    document.getElementById("Number1").value = "";
    document.getElementById("Number2").value = "";


}

question_turn = "Player1"
Answer_turn = "Player2"

function check(){
    answer = document.getElementById("input_check_box").value ;

    if(answer == word ){
        if(Answer_turn == "Player1"){
            player1_score = player1_score+1;
            document.getElementById("player1_score").innerHTML = player1_score;

        }
        else{
            player2_score = player2_score + 1 
            document.getElementById("player2_score").innerHTML = player2_score
        }
    }
    if(question_turn == "Player1"){
        question_turn = "Player2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
        
    }
    else{
        question_turn = "Player1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    }

    if(Answer_turn == "Player1"){
        Answer_turn = "Player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
        
    }
    else{
        Answer_turn = "Player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
        
    }
    document.getElementById("output").innerHTML = ""
}