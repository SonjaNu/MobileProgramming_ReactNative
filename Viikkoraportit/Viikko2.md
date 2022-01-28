## Sovellukset: Laskin historialla (+, -) ja Ostoslista

#### Mitä opin
Tällä viikolla opin käyttämään FlatList komponenttia.

#### Mietittävää



#### CalculatorWithHistory
Tehtävänä oli rakentaa yksinkertainen laskin, jolla pystyi laskemaan yhteen- ja vähennyslaskuja. 

Tehtävänä oli muokata calculator-sovellusta niin, että se jättäisi laskuhistorian muistiin.
Lähdin muokkaamaan aiemmin tekemääni calculator-sovellusta. 

Lisäsin FlatList-komponentin palautukseen (return)

```
<FlatList
        data={data}
        renderItem={({item}) => 
            <Text>{item.key}</Text>}
      />
```
Propertyssa nimeltä data annetaan lista, joka renderöidään.
Yksi alkoi näytetään renderItem -propertyssa: parametrina funktio, joka renderöi yhden alkion (item)
Se saa FlatList-komponentilta parametrina olion, josta poimitaan listan alkio (item.key  - Otetaan itemista attribuutti key). Tämä on Text-komponentin sisässä.
FlatList-komponentilla renderöidään lista, johon on koottuna tehdyt laskutoimitukset.
Lisäsin uuden tilamuuttujan listaa varten

        const [data, setData] = useState([]);

Aina kun lasku lisätään, sen pitäisi päivittyä heti listaan.

Lisäsin tapahtumankäsittelijöille subtraction ja addition muuttujan historyItem 

        const historyItem = `${count} + ${count2} = ${result}`;
        
ja asetin sen alkion  avainattribuutiksi listaan

        setData([...data, {key: historyItem}]);
        
Puretaan alkiot spread-operaattorilla (…data)
Vakiona on olio, jokka on yksi attribuutti ( {key: historyItem} )



#### ShoppingList
Tehtävänä oli rakentaa yksinkertainen ostoslista-sovellus, jossa käyttäjä syöttää tekstikenttään merkkijonon ja tallentaa sen alapuolella näkyvään listaan. Käyttäjä voi tyhjentää listan painamalla clear-nappia. 


