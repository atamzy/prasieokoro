function shownavside(){
  const navside = document.querySelector(`.navside`)
  navside.style.display=`flex`
}

function delnavside(){
  const navside = document.querySelector(`.navside`) 
  navside.style.display = `none`

}

function boumceEffect(button){
  button.classList.remove('bounce');
  
  void button.offsetWidth;
  button.classList.add('bounce')
}

function myfuntion(){
  window.location.href ="experience/index.html";
}