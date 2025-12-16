export function exemploArrays() {
  const numeros = [1, 2, 3, 4, 5];
  const dobrados = numeros.map((n) => n * 2);
  const filtrados = numeros.filter((n) => n > 2);
  const soma = numeros.reduce((acc, n) => acc + n, 0);

  return {
    title: "Arrays",
    subtitle: "Transformations with map, filter, and reduce",
    description: "See how to iterate over and transform collections using the most common array methods.",
    code: `
const numeros = [1, 2, 3, 4, 5];

numeros.map(n => n * 2);    // ${JSON.stringify(dobrados)}
numeros.filter(n => n > 2); // ${JSON.stringify(filtrados)}
numeros.reduce((acc, n) => acc + n, 0); // ${soma}
    `.trim(),
    output: {
      numeros,
      dobrados,
      filtrados,
      soma,
    },
  };
}
