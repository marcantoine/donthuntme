


if((window.location.search.indexOf('?ref=producthunt') > -1) || (document.referrer.indexOf('producthunt') > -1)){
  var host = 'https://donthuntme.com'
  var ref = document.referrer
  redirectToPH()
}

function redirectToPH(){

  let phb = document.createElement('div')
  phb.id = 'phb'

  setAttributes(phb, {'id' : 'phb', 'style' :
  '    z-index: 99999;' +
  '    background: rgba(0,0,0,.7);' +
  '    top: 0;' +
  '    bottom: 0;' +
  '    left: 0;' +
  '    right: 0;' +
  '    display: flex;' +
  '    justify-content: center;' +
  '    align-items: center;'+
  '    position: fixed;'})

  let p = pC()

  phb.appendChild(p)

  document.body.appendChild(phb)

}

function setAttributes(e, attrs) {
  for(var a in attrs) {
    e.setAttribute(a, attrs[a])
  }
}

function pC(){
  let p = document.createElement('div')
  setAttributes(p, {'style' :
  '    background: #fff;' +
  '    border-radius: 3px;'+
  '    box-shadow: 1px 0 6px 0 rgba(0,0,0,.3);' +
  '    box-sizing: border-box;' +
  '    max-width: 1100px;' +
  '    width: 90vw;' +
  '    overflow: auto;' +
  '    display:flex;' +
  '    flex-wrap: wrap;'+
  '    justify-content:space-around;' +
  '    align-items:center;' +
  '    padding: 80px 20px;'})

  let te = text()
  let img = imge()

  p.appendChild(te)
  p.appendChild(img)

  return(p)
}

function text(){
  let te = document.createElement('div')
  setAttributes(te, {'style' :'width: 460px; margin-bottom: 40px;'})

  let h = document.createElement('h2')
  h.textContent = 'This product is not ready'
  setAttributes(h, {'style' :
  '    line-height: 32px;' +
  '    margin-bottom: 15px;' +
  '    font-weight: 700;' +
  '    font-size: 26px;' +
  '    color: #000;' +
  '    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;'})
  te.appendChild(h)

  let sh = document.createElement('p')
  sh.textContent = 'Dear Hunter, thank you for checking this website. Sadly, it is not ready to launch yet. Please come back later!'
  setAttributes(sh, {'style' :
  '    font-size: 15px;' +
  '    line-height: 25px;' +
  '    color: #999;' +
  '    font-weight: 200;' +
  '    margin: 10px 0 20px;' +
  '    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;'})
  te.appendChild(sh)

  let red = document.createElement('p')
  red.textContent = 'You will be redirected back in '
  setAttributes(red, {'style' :
  '    font-size: 11px;' +
  '    line-height: 16px;' +
  '    color: #000;' +
  '    text-transform: uppercase;'+
  '    font-weight: 600;' +
  '    margin: 0 20px 0 0;' +
  '    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;'})

  let t = timer()
  red.appendChild(t)
  te.appendChild(red)

  return(te)

}
function imge(){
  let d = document.createElement('div')
  let img = document.createElement('img')
  setAttributes(img, {'src' : host+'/donthuntme.png', 'style' :'width: 240px;'})
  d.appendChild(img)
  return(d)
}

function timer(){
  let t = document.createElement('span')
  setAttributes(t, {'style' : 'color: #da552f'})
  let l = 6;
  let ti = setInterval(function(){
    t.textContent = --l
    if(l <= 1){
      clearInterval(ti)
      ref ? window.location = ref : window.location = "https://www.producthunt.com"
    }
  },1000)
  return(t)
}
