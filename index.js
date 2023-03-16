// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}

wrapGifts(gifts);

const writeCards = (arr, event) => {
    const messages = []
    for(let i = 0; i < arr.length; i++) {
        const greetingMessage = `Thank you, ${arr[i]}, for the wonderful ${event} gift!`
        messages.push(greetingMessage)           
    }

    return messages;
}
    
    function countDown(num){  
        if(num < 0){ return; }  
        console.log(num);  
        return countDown(num - 1);  
    }  
    countDown(num);