const menu=document.querySelector('.menu'),nav=document.querySelector('nav');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation')});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));document.querySelectorAll('[data-scroll]').forEach(b=>b.addEventListener('click',()=>{const track=document.querySelector('.service-track');track.scrollBy({left:Number(b.dataset.scroll)*track.clientWidth*.8,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'})}));const viewer=document.querySelector('#viewer');document.querySelectorAll('.project').forEach(b=>b.addEventListener('click',()=>{viewer.querySelector('img').src=b.dataset.image;viewer.querySelector('p').textContent=b.dataset.caption;viewer.showModal()}));viewer.querySelector('.close').addEventListener('click',()=>viewer.close());viewer.addEventListener('click',e=>{if(e.target===viewer)viewer.close()});const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;if(!reduced){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.1});document.querySelectorAll('.section-top,.steps article,.about>div,.industries article').forEach(el=>{el.classList.add('reveal');observer.observe(el)});const counts=new IntersectionObserver(entries=>entries.forEach(e=>{if(!e.isIntersecting)return;const el=e.target,end=Number(el.dataset.count),start=performance.now();function tick(now){const t=Math.min((now-start)/1300,1);el.textContent=Math.round(end*(1-(1-t)**3)).toLocaleString('en-US')+'+';if(t<1)requestAnimationFrame(tick)}requestAnimationFrame(tick);counts.unobserve(el)}),{threshold:.6});document.querySelectorAll('[data-count]').forEach(el=>counts.observe(el))}

// Gentle hero depth, only for precise pointers and enabled motion.
const hero=document.querySelector('.hero');
const motionPreference=matchMedia('(prefers-reduced-motion: reduce)');
hero.addEventListener('pointermove',event=>{
 if(motionPreference.matches||!matchMedia('(hover: hover) and (pointer: fine)').matches)return;
 const box=hero.getBoundingClientRect(),x=(event.clientX-box.left)/box.width-.5,y=(event.clientY-box.top)/box.height-.5;
 hero.style.setProperty('--depth-x',`${x*10}px`);hero.style.setProperty('--depth-y',`${y*8}px`);
 hero.style.setProperty('--thread-x',`${x*4}px`);hero.style.setProperty('--thread-y',`${y*3}px`);
});
function resetDepth(){['--depth-x','--depth-y','--thread-x','--thread-y'].forEach(p=>hero.style.removeProperty(p))}
hero.addEventListener('pointerleave',resetDepth);
const transformation=document.querySelector('.transformation'),stageItems=[...document.querySelectorAll('.conversion-stages li')],status=document.querySelector('.conversion-status>span');
const stageNames=['ORIGINAL ARTWORK','STITCH PATHS','DIGITIZED PREVIEW','FINISHED EMBROIDERY'];
const clamp=x=>Math.min(1,Math.max(0,x));
let scrollFrame=0;
function updateTransformation(){
 scrollFrame=0;
 if(motionPreference.matches){status.textContent='04 / FINISHED EMBROIDERY';resetDepth();return;}
 const rect=transformation.getBoundingClientRect(),top=innerWidth<=760?76:94;
 const p=clamp((top-rect.top)/(rect.height-innerHeight+top));
 const phase=Math.min(3,Math.floor(p*4));
 stageItems.forEach((li,index)=>li.classList.toggle('active',index===phase));
 status.textContent=`0${phase+1} / ${stageNames[phase]}`;
 const style=transformation.style;
 style.setProperty('--original-opacity',1-clamp((p-.18)/.1));
 style.setProperty('--paths-opacity',clamp((p-.17)/.08)*(1-clamp((p-.48)/.12)));
 style.setProperty('--outline-offset',String(1400*(1-clamp((p-.2)/.22))));
 style.setProperty('--path-offset',String(1400*(1-clamp((p-.25)/.24))));
 style.setProperty('--digitized-opacity',clamp((p-.48)/.13)*(1-clamp((p-.73)/.12)));
 style.setProperty('--finished-opacity',clamp((p-.73)/.16));
 style.setProperty('--fabric-opacity',clamp((p-.68)/.18));
 style.setProperty('--progress',`${p*100}%`);
}
function scheduleTransformation(){if(!scrollFrame)scrollFrame=requestAnimationFrame(updateTransformation)}
addEventListener('scroll',scheduleTransformation,{passive:true});addEventListener('resize',scheduleTransformation);motionPreference.addEventListener('change',scheduleTransformation);updateTransformation();
