var count = 0;
var name;
var height;
var weight;
var problem;
function getBotResponse(input) {
  //rock paper scissors
  if (input == "reset") {

    count = 0;
    speakText("okay lets start again, ");
    speakText("what is your name?");
    return "okay lets start again, what is your name?";
  }
  if (input == ""){
    
    speakText("Sorry, I didn't Get it, Please write again");
    return "Sorry, I didn't Getit, Pls write again";    
  }
  count++;
  if (count == 1) {
    name = input;
    speakText("Hii, " + input);
    speakText("what is your height ?");
    return `what is your height in cm?`;

  } 
  else if (count == 2) {
    height = parseFloat(input) / 100;
    speakText("So Your Height is" + input + "centimeter");
    speakText("what is your weight ?");
    return `what is your weight ?`;

  }
  else if (count == 3) {
    weight = parseFloat(input);
    speakText("So Your Weight is" + input + "kg");

    var bmi = (weight / (height * height)).toFixed(2);
    var value = `your bmi is ${bmi}`;

    if (bmi <= 16.00) {
      var ans =  `Not Only, You are Under-Weight`;
      var ans2 = `Even, You are Suffering from Severe Thinness_increase your body mass`;
    }
    else if (bmi >16.00 && bmi <= 18.00 ){
      var ans = `You are Under-Weight`;
      var ans2 = `increase your Bodymass-Index`;
    }
    else if (bmi >18.00 && bmi <= 18.50 ){
      var ans =  `You are on Border-Line of Under-Weight`;
      var ans2 = `Try to slightly increase your Bodymass-Index`;
    }
    else if (bmi >18.50 && bmi <= 25.00 ){
      var ans =  `Relax, You are Normal`;
      var ans2= `try to maintain your Bodymass-Index`;
    }
    else{
      var ans =  `You are OverWeight`;
      var ans2 = `try to lower your Bodymass-Index`;
    }

    speakText(ans + ans2);
    speakText("Do you have any problem ?");
    return ans+ `_`+ ans2 + '_'+ 'Do you have any problem ?';

  } 
  else if (count == 4) {
    problem = input.toLowerCase().replace(/\s/g, "");
    speakText("You have" + input );
    
    if (problem == "no") {
      
    } 
    else if (problem in data) {
      var arr = data[problem];
      var index = Math.floor(Math.random() * arr.length);

      return `for ${input}_${
        speakText(arr[index]),
        arr[index]
      }`;
    }
    else {
      return `Sorry i do not understand Your Problem - ${input} ${"\u{1F622}"}`;
    }
  }
}
