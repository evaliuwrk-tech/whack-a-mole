document.addEventListener('DOMContentLoaded',()=>{
  const grid=document.querySelector('.game-grid');
  const cards=[...document.querySelectorAll('.game-card')];
  if(!grid||!cards.length)return;
  const train=document.createElement('div');
  train.className='train-runner';
  train.setAttribute('aria-hidden','true');
  train.innerHTML='<i class="train-smoke s1"></i><i class="train-smoke s2"></i><i class="train-smoke s3"></i><span class="train-engine">🚂</span>';
  grid.append(train);
  let active=cards[0];
  const moveTo=card=>{active=card;train.style.top=`${card.offsetTop-32}px`};
  cards.forEach(card=>{
    card.addEventListener('pointerenter',()=>moveTo(card));
    card.addEventListener('focusin',()=>moveTo(card));
  });
  moveTo(active);
  addEventListener('resize',()=>moveTo(active));
});
