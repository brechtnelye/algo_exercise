# Setupinstructies (eenmalig uit te voeren)

## Software

Voor dit vak heb je als software nodig:

* Git
* Chrome
* Visual Studio Code (dit is *niet* hetzelfde als Visual Studio)

Indien deze nog niet geïnstalleerd zijn, volg de instructies op [deze site](https://ucleuvenlimburg.github.io/software/).

## GitHub

* Ga naar [de hoofdpagina van de oefeningenrepository](https://github.com/UCLeuvenLimburg/algoritmisch-denken-oefeningen).
* Rechtsboven, klik op Watch en kies voor "Releases only".
* Als je in de toekomst een bericht ontvangt dat er een update werd doorgevoerd, zal je deze moeten binnenhalen. Hoe dit moet staat in [dit document](usage.md).

## GitHub Classroom

* Ga naar GitHub Classroom. De link vind je op Toledo.
* Aanvaard de assignment.
* Wacht tot GitHub klaar is met je repository te initialiseren. Beide progress bars moeten op 100% staan.
* Noteer de getoonde URL. Deze is van de vorm `https://github.com/ucll-algoritmisch-denken-2122/oefeningen-LOGIN` waarbij LOGIN je GitHub-login is.

## Downloaden Oefeningen

* Maak op je laptop een directory aan waar je je cursusmateriaal voor dit vak wil bewaren, bv. `C:\school\algoritmisch-denken`.
* Open een consolevenster in deze directory.
  * Windows: open Windows Explorer/Verkenner, ga naar de folder, rechterklik en kies "Git Bash Here".
  * MacOS: bekijk dit [filmpje](https://www.youtube.com/watch?v=xsCCgITrrWI). Je kan ook vragen om hulp aan de lector.
* Voer in op de console: `git clone URL .` waarbij URL het adres is dat je in een vorige stap verkreeg. Vergeet het puntje niet op het einde van de lijn!
* Dit zou in principe slechts enkele seconden moeten duren. Als het langer duurt, wacht je best enkele minuten vooraleer je opnieuw probeert. Als het niet lukt, haal je best de lector erbij.
* Nog steeds in de console, typ `git remote add upstream https://github.com/UCLeuvenLimburg/algoritmisch-denken-oefeningen`

Je kan nu oefeningen beginnen maken zoals [hier](usage.md) beschreven.

## Visual Studio Code Extensions

* Open Visual Studio Code.
* Links staan een reeks iconen. Zoek naar het extensions icon (de 4 blokjes) en klik erop.
* Zoek naar de extensie "open in browser". Installeer deze.

## Troubleshooting

### Mac: `error: invalid active developer path`

In de terminal:

```bash
xcode-select --install
```

Als dit problemen geeft: [Command Line Tools for Xcode downloaden](https://developer.apple.com/download/more/).
