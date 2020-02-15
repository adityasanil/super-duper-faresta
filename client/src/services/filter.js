export function filter(j) {
  const element = [];

  for (let i = 0; i < j.length; i++) {
    element.push(Object.values(j[i]));
  }

  const count = {};
  element.forEach(function(i) {
    count[i] = (count[i] || 0) + 1;
  });
  return count;
}
