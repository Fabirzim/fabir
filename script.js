
onload=function(){
  let nome=localStorage.getItem('nome')
  let h1=document.getElementById('nome')
  h1.innerHTML=nome
}


function mudar(element){
  let cor=element.value
  let h1=document.getElementById('nome')
  h1.innerHTML=cor


  localStorage.setItem('nome',cor)
}