## Sovellukset: Laskin navigoinnilla

#### Mitä opin
Tällä viikolla opin käyttämään navigointia. React Navigation tarjoaa navigoinnin eri näyttöjen välillä

- Stack navigator
- Tab navigator
- Drawer navigator

#### Mietittävää



#### CalculatorWithNavigation


Tehtävänä oli pilkkoa Calculator-sovellus kahteen komponenttiin: Home ja History. Tarkoituksena oli käyttää React Navigation kirjaston stack navigointia, jolla käyttäjä voi 
siirtyä eri komponenttien välillä.

- Home komponentissa näytetään laskin ja 'History'- painike, jolla voi siirtyä historia sivulle.
- History komponentissa näytetään kaikki tehdyt laskutoimitukset FlatList komponentilla.


Aloitin asentamalla navigaation ydinkirjaston ja riippuvuudet (React Navigation v6):


```
npm install @react-navigation/native
expo install react-native-screens react-native-safe-area-context
```

Seuraavaksi asensin stack-navigaation vaatiman paketin

    npm install @react-navigation/native-stack
    
ja importoin NavigationContainer sekä createStackNavigator App.js -tiedostoon

```
import { NavigationContainer } from'@react-navigation/native';
import { createNativeStackNavigator } from'@react-navigation/native-stack';
```
