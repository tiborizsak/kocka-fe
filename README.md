# kocka-fe
Simple couch co-op dice game where the first who reach 21 is the winner. This certain project manages the logic on the client side in JavaScript. The main goal of project 'kocka' is to figure out how to detach logic from the presentation layer and implement it in Python(Flask).

```javascript

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

```
