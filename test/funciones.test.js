// 1.
function crearContador(max) {
  if (!Number.isInteger(max) || max <= 0) {
    throw new Error("max debe ser entero positivo");
  }

  let valor = 0;

  return {
    incrementar() {
      if (valor >= max) {
        throw new Error("Se alcanzó el límite");
      }
      valor++;
      return valor;
    },
    obtener() {
      return valor;
    },
    reset() {
      valor = 0;
    }
  };
}

// 2.
function calcularMediana(nums) {
  if (!Array.isArray(nums) || nums.length === 0) {
    throw new Error("Arreglo inválido");
  }

  const ordenado = [...nums].sort((a, b) => a - b);
  const mitad = Math.floor(ordenado.length / 2);

  if (ordenado.length % 2 === 0) {
    return (ordenado[mitad - 1] + ordenado[mitad]) / 2;
  }

  return ordenado[mitad];
}

// 3.
function eliminarDuplicados(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Debe ser arreglo");
  }

  return [...new Set(arr)];
}

// 4.
function capitalizarPalabras(texto) {
  if (typeof texto !== "string") {
    throw new TypeError("Debe ser texto");
  }

  return texto
    .split(" ")
    .map(p => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ");
}

// 5.
function esEmailValido(email) {
  if (typeof email !== "string") {
    throw new TypeError("Email debe ser string");
  }

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// 6.
function esPalindromo(texto) {
  if (typeof texto !== "string") {
    throw new TypeError("Debe ser texto");
  }

  const limpio = texto.replace(/[^a-z0-9]/gi, "").toLowerCase();
  return limpio === limpio.split("").reverse().join("");
}

// 7.
function promedio(numeros) {
  if (!Array.isArray(numeros)) {
    throw new TypeError("Se esperaba un arreglo");
  }

  if (numeros.length === 0) {
    throw new Error("El arreglo no puede estar vacío");
  }

  const suma = numeros.reduce((acc, n) => acc + n, 0);
  return suma / numeros.length;
}

// 8.
function esPar(numero) {
  if (typeof numero !== "number") {
    throw new Error("Se esperaba un número");
  }
  return numero % 2 === 0;
}

// 9.
function obtenerMayor(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Debe ser un arreglo");
  }

  if (arr.length === 0) {
    throw new Error("El arreglo está vacío");
  }

  return Math.max(...arr);
}

// 10.
function esperar(ms) {
  if (typeof ms !== "number") {
    throw new TypeError("ms debe ser número");
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Esperaste ${ms} ms`);
    }, ms);
  });
}