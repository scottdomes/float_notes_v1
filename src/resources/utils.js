export const scrollTo = (element = { scrollTop: 0 }, to = 0, duration = 500) => {
  console.log('here')
  if (duration <= 0) return;
  const difference = to - element.scrollTop;
  const perTick = difference / duration * 10;

  setTimeout(() => {
    element.scrollTop += perTick;
    if (element.scrollTop === to) return;
    this.scrollTo(element, to, duration - 10);
  }, 10);
}