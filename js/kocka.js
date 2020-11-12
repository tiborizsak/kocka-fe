/*$(document).ready(function () {
   $("div").after('LOWPHASS');
});*/

/*var johnGame1 = 89;
var johnGame2 = 120;
var johnGame3 = 103;

var mikeGame1 = 70;
var mikeGame2 = 97;
var mikeGame3 = 119;

var maryGame1 = 80;
var maryGame2 = 70;
var maryGame3 = 82;

var johnGameAvg = (johnGame1 + johnGame2 + johnGame3)/3;
var mikeGameAvg = (mikeGame1 + mikeGame2 + mikeGame3)/3;
var maryGameAvg = (maryGame1 + maryGame2 + maryGame3)/3;

console.log(johnGameAvg, mikeGameAvg, maryGameAvg);

if (johnGameAvg > mikeGameAvg) {
    console.log("John\'s team is the winner with average: ", johnGameAvg);
} else if (johnGameAvg > maryGameAvg) {
    console.log("Mike\'s team is the winner with average: ", mikeGameAvg);
} else {
    console.log("Mary\'s team is the winner with average: ", maryGameAvg);
}*/

/*var lista = ['fgfg', 'dfsdfsd', 'afsdf'];

lista.push('push'); //a lista végére tesz be egy elemet
lista.unshift('unshift'); //a lista elejére tesz be egy elemet
lista.pop();
console.log(lista.indexOf('unshift'));

console.log(lista);

var benneVan = lista.indexOf('unshift') === -1 ? 'Benne van a listaban' : 'Nincs benne a listaban';
console.log(benneVan);*/

/*var paidBills = [124, 1231, 46];

var franciaBulldog = {
    fajta: 'kutya',
    tipus: 'Francia bulldog',
    marmagassag: 15,
    suly: 10,
    agressziv: false,
}

console.log(franciaBulldog.suly);
console.log(franciaBulldog['agressziv']);
var y = 'marmagassag';
console.log(franciaBulldog[y]);

franciaBulldog.fajta = 'diszno';
console.log(franciaBulldog.fajta);
franciaBulldog['agressziv'] = true;
console.log(franciaBulldog.agressziv);

var amerikaiStafford = new Object();
amerikaiStafford.fajta = 'kutya';
amerikaiStafford.suly = 20;
amerikaiStafford.marmagassag = 35;

console.log(amerikaiStafford.suly);*/

/*var hadesz = new Object();
hadesz.nev = 'Hadesz';
hadesz.fajta = 'kutya';
hadesz.tipus = 'francia bulldog';
hadesz.szin = 'barna';
hadesz.suly = 10;
hadesz.marmagassag = 17;
hadesz.szuletesiDatum = 2013;
hadesz.korSzamolo = function () { this.eletkor = 2020 - this.szuletesiDatum };
hadesz.msiSzamolo = function () { this.msi = this.marmagassag / this.suly };

var mira = new Object();
mira.nev = 'Mira';
mira.fajta = 'kutya';
mira.tipus = 'amerikai staffordshire';
mira.szin = 'sotetbarna';
mira.suly = 20;
mira.marmagassag = 25;
mira.szuletesiDatum = 2016;
mira.korSzamolo = function () { this.eletkor = 2020 - this.szuletesiDatum };
mira.msiSzamolo = function () { this.msi = this.marmagassag / this.suly };

var luna = new Object();
mira.nev = 'Luna';
luna.fajta = 'kutya';
luna.tipus = 'husky';
luna.szin = 'szurke';
luna.suly = 22;
luna.marmagassag = 36;
luna.szuletesiDatum = 2015;
luna.korSzamolo = function () { this.eletkor = 2020 - this.szuletesiDatum };
luna.msiSzamolo = function () { this.msi = this.marmagassag / this.suly };

mira.korSzamolo();
mira.msiSzamolo();
hadesz.korSzamolo();
hadesz.msiSzamolo();
luna.korSzamolo();
luna.msiSzamolo();
console.log(mira);
console.log(hadesz);
console.log(luna);

if (mira.msi >> hadesz.msi && mira.msi >> luna.msi) {
    console.log('Mira inkabb magasabb kutya mint ' + hadesz.nev + ' es ' + luna.nev);
} else if (luna.msi >> hadesz.msi && mira.msi >> luna.msi) {
    console.log('Luna inkabb magasabb kutya mint ' + hadesz.nev + ' es ' + luna.nev );
}*/

