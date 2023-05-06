// Transformación de SEGUNDOS a HORAS, MINUTOS y SEGUNDOS

// segundos => hms
// 15       => 00:00:15
// 1500     => 00:25:00
// 1505     => 00:25:05
// 21505    => 05:58:25

// 150ms = 0.15s

// 1000ms = 1s
// 1000mm = 1m

let segundos = 21505;

// Intento #1
let h1 = segundos / 3600;
let m1 = segundos / 60;
let s1 = segundos;

console.log(h1, m1, s1);

// Intento #2
let h2 = Math.floor(segundos / 3600)
let m2 = (segundos / 60) % 60;
let s2 = segundos % 60;

console.log(h2, m2, s2); // h2, s2 !OKEY

// Intento #3
let h3 = Math.floor(segundos / 3600)
let m3 = Math.floor((segundos / 60) % 60);
let s3 = segundos % 60;

console.log(h3, m3, s3); // h3, m3, s3 !OKEY
