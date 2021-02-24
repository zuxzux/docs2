const units = {
    'Один': 1,
    'Два': 2,
    'Три': 3,
    'Четыре': 4,
    'Пять': 5,
    'Шесть': 6,
    'Семь': 7,
    'Восемь': 8,
    'Девять': 9
}
const numbers = {
    'Десять': 10,
    'Одиннадцать': 11,
    'Двенадцать': 12,
    'Тринадцать': 13,
    'Четырнадцать': 14,
    'Пятнадцать': 15,
    'Шестнадцать': 16,
    'Семнадцать': 17,
    'Восемнадцать': 18,
    'Девятнадцать': 19
}
const tens = {
    'Двадцать': 20,
    'Тридцать': 30,
    'Сорок': 40,
    'Пятьдесят': 50,
    'Шестьдесят': 60,
    'Семьдесят': 70,
    'Восемьдесят': 80,
    'Девяносто': 90
}
const sot = {
    'Сто': 100,
    'Двести': 200,
    'Триста': 300,
    'Четыреста': 400,
    'Пятьсот': 500,
    'Шестьсот': 600,
    'Семьсот': 700,
    'Восемьсот': 800,
    'Девятьсот': 900

}
let phrase = 'Мой номер Восемь Девятьсот Один Триста Сорок Два Пятнадцать Двадцать Один'
let massive = (phrase.split(' '))

let b = (Object.keys(units))

let c = (Object.keys(numbers))

let d = (Object.keys(tens))

let h = (Object.keys(sot))
let g = []

for (values in massive) {
    let a = massive[values];
    if (b.includes(a)|| c.includes(a) || d.includes(a) || h.includes(a))  {
        g.push(a);
      
    } else {
        //console.log('ne',a)
    }
    

}
//console.log(g)

let r = ''

let y = 0

let k = 0

g.forEach(v => {
    let val = units[v];
        
    if (val === undefined) {
        val = numbers[v];
        
    } if (val === undefined) {
        val = tens[v];
        
    } if (val === undefined) {
        val = sot[v];
        
    } 
    //r+=val;
    if (val <=10) {
        if (y !=0) {
            y+=val;
            r+=y;
            y=0;
        } else {
            r+=val;
        } 
    } else {
        y+=val;      
    } console.log(r, y);
})
console.log(r)




//console.log(g[0],g[1]+e[2],e[3]+e[4]+e[5],e[6],e[7]+e[8])