/*function fibonacci(num) {
    var a = 1, b = 0, temp;

    while (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
        console.log(a);

        console.log(b);
    }

    return b;
    console.log(b);
}

fibonacci(10);*/

/*var johnBills = {
    'billsToPay': [5322, 14354, 20231, 2895, 14000],
    'tipsRange': [[5000, 0.2], [10000, 0.15], [20000, 0.1]],
    'tips': [],
    'tipsAvg': 0,
    'toPayTotalPerUnit': [],
    //'toPayTotal': 0,
    'tipsCalc': function () {
        for (i = 0; i <= this.billsToPay.length; i++) {
            if (this.billsToPay[i] <= this.tipsRange[0][0]) {
                var tip = this.billsToPay[i] * this.tipsRange[0][1];
                johnBills.tips.push(tip);
            } else if (this.billsToPay[i] > this.tipsRange[0][0] && this.billsToPay[i] <= this.tipsRange[1][0]) {
                var tip = this.billsToPay[i] * this.tipsRange[1][1];
                johnBills.tips.push(tip);
            } else if (this.billsToPay[i] > this.tipsRange[1][0] || this.billsToPay[i] >= this.tipsRange[2][0]) {
                var tip = this.billsToPay[i] * this.tipsRange[2][1];
                johnBills.tips.push(tip);
            }
        }
    },
    'tipsAvgCalc': function () {
        var tipsum = 0;

        for (i = 0; i < this.tips.length; i++) {
            tipsum += this.tips[i];
        }

        this.tipsAvg = tipsum / this.billsToPay.length;
    },
    'toPayTotalCalc': function () {
        for (i = 0; i < this.billsToPay.length; i++) {
            this.toPayTotalPerUnit.push(this.billsToPay[i] + this.tips[i]);
        }
    }
};

johnBills.tipsCalc();
console.log(johnBills.tips);
johnBills.tipsAvgCalc();
johnBills.toPayTotalCalc();
console.log(johnBills.toPayTotalPerUnit);
console.log(johnBills.tipsAvg);
*/

//kocka = Math.floor(Math.random() * 6) + 1;
//console.log(kocka);

/*document.querySelector('#kockaImg').addEventListener('load', function () {
    document.querySelector('#kockaImg').style.display = 'none';
});*/

//document.querySelector('#aktualis-' + aktivJatekos).textContent = kocka;

/*function gomb() {

};*/

//document.querySelector('#gomb-0').addEventListener('click', gomb);

/*document.querySelector('#gomb-0').addEventListener('click', function () {
    //ANONYMUS FUNCTION
});*/

/*document.getElementById('gomb-' + aktivJatekos).addEventListener('click', function () {
    //RANDOM NUM
    kocka = Math.floor(Math.random() * 6) + 1;

    //Eredmeny kocka kirakasa
    var kockaDom = document.querySelector('#kockaImg');
    kockaDom.style.display = 'inline';
    kockaDom.src = 'data/img/dice-' + kocka + '.png';

    //Update the round IF the rolled number is not 1
    if (kocka !== 1) {
        korEredmeny += kocka;
        document.getElementById('aktualis-' + aktivJatekos).textContent = korEredmeny;
    } else {
        korEredmeny = 0;
        document.getElementById('aktualis-' + aktivJatekos).textContent = korEredmeny;
        aktivJatekos === 0 ? aktivJatekos = 1 : aktivJatekos = 0;
        document.getElementById('jatekos-0').classList.toggle('aktiv');
        document.getElementById('jatekos-1').classList.toggle('aktiv');
    };

});*/
///////////////////////////SZENNYES////////////////////////////

var eredmeny, korEredmeny, aktivJatekos, kocka;

eredmeny = [0, 0];
korEredmeny = 0;
aktivJatekos = 0; 


