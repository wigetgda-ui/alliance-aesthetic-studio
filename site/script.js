function toggleMenu(){
  const nav = document.getElementById('nav');
  const visible = getComputedStyle(nav).display !== 'none';
  nav.style.display = visible ? 'none' : 'flex';
}
document.querySelectorAll('.acc-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const panel = btn.nextElementSibling;
    const open = panel.style.display === 'block';
    document.querySelectorAll('.acc-panel').forEach(p=>p.style.display='none');
    panel.style.display = open ? 'none' : 'block';
  });
});
document.getElementById('year').textContent = new Date().getFullYear();