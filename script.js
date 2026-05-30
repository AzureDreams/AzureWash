const startWashing = document.getElementById("start-wash");
const endWash = document.getElementById("end-wash");
const state = document.getElementById("state");
const washerImg = document.getElementById("washer");

function startWash (){
  startWashing.addEventListener('click', () => {
    state.textContent = 'Washing has started!';
    washerImg.src ="/images/washing-washer.png"; 
    console.log("Wash Starting");
  });
}

startWash();