function jatek() {
    document.getElementById('gomb-' + aktivJatekos).addEventListener('click', dobas);
    document.getElementById('megtart-' + aktivJatekos).addEventListener('click', megtart);

    function dobas() {
        //RANDOM NUM
        kocka = Math.floor(Math.random() * 6) + 1;

        //Eredmeny kocka kirakasa
        var kockaDom = document.querySelector('#kockaImg');
        kockaDom.style.display = 'inline';
        kockaDom.src = 'data/img/dice-' + kocka + '.png';

        //Update the round IF the rolled number is not 1
        if (kocka !== 1) {
            korEredmeny += kocka;
            document.getElementById('aktualis-' + aktivJatekos).textContent = korEredmeny;
        } else {
            korEredmeny = 0;
            document.getElementById('aktualis-' + aktivJatekos).textContent = korEredmeny;
            document.getElementById('gomb-' + aktivJatekos).removeEventListener('click', dobas);
            document.getElementById('megtart-' + aktivJatekos).removeEventListener('click', megtart);
            aktivJatekos === 0 ? aktivJatekos = 1 : aktivJatekos = 0;
            document.getElementById('gomb-' + aktivJatekos).addEventListener('click', dobas);
            document.getElementById('megtart-' + aktivJatekos).addEventListener('click', megtart);
            document.getElementById('jatekos-0').classList.toggle('aktiv');
            document.getElementById('jatekos-1').classList.toggle('aktiv');
        };
    };

    function megtart() {
        eredmeny[aktivJatekos] += korEredmeny;
        document.getElementById('osszPont-' + aktivJatekos).textContent = eredmeny[aktivJatekos];

        if (eredmeny[aktivJatekos] >= 20) {
            document.getElementById('jatekos-' + aktivJatekos).textContent = 'NYERTES!!!';
            document.getElementById('jatekos-0').classList.add('jatekosCimkeNyertes');

            window.addEventListener('click', function (event) {
                event.stopPropagation();
            }, true);

            //korEredmeny = 0;

            //alert('A JATEK AZ "OK" GOMB MEGNYOMASA UTAN UJRAINDUL')

            /*setTimeout(function () {
                window.location.reload();
            }, 500);*/

            //document.getElementById('aktualis-' + aktivJatekos).textContent = korEredmeny;
            /*document.getElementById('gomb-' + aktivJatekos).removeEventListener('click', dobas);
            document.getElementById('megtart-' + aktivJatekos).removeEventListener('click', megtart);
            aktivJatekos === 0 ? aktivJatekos = 1 : aktivJatekos = 0;
            document.getElementById('gomb-' + aktivJatekos).addEventListener('click', dobas);
            document.getElementById('megtart-' + aktivJatekos).addEventListener('click', megtart);
            document.getElementById('jatekos-0').classList.toggle('aktiv');
            document.getElementById('jatekos-1').classList.toggle('aktiv');*/
            
        } else {
            korEredmeny = 0;
            document.getElementById('aktualis-' + aktivJatekos).textContent = korEredmeny;
            document.getElementById('gomb-' + aktivJatekos).removeEventListener('click', dobas);
            document.getElementById('megtart-' + aktivJatekos).removeEventListener('click', megtart);
            aktivJatekos === 0 ? aktivJatekos = 1 : aktivJatekos = 0;
            document.getElementById('gomb-' + aktivJatekos).addEventListener('click', dobas);
            document.getElementById('megtart-' + aktivJatekos).addEventListener('click', megtart);
            document.getElementById('jatekos-0').classList.toggle('aktiv');
            document.getElementById('jatekos-1').classList.toggle('aktiv');
            korEredmeny = 0;
        }
    };

    function jatekinit() {
        korEredmeny = 0;
        document.getElementById('aktualis-' + aktivJatekos).textContent = korEredmeny;
        document.getElementById('osszPont-0').textContent = 0;
        document.getElementById('osszPont-1').textContent = 0;

        document.getElementById('jatekos-0').classList.remove('jatekosCimkeNyertes');
        document.getElementById('jatekos-1').classList.remove('jatekosCimkeNyertes');
        document.getElementById('jatekos-0').classList.add('aktiv');
        aktivJatekos = 0;

        window.addEventListener('click', function (event) {
            event.stopPropagation();
        }, false);
    };

}


jatek();