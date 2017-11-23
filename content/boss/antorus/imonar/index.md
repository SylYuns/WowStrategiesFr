---
draft: false
title: Imonar le Chasseur d'âmes
date: 2017-11-22T16:00:00+02:00
intro: Sixième boss du raid, à 66% et 33% HP change de plateforme en larguant des pièges sur le pont.
loots: Drop les jambes T21
menu:
  sidebar:
    identifier: imonar
    parent: antorus
    weight: 6
---

{{% summary %}}
A 66% le boss change de plateforme, il faut le rejoindre le plus vite possible en évitant les pièges.
A 33% il change à nouveau de plateforme et ses techniques deviennent **améliorées**
BL en P3.
{{% /summary %}}

{{% ability
  id="imonar_javelot"
  title="Première technique"
  name="Javelot."
  role="tank"
%}}
Tout au long du fight place des débuffs stackables sur les tanks.
Ceux-ci doivent swap pour perdre les débuffs.
En P3 les stacks durent à l'infini.
{{% /ability %}}

{{% ability
  id="imonar_sommeil"
  title="Deuxième technique"
  name="Bombe de sommeil."
  phase="P1, P3"
%}}
Place un débuff sur un joueur qui l'endort pendant 20 secondes.
Le débuff peut être dispell, mais cela endort tous les joueurs à 10m pendant 8 secondes.
Dès qu'un joueur est visé par le débuff tout le monde doit donc s'en écarter.

![Sommeil](/img/antorus/imonar/imonar_sommeil.jpg)
{{% /ability %}}

{{% ability
  id="imonar_grenade"
  title="Troisième technique"
  name="Grenade à impulsion."
  phase="P1, P3"
%}}
Lance des grenades à l'emplacement de joueurs aléatoires.
Marcher sur une grenade au sol la fait exploser et bump les joueurs proches.

{{% attention %}}
Amélioré : Colle directement la grenade sur un joueur, qui inflige des dégâts à tous les autres joueurs dans les 5m et les bump toutes les 2 sec. Dure 10 minutes.
{{% /attention %}}

![Grenade](/img/antorus/imonar/imonar_grenade.jpg)
{{% /ability %}}

{{% ability
  id="imonar_explosion"
  title="Quatrième technique"
  name="Explosions chargées."
  phase="P2"
%}}
Un vaisseau vise un joueur avec un rayon en plaçant un marqueur sur sa tête.
Après 7 secondes tire un rayon en ligne droite.
Les joueurs visés doivent se placer de manière à ce que le rayon ne touche personne d'autre.

![Explosion](/img/antorus/imonar/imonar_explosion.jpg)
{{% /ability %}}

{{% ability
  id="imonar_shrapnel"
  title="Cinquième technique"
  name="Explosion de shrapnel."
  phase="P2, P3"
%}}
Lance des mines sur la palteforme. Inflige des dégâts à tout le raid.
Marcher sur une mine la fait exploser et inflige un DoT de 30 sec.

{{% attention %}}
Amélioré : Bombarde la zone avec des AOEs. Être touché par cette technique applique un DoT de feu toutes les 2 sec **jusqu'à la mort !**
{{% /attention %}}

![Explosion](/img/antorus/imonar/imonar_shrapnel.jpg)
{{% /ability %}}

{{% transition id="imonar_transi" %}}
A 66% et 33% le boss traverse le pont pour changer de plateforme.
Le raid doit traverser le plus vite possible en évitant les pièges.
Une fois tout le raid sur la bonne plateforme, interrompre le boss.
{{% /transition %}}


{{% ability
  id="imonar_heroic"
  title="Mode Héroïque :"
  mode="hm"
%}}
A priori rien de plus en Héroïque.
{{% /ability %}}
