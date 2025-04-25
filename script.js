function type(text, index, container_id) {
    const textContainer = document.getElementById(container_id);
    
    if (index < text.length) {
        textContainer.innerText += text[index];

        setTimeout(() => { type(text, index + 1, container_id) }, 200);
    }

    clearTimeout();
    return;
    
}


function remove(container_id) {
    const textContainer = document.getElementById(container_id);
    let text = textContainer.innerText;
    let index = text.length;
    
    function deleteChar() {
        if (index > 0) {
            index--;
            textContainer.innerText = text.substring(0, index);
            setTimeout(deleteChar, 200);
        }
    }

    deleteChar();
}
const text = ["Ibrahim", "Benyahia", "Web Developer"];
let i = 0;

type(text[i], 0,"textContainer")

setInterval(()=>{
    const length = document.getElementById("textContainer").innerText.length;
    if(length>0){
        remove("textContainer");
        
        
    }
    else {
        type(text[i], 0,"textContainer");
    }

    if(i == text.length - 1){
        i = 0;
    }
    else {
        i++
    }
    
}, 4000);





