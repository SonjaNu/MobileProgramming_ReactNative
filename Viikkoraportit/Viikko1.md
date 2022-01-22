## Sovellukset: Yksinkertainen laskin (+, -) ja Numeron arvaus

#### Mitä opin
Tällä viikolla opin luomaan uuden projektin ja yhdistämään sen puhelimen emulaattoriin. React.js kurssilta React on jokseenkin tuttua, mikä helpotti sovellusten rakentamisen aloittamista.
Noudatin hyväksi havaittua aloitustapaa sovellusten rakentamisessa eli ensin kirjoitin paperille sovelluksen vaatiman toiminnallisuuden ja miten sovelluslogiikan voisi toteuttaa.
Tämän jälkeen aloitin koodauksen määrittämällä muuttujat (tavanomaisten importtien ja funktion luomisen jälkeen). onPress oli minulle uusi asia, mutta hahmotin toiminnallisuuden nopeasti,
kun onChange oli tuttu.

#### Mietittävää
Miten saisi tilaa kahden tekstikentän tai kahden nappulan välille...? Yritin justifyContent: 'space-around' ja justifyContent: 'space-between' sekä asettaa marginaalille ja
paddingille arvoja, mutta ei onnistunut.

Mietin, onko hyvä käyttää termiä muuttuja vai pitäisikö puhua tilasta. 

#### Kehitysympäristön tekeminen
Minulla oli valmiiksi asennettuna jo Expo-ympäristö: Node.js, Expo-Client ja Git. Latasin puhelimeen sovelluksen Expo Go.

#### Ensimmäisen projektin luominen
Loin kansion React_mobile, johon alan kerätä mobiiliohjelmoinnin projekteja. 
Avasin komentotulkin, Powershellin, admin-tilassa ja loin ensimmäisen projektin nimeltään ”calculator” komennolla expo init.

    PS C:\React_mobile> expo init calculator 

Tämän jälkeen valitsin pohjan (template) neljästä vaihtoehdosta. Blank on tässä vaiheessa oikein riittävä.

    Choose a template: » blank

Menin calculator-kansioon ja käynnistin projektin komennolla yarn start

    PS C:\React_mobile\calculator> yarn start

Käynnistin puhelimestani Expo Go -sovelluksen, ja luin QR-koodin komentotulkista, jolloin sain projektin näkymään emulaattorissa. Käytän kehitysympäristönä Visual Studio Codea.

#### Calculator
Tehtävänä oli rakentaa yksinkertainen laskin, jolla pystyi laskemaan yhteen- ja vähennyslaskuja. 

Aloitin määrittämällä muuttujat:
- ensimmäinen käyttäjän syöttämä luku, alustettu alkuun tyhjäksi

      const [count, setCount] = useState('');
      
- toinen käyttäjän syöttämä luku, alustettu alkuun tyhjäksi

      const [count2, setCount2] = useState('');
      
- tulos, joka syntyy laskutoimituksen jälkeen ja ilmestyy käyttäjälle tekstialueelle, alustettu alkuun tyhjäksi

      const [result, setResult] = useState('');

Sitten loin kaksi tapahtumankäsittelijää: toisen yhteenlaskussa ja toisen vähennyslaskulle: suoritetaan laskutoimitus ja asetetaan käyttäjän syöttämät luvut tämän jälkeen tyhjiksi.
```
const subtraction= () =>{
    setResult(Number(count) - Number(count2));
    setCount('')
    setCount2('')
  }
```

Sitten rakensin ulkoasun: numerojen kirjoittamiselle kaksi TextInput komponenttia, tekstialueelle (<Text/>) vakioteksti "Result: " ja sen perään laskutoimituksen vastaus (result)
ja kaksi nappulaa + ja - . onPress ohjaa oikeaan tapahtumankäsittelijään:
```
<Button  onPress={addition} title="+" color="purple" /> 
<Button onPress={subtraction} title="-" color="purple"/>
```

Lopuksi määrittelin sovellukseen tyylejä.

      const styles = StyleSheet.create({ });


#### Number guessing game
Tehtävänä oli rakentaa yksinkertainen peli, jossa käyttäjä arvaa oikeaa numeroa välillä 1-100. Sovellus arpoo satunnaisen kokonaisluvun 1-100 väliltä pelin alussa.

Aloitin asettamalla tarvittavat muuttujat: 
- satunnaisesti arvottava numero, jota arvataan

      const [correctNumber, setCorrectNumber] = React.useState(Math.floor(Math.random() * 100) + 1);
      
- käyttäjän syöttämä luku, arvaus, joka aliustetaan alkuun tyhjäksi

      const [guessedNumber, setGuessedNumber] = React.useState('');
      
- muuttuja, joka laskee yritysten, arvausten, määrän alkaen ykkösestä

      const [guess, setGuess] = React.useState(1);
    
- käyttäjälle ilmestyvä teksti, onko luku liian suuri, liian pieni vai oikea

      const [responseText, setResponseText] = React.useState('Guess a number between 1-100');

Sitten rakensin sovelluksen ulkoasun. Loin TextInput-komponentin, johon käyttäjä voi syöttää numeron, ja asetin syötteen numeeriseksi (keyboardType='numeric'). Loin teksialueen,
johon asetetaan vastausteksti (responseText) sen mukaan, oliko arvaus väärä vai oikea sekä nappulan ohjaamaan tapahtumankäsittelyyn (onPress={guessSomeNumber}).

Tämän jälkeen loin tapahtumankäsittelijän, joka suoritettaisiin nappulan painamisen jälkeen. Alkuun määritin arvausmäärän kasvavaksi aina yhdellä joka napin painalluksen jälkeen (setGuess (guess + 1);).
Sitten tein if-rakenteen: jos arvattu numero (guessedNumber) on pienempi kuin oikea numero (correctNumber), sanotaan käyttäjälle, että arvattu numero oli liian pieni - jos toisinpäin, niin liian suuri.
Jos arvattu numero on sama kuin oikea numero, todetaan se oikeaksi ja annetaan käyttäjälle alertti (alert), jossa kerrotaan, kuinka monen yrityksen jälkeen hän arvasi oikean numeron.

Lopuksi määrittelin sovellukseen tyylejä.

    



```

```

>
