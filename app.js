const clock = document.querySelector('.clock');

const tick = () => {
  const now = new Date();

  const h = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
  const m = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
  const s = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds();

  const html = `<span>${h}</span> : <span>${m}</span> : <span>${s}</span>`;

  clock.innerHTML = html;
}

setInterval(tick, 1000)