---
draft: false
title: La défense d'Eonar
date: 2017-11-22T16:00:00+02:00
intro: Cinquième boss du raid. Tower Defense (et c'est nous les tours).
loots: Drop le Torse T21
menu:
  sidebar:
    identifier: eonar
    parent: antorus
    weight: 5
---

{{% summary %}}
Tuer des adds donne de l'énergie à Eonar, à 100 d'énergie elle attaque le Paraxis (doit être fait 3 fois).
Deux types d'adds doivent être tankés, les autres vont juste tout droit jusqu'à Eonar et doivent être tués avant.
La plupart des adds sont sensibles à tous les contrôles, il faut donc en utiliser un maximum (en rotation).
Les adds ont 3 points de spawn possibles (prédéfinis).
{{% /summary %}}

{{% transition id="eonar_transi" %}}
Zone immense avec plusieurs étages et 3 points de spawn des adds.

{{% accordion title="Afficher la zone :" %}}
![Zone](/img/antorus/eonar/eonar_zone.jpg)

En rouge la zone "middle" avec le spawn des adds en 1.
En rose la zone "lower" avec le spawn des adds en 2.
En jaune la zone "upper" avec le spawn des adds en 3.
En vert la zone où il est facile de dps les Kéraptéron (chauves-souris)
{{% /accordion %}}

Un spell spécial permet de sauter super haut et de voler.
Des "trampolines" sont placés à différents endroits pour passer d'un niveau à l'autre.
RIP Klaab.

{{% accordion title="Détail des premiers spawns :" %}}
* Middle portal (destructor)
* Lower portal (destructor)
* Upper portal (obfuscater + destructor)
* 2 : Lower (purifier) + Upper (obfuscater + purifier) + bats (intercept middle)
* 2 : Upper (felhounds) + Middle (obfuscator + destructor)
{{% /accordion %}}
{{% /transition %}}

{{% ability
  id="eonar_tanking"
  title="Deux adds à tanker :"
  name="Destructeur et Purificateur"
  role="tank"
%}}
  Destructeur gangrimprégné : se déplace pendant 5 sec puis attaque la cible la plus proche. Le tank doit donc se placer sous le mob.

  * Cet add cast un tir sur Eonar qui **doit être kick !**
  Purificateur alimenté par la corruption : enlève tous les contrôles en AOE autour de lui, doit donc immédiatement être écarté des adds.
  * Attaque en cleave, le tank doit le tenir dos au raid.

  ![Tanking](/img/antorus/eonar/eonar_tanking.jpg)
{{% /ability %}}

{{% ability
  id="eonar_adds"
  title="Les autres adds :"
%}}
  Négateur gangrechargé : rend les adds autour de lui inciblables. Est immunisé aux contrôles.
  Il doit être tué très rapidement. Les contrôles de zone affectent quand même les adds inciblables.

  * Gangregarde : Unité sans rien de spécial.
  * Gangrechien : Unité rapide mais avec moins de vie.
  * Gangreseigneur : Unité lente mais avec beaucoup de vie.
  * Kéraptéron volant : Unité volante qui suit un chemin spécial. Doivent être gérées par les distants quand elles sont au milieu de la zone.
{{% /ability %}}

{{% ability
  id="eonar_lance"
  title="Technique du Paraxis :"
  name="Lance de la calamité."
%}}
  Vise un joueur avec un rayon qui laisse une AOE de Fel là où il passe.
  Cette AOE donne un boost de vitesse aux adds. Le rayon doit donc être mis sur les bords des plateformes.

  ![Lance](/img/antorus/eonar/eonar_lance.jpg)
{{% /ability %}}

{{% ability
  id="eonar_pluie"
  title="Technique du Paraxis :"
  name="Pluie de corruption."
%}}
  Place une marque sur plusieurs joueurs et provoque une explosion en AOE autour d'eux après quelques secondes.
  Les joueurs visés doivent s'écarter des autres (par exemple aller sur les bords et les autres se rapprochent du centre)

  ![Pluie](/img/antorus/eonar/eonar_pluie.jpg)
{{% /ability %}}

{{% ability
  id="eonar_hm"
  title="Mode Héroïque :"
  mode="hm"
%}}
  En Héroïque le Paraxis aura peut-être de nouvelles techniques et il faudra peut-être que certains joueurs prennent un portail pour aller sur le vaisseau et arrêter un cast.
  (mais cette technique n'existe peut-être qu'en Mythique.)
{{% /ability %}}
