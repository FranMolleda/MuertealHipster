window.onload = () =>{
  document.getElementById('green').onclick=()=>{
    document.getElementById('init').setAttribute('class', '🍺')
    Game.init()
  }
  document.getElementsByClassName('reset').onclick=()=>{
    document.getElementById('init').setAttribute('class', '🍺')
    Game.init()
  }
}