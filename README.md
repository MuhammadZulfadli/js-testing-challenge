# Functional Programing Paradigm Dan Unit Testing

## Functional Programing Paradigm
Functional Programing Paradigm merupakan style dalam penulisan sebuah function yang menekankan pada komputasi didalam sebuah fungsi matematis dan menghindari perubahan data. Contohnya dalam membuat sebuah function ternyata menggunakan variable dari luar dan itu kurang baik.

Dalam FPP hindari hal seperti : 
- Penggunaan variable let dan var (mutable varibale)
- perubahan pada sebuah array, object, map maupun set, disarankan membuat baru.
- hindari melakukan looping pada function

#### Pure Function
Sebuah funtion yang bersifat pure tanpa mengubah value dari sebuah variable. Pure function tidak menggunakan variable dari luar dan hanya menggunakan variable dari parameter.

#### Callback dan High Order Function
> Function yang meminta parameter sebuah function dan menjalankan function tersebut

#### Rekursif Function
> Sebuah function yang memanggil dirinya sendiri. 

Memungkinkan untuk menulis fungsi dengan ekspektasi hasil yang sama namun caranya berbeda. Ini akan berhubungan nanti tentang bagaimana kita menstrukturkan langkah logika kita, atau algorithm.

#### Array Method
> Dalam memanipulasi array, harus menggunakan method bawaan seperti filter, map, reduce, sort, forEach dll



## Unit Testing
> Unit testing membantu memastikan apakah function yang akan diimplementasi sesuai dengan desain yang telah ditentukan sebelumnya.

### Unit testing Tools
* [Jest](https://jestjs.io/en/)
* [Mocha/Chai](https://mochajs.org/)
* [Jasmine](https://jasmine.github.io/)
* [Ava](https://github.com/avajs/ava)
* [Tape](https://github.com/substack/tape)

#### Jest
```sh
$ npm i --save-dev jest
```
#### Konfigurasi
Konfigurasikan file package.json menjadi seperti ini : 
```sh
{
  "name": "package.json",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "directories": {
    "test": "test"
  },
  "scripts": {
    "test": "jest"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "jest": "^25.1.0"
  }
}
```


#### Implementasi 
Implementasi unit testing dengan menggunakan tools jest. Buat folder src dan isikan file 01.js didalamnya. Dan folder test, isikan file 01.test.js

01.js
```sh
function sum(a, b) {
    return a + b;
  }
  module.exports = sum;
```

01.test.js
```sh
const sum = require('../src/01');
test('adds 4 + 2 to equal 6', () => {
  expect(sum(4, 2)).toBe(6);
});
```

Hasilnya 
```sh
 PASS  test/01.test.js
  √ adds 1 + 2 to equal 3 (4ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.576s
Ran all test suites.

D:\fadli\bootcamp\Challenge\challenge3  (package.json@1.0.0)
````

## TDD
TDD (Test Driven Development) merupakan metode yang mengedepankan testing terlebih dahulu dan kemudian diimplementasikan.

### Proses pada TDD
- Skenario testing pada setiap komponen.
- Development skenario komponen sampai lulus testing.
- Menyusun semua komponen yang sudah testing.
- Menggabungkan semua testing hingga sistem selesai. 

## BDD
BDD (Behavior Driven Test) merupakan kebalikan dari TDD. Yaitu lebih mengarah ke hasil akhir dari suatu sistem dengan harapan bahwa sistem berjalan sesuai dengan harapan client.

### Proses pada BDD
- Skenario testing pada setiap behavior.
- Memastikan sudah lulus pada behavior test.
- Deployment.


