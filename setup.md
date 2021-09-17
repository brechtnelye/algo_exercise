# Setupinstructies (eenmalig uit te voeren)

## Software

Voor dit vak heb je als software nodig:

* Git
* Chrome
* Visual Studio Code (dit is *niet* hetzelfde als Visual Studio)

Indien deze nog niet geïnstalleerd zijn, volg de instructies op [deze site](https://ucleuvenlimburg.github.io/software/).

## GitHub

* Ga naar [de hoofdpagina van de oefeningenrepository](https://github.com/ucll-algoritmisch-denken/exercises).
* Rechtsboven, klik op Watch en kies voor "Releases only".
* Als je in de toekomst een bericht ontvangt dat er een update werd doorgevoerd, zal je deze moeten binnenhalen. Hoe dit moet staat in [dit document](usage.md).

## GitHub Classroom

* Ga naar GitHub Classroom. De link vind je op Toledo.
* Aanvaard de assignment.
* Wacht tot GitHub klaar is met je repository te initialiseren. Mogelijk is een refresh (F5) nodig.
* Noteer de getoonde URL. Deze is van de vorm `https://github.com/algoritmisch-denken-oefeningen-2122/algoritmisch-denken-oefeningen-LOGIN` waarbij LOGIN je GitHub-login is.

## Downloaden Oefeningen

* Maak op je laptop een directory aan waar je je cursusmateriaal voor dit vak wil bewaren, bv. `C:\school\algoritmisch-denken`.
* Open een consolevenster in deze directory.
  * Windows: open Windows Explorer/Verkenner, ga naar de folder, rechterklik en kies "Git Bash Here".
  * MacOS: bekijk dit [filmpje](https://www.youtube.com/watch?v=xsCCgITrrWI). Je kan ook vragen om hulp aan de lector.

Voor vervolgens de volgende commando's in.
Enkel de regels die beginnen op `$` moet je zelf ingeven.
**Merk op dat je de `$` zelf niet hoeft in te geven!**

```bash
$ git clone URL .
Cloning into '.'...
warning: You appear to have cloned an empty repository.

$ git remote add upstream https://github.com/ucll-algoritmisch-denken/exercises

$ git remote -v
origin  URL (fetch)
origin  URL (push)
upstream        https://github.com/ucll-algoritmisch-denken/exercises (fetch)
upstream        https://github.com/ucll-algoritmisch-denken/exercises (push)

$ git pull upstream master
remote: Enumerating objects: 174, done.
remote: Counting objects: 100% (174/174), done.
remote: Compressing objects: 100% (91/91), done.
remote: Total 174 (delta 91), reused 158 (delta 80), pack-reused 0
Receiving objects: 100% (174/174), 1.24 MiB | 9.56 MiB/s, done.
Resolving deltas: 100% (91/91), done.
From https://github.com/ucll-algoritmisch-denken/exercises
 * branch            master     -> FETCH_HEAD
 * [new branch]      master     -> upstream/master

$ git push -u origin master
Enumerating objects: 174, done.
Counting objects: 100% (174/174), done.
Delta compression using up to 16 threads
Compressing objects: 100% (80/80), done.
Writing objects: 100% (174/174), 1.24 MiB | 1.32 MiB/s, done.
Total 174 (delta 91), reused 174 (delta 91), pack-reused 0
remote: Resolving deltas: 100% (91/91), done.
To URL
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.
```

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
