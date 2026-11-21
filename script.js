'use strict';
const menu=document.querySelector('.menu-toggle');
const nav=document.getElementById('navigation');
function closeMenu(){menu.setAttribute('aria-expanded','false');nav.classList.remove('open');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');nav.classList.toggle('open',open);});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
document.getElementById('year').textContent=String(new Date().getFullYear());
const form=document.getElementById('projectForm'),result=document.getElementById('requestResult'),text=document.getElementById('requestText'),send=document.getElementById('sendRequest');
form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const data=new FormData(form),name=String(data.get('name')||'').trim(),business=String(data.get('business')||'').trim();if(!name||!business)return;
 text.value=`Olá, Jhonny Sites! Quero conhecer a oferta de lançamento de R$ 249.\n\nNome: ${name}\nNegócio: ${business}\nÁrea: ${data.get('segment')}\nIdeia: ${String(data.get('idea')||'').trim()||'Gostaria de conversar sobre meu projeto.'}\n\nQuero confirmar o escopo, o prazo e os custos de domínio e hospedagem antes de contratar.`;
 send.href='https://wa.me/5541995976826?text='+encodeURIComponent(text.value);result.hidden=false;document.getElementById('copyStatus').textContent='';send.focus();});
document.getElementById('copyRequest').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(text.value);document.getElementById('copyStatus').textContent='Mensagem copiada.';}catch(_){text.focus();text.select();document.getElementById('copyStatus').textContent='Selecione e copie a mensagem acima.';}});
form.addEventListener('input',e=>{if(e.target!==text){result.hidden=true;send.removeAttribute('href');}});
