
(()=>{'use strict';
const root=document.documentElement,body=document.body,nav=[...document.querySelectorAll('.navlink')],chapters=[...document.querySelectorAll('[data-chapter]')];
let font=18,step=0,audio=null,osc=null,gain=null;
document.getElementById('textUp').addEventListener('click',()=>{font=Math.min(24,font+1);root.style.setProperty('--text',font+'px')});
document.getElementById('textDown').addEventListener('click',()=>{font=Math.max(14,font-1);root.style.setProperty('--text',font+'px')});
document.getElementById('contrast').addEventListener('click',e=>{body.classList.toggle('high-contrast');e.currentTarget.setAttribute('aria-pressed',body.classList.contains('high-contrast'))});
document.getElementById('motion').addEventListener('click',e=>{body.classList.toggle('reduce-motion');e.currentTarget.setAttribute('aria-pressed',body.classList.contains('reduce-motion'))});
const updateRoute=()=>{const current=location.hash||'#inicio';nav.forEach(a=>{const on=a.getAttribute('href')===current;a.classList.toggle('active',on);if(on)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')})};
window.addEventListener('hashchange',updateRoute);updateRoute();
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){nav.forEach(a=>{const on=a.hash==='#'+entry.target.id;a.classList.toggle('active',on);if(on)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')});entry.target.animate([{opacity:.72,transform:'translateY(16px)'},{opacity:1,transform:'translateY(0)'}],{duration:550,easing:'ease-out'})}})},{threshold:.22});
chapters.forEach(ch=>observer.observe(ch));
document.querySelectorAll('.swatch').forEach(btn=>btn.addEventListener('click',async()=>{const hex=btn.dataset.hex;try{await navigator.clipboard.writeText(hex);document.getElementById('copyStatus').textContent='Copiado: '+hex}catch{document.getElementById('copyStatus').textContent='Código HEX: '+hex+' (selecciónalo y cópialo)'}}));
const showLogo=()=>{for(let i=1;i<=4;i++)document.getElementById('lg'+i).classList.toggle('show',i<=step);document.getElementById('logoStatus').textContent='Etapa '+step+' de 4';document.getElementById('logoStep').textContent=step===4?'Construcción completa':'Construir siguiente elemento'};
document.getElementById('logoStep').addEventListener('click',()=>{step=Math.min(4,step+1);showLogo()});
document.getElementById('logoReset').addEventListener('click',()=>{step=0;showLogo()});
const soundBtn=document.getElementById('sound');
soundBtn.addEventListener('click',async()=>{try{if(!audio){const Ctx=window.AudioContext||window.webkitAudioContext;if(!Ctx)throw new Error('Audio no disponible');audio=new Ctx();osc=audio.createOscillator();gain=audio.createGain();const filter=audio.createBiquadFilter();osc.type='sine';osc.frequency.value=110;filter.type='lowpass';filter.frequency.value=260;gain.gain.value=0;osc.connect(filter).connect(gain).connect(audio.destination);osc.start()}if(audio.state==='suspended')await audio.resume();const playing=soundBtn.getAttribute('aria-pressed')!=='true';gain.gain.setTargetAtTime(playing?.018:0,audio.currentTime,.6);soundBtn.setAttribute('aria-pressed',String(playing));soundBtn.textContent=playing?'♫ Ambiente ON':'♫ Ambiente'}catch(err){soundBtn.textContent='Audio no disponible'}})
})();
