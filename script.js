const startWashing = document.getElementById("start-wash");
const endWashing = document.getElementById("end-wash");
const state = document.getElementById("state");
const washerImg = document.getElementById("washer");

function startWash (){
  startWashing.addEventListener('click', () => {
    state.textContent = 'Washing has started!';
    washerImg.src ="/images/washing-washer.png"; 
    console.log("Wash Starting");
  });
}

function endWash (){
  endWashing.addEventListener('click', ()=> {
state.textContent = 'Washing has ended';
washerImg.src = "/images/deafult-washer.png";
console.log("Wash is ending ");
  })
}

 setTimeout(() => {
  state.textContent = "Waiting for a load to Wash!";
 }, 3000);
startWash();
endWash();


