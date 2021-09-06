# Gebruik

## Met Visual Studio Code (aangeraden)

* Open Visual Studio Code.
* In het File menu, kies voor Open Folder.
* Selecteer de directory waar je het cursusmateriaal in hebt bewaard.
* Je krijgt een overzicht te zien van alle hoofdstukken (mogelijk moet je eerst `chapters` openklikken) in de Explorer tab.
* Open het hoofdstuk waar je aan wil beginnen. Je zou moeten beginnen met het hoofdstuk `car`.
* Rechterklik op `tests.html` en kies de optie om het in een browser te openen (als deze optie er niet is heb je de extensie "open in browser" niet geïnstalleerd).
  Dit opent de html in een browser (liefst Chrome).
* Vervolgens klik je op `student.js` om dit bestand te openen.
* Verdere instructies staan beschreven in `tests.html`.

Onder Windows kan je de directory ook "pinnen" in de taskbar zodat je niet telkens keer weer de directory hoeft te heropenen.

## Zonder Visual Studio Code

* Open de directory waar je het cursusmateriaal in hebt bewaard.
* Ga verder naar de subdirectory `chapters`.
* Hieronder zie je alle reeksen oefeningen. Begin bij `car`. Open de overeenkomstige directory.
* Open het bestand `tests.html` in een browser (bij voorkeur Chrome). Dit kan je doen door het bestand te slepen naar het browservenster.
* Open het bestand `student.js` in een editor naar keuze.
* Volg de instructies in `tests.html`.

## Je vooruitgang bewaren

* Open Git Bash in de directory waar je het algoritmisch denken materiaal in bewaard hebt.
* Voer in: `git add chapters/CHAPTER/student.js` waarbij `CHAPTER` het hoofdstuk is waarvan je je vooruitgang wil bewaren.
* Voer in: `git commit -m "BOODSCHAP"` waarbij `BOODSCHAP` een korte omschrijving is van wat je gedaan hebt, bv. de naam van de oefening. Indien je een foutmelding krijgt, [lees dit](#bij-foutmeldingen).
* Voer in: `git push`.

## Wijzigingen Binnenhalen

Voer deze instructies uit om updates aan je eigen code (bv. van een lector) binnen te halen.

* Open Git Bash in de directory waar je het algoritmisch denken materiaal in bewaard hebt.
* Voer in: `git pull`.

## Updates Binnenhalen

Voer deze instructies uit om de recentste versie van het cursusmateriaal binnen te halen.

* Open Git Bash in de directory waar je het algoritmisch denken materiaal in bewaard hebt.
* Voer in: `git pull upstream master`.

## Bij Foutmeldingen

Indien er zich foutmeldingen voordoen bij de commitstap (`git commit`) betekent dit dat je git niet correct hebt geconfigureerd. Voer de volgende stappen uit:

* Voer in: `git config --global user.email EMAIL` waarbij je EMAIL vervangt door je e-mailadres (het adres dat je gebruikte bij de GitHub registratie). Bijvoorbeeld: `git config --global user.email jan.janssens@student.ucll.be`.
* Voer in: `git config --global user.name "VOORNAAM FAMILIENAAM"`. Bijvoorbeeld: `git --config global user.name "Jan Janssens"`.

## Fouten Melden

Indien er fouten staan in het cursusmateriaal, kan je dit altijd melden als volgt:

* Ga naar [de issues pagina van de oefeningenrepository](https://github.com/UCLeuvenLimburg/algoritmisch-denken-oefeningen/issues).
* Maak een nieuwe issue aan.
* Vermeld in de titel om welk hoofdstuk en welke oefening het gaat.
* Vul een korte omschrijving van de fout in.
* Klik op de submitknop.
