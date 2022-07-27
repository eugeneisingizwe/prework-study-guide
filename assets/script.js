
var topics = ['HTML', 'css', 'Git', 'javaScript'];

var randomTopic = topics[Math.floor(Math.random() * topics.length)];
function listTopics() {


for (var x = 0; x < topics.length; x++) {

    console.log(topics[x]);
}
}

function selectTopic() {

if (randomTopic ==='HTML') {
    console.log("lets study HTML!");
}else if (randomTopic === 'CSS') {
    console.log("lets study CSS!");
}else if (randomTopic === 'Git'){
    console.log("Lets study Git!");
}else if (randomTopic === 'javaScript'){
    console.log("lets study javeScript!");
}else{
    console.log('please try again!');
}
}

console.log('Here are the topics we learned through Prework');
listTopics();
console.log('Which topic should we study first?');
selectTopic();




/*
var shapes =["triangle","quare","pentagon","circle"];
for(var x = 0; x < shapes.length; x++) {
    console.log(shapes[x])
}
*/