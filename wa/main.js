const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = "It was 64 fahrenheit outside and there was a rainbow, so :insertx: went to look for the end of a rianbow. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and the rainbow was gone.";

let insertX = ["leprechaun", "Easter Bunny", "Father Christmas"];
let insertY = ["the end of the rainbow", "the pot of gold","the White House"];
let insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into gold"];

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

function result() {

    let newStory = storyText
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace (":insertx:", xItem).replace("insertx",xItem).replace(":inserty:", yItem).replace(":insertz:", zItem);

  if(customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300*0.07).toString() + ' stone';
    const temperature =  Math.round((94-32)/1.8).toString() + ' centigrade';
    newStory = newStory.replace('94 fahrenheit',temperature).replace('300 pounds',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

randomize.addEventListener('click', result);
