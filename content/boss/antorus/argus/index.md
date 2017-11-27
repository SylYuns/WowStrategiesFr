---
draft: false
title: Argus
date: 2017-11-22T16:00:00+02:00
intro: THE LAST ONE ! Un putain de Titan !
menu:
  sidebar:
    identifier: argus
    parent: antorus
    weight: 11
---

{{% summary %}}
A 70% HPs passe en P2. A 40% HPs passe en P3. Quand les adds de la P3 sont tués passe en P4.
4 phases assez différentes les unes des autres.
Nécessité une bonne réactivité de mouvement du groupe et des tanks.
{{% /summary %}}

{{% ability
  id="argus_tank"
  title="Première technique"
  name="Faux circulaire."
  role="tank"
  phase="P1, P2, P4"
%}}
Les attaques de mélée du boss frappent à 180° devant lui et appliquent un débuff qui augmente les dégâts reçus de cette technique de 75% pendant 15 secondes.
Les tanks doivent donc swap tous les 3 stacks.

En P4 le débuff est de 200% et est permanent [Voir transi P4](#argus_transi3).  

{{% /ability %}}

{{% ability
  id="argus_cone"
  title="Deuxième technique"
  name="Cône de mort."
  phase="P1"
%}}
Vise un joueur au hasard et lance un cône de brouillard dans sa direction (identique au Cri Tourmenté de l'Hôte dans la Tombe).
Ces cônes restent en place jusqu'à la fin de la P1, ils doivent donc être collés les uns aux autres le plus possible.
Tout le raid doit donc être stacké et ne se déplacer qu'au cast du Cône.

![Cône](/img/antorus/argus/argus_cone.jpg)

{{% /ability %}}

{{% ability
  id="argus_fleau"
  title="Troisième technique"
  name="Orbe de fléau de l'âme."
  phase="P1"
%}}
Place un débuff sur un joueur, qui lui inflige des dégâts pendant 8 secondes puis laisse une zone de brouillard à sa position.
Le joueur visé doit donc s'écarter du raid vers l'arrière pour rester le plus proche possible de la zone de brouillard déjà existante.

![Fléau](http://wow.zamimg.com/uploads/screenshots/normal/677907.jpg)

{{% /ability %}}

{{% ability
  id="argus_rage"
  title="Quatrième technique"
  name="Rage dévorante."
  phase="P1, P4"
%}}
Inflige de gros dégâts à tout le raid de façon régulière.
Les joueurs étant packés cette technique ne pose pas de gros problèmes, cependant, si elle arrive en même temps qu'un Cône de mort ou une Orbe de fléau de l'âme, des joueurs peuvent se faire surprendre.

{{% /ability %}}

{{% ability
  id="argus_golga"
  title="Cinquième technique"
  name="Aide de Golganneth."
  phase="P1"
%}}
Place une orbe d'eau sur un joueur et une orbe d'éclairs sur un autre.
Après 5 secondes les orbes se fixent au sol. 
Les joueurs qui entrent en contact avec l'orbe d'eau gagnent 2000 de hâte et de polyvalence pendant 2 minutes.
Les joueurs qui entrent en contact avec l'orbe d'éclairs gagnent 2000 de maîtrise et de critique pendant 2 minutes.
Les buffs sont exclusifs, donc si un joueur possède un buff et touche l'autre, il perd le premier.
Un même buff est stackable, donc les joueurs peuvent monter à +10 000 ou +12 000 hâte/poly ou maîtrise/crit.

Les joueurs doivent donc se mettre d'accord sur le positionnement des orbes par rapport au raid avant le combat (par exemple orbe d'eau sous le boss et orbe d'éclairs derrière le groupe).
{{% /ability %}}

{{% transition id="argus_transi1" %}}
A 70% HPs Argus va s'arrêter et Golganneth va invoquer une tempête pour nettoyer le brouillard de la zone.
Tous les joueurs doivent être au centre de la plateforme pour ne pas subir de dégâts de la tempête.
{{% /transition %}}

{{% ability
  id="argus_avatar"
  title="Sixième technique"
  name="Avatar d'Aggramar."
  phase="P2"
%}}
Aggramar place un buff sur un tank qui augmente ses HPs de 100% et sa vitesse de déplacement de 40%.
De plus, tous les dégâts subis par les joueurs dans un rayon de 3~4m sont redirigés vers ce tank.

![Avatar](http://wow.zamimg.com/uploads/screenshots/normal/677909.jpg)
{{% /ability %}}

{{% ability
  id="argus_bombe"
  title="Septième technique"
  name="Explosion/Bombe d'âme."
  phase="P2, P4"
%}}
A 50% d'énergie, Argus lance 2 Explosions d'âmes. A 100% d'énergie il lance 2 Explosions d'âme et une Bombe d'âme.
Chacun de ces débuffs place un DoT de 15 secondes sur le joueur puis provoque une explosion dont les dégâts sont réduits avec la distance.
Les joueurs visés doivent donc s'éloigner aux positions définies (voir image) et utiliser un sort défensif si possible.
Le joueur avec la Bombe d'âme devra être accompagné du tank qui possède l'Avatar pour encaisser les dégâts (10M).

![Bombes](/img/antorus/argus/argus_bombe.jpg)
{{% /ability %}}

{{% ability
  id="argus_faux"
  title="Huitième technique"
  name="Tranchant d'oblitération."
  phase="P2"
%}}
Des faux vont apparaître à des positions aléatoires, tournant sur elles-même avant de marquer une grand zone en ligne droite et de la traverser, infligeant des dégâts, un bump et un DoT.
Il suffit de ne pas rester sur la trajectoire.

![Faux](http://wow.zamimg.com/uploads/screenshots/normal/677896.jpg)
{{% /ability %}}

{{% transition id="argus_transi2" %}}
A 40% HPs, Aman'Thul va diviser Argus en 7 adds, répartis autour de la salle.
Hormis quelques exceptions ils ne sont pas tankables et ne peuvent pas être contrôlés ou déplacés.
Les tuer tous les 7 fait passer le combat en P4. 

Après quelques secondes les adds vont recevoir chacun un débuff qui les rend 200% plus vulnérables à certains types de dégâts. Il est donc intéressant de se focaliser sur ceux sur lesquels on est le plus efficace.

{{% accordion title="Afficher la zone : " %}}
![Adds](/img/antorus/argus/argus_addtypes.jpg)
{{% /accordion %}}
{{% /transition %}}

{{% ability
  id="argus_rayon"
  title="Techniques d'adds"
  name="Rayon cosmique."
  phase="P3"
%}}
Vise un joueur aléatoire et marque une zone en ligne droite dans sa direction qui inflige de gros dégâts.
Les joueurs visés doivent s'écarter du raid.

![Rayon](http://wow.zamimg.com/uploads/screenshots/normal/677905.jpg)

{{% /ability %}}

{{% ability
  id="argus_balise"
  title="Techniques d'adds"
  name="Déflagration stellaire / Balise cosmique."
  phase="P3"
%}}
Déflagration stellaire est un cast qui inflige des dégâts à un joueur et peut être interrompu.
Deux silences doivent être conservés pour les casts de Balise Cosmique (2 adds aléatoires vont le lancer en même temps), sinon le spell inflige de gros dégâts et un gros DoT à tout le raid.

{{% /ability %}}

{{% ability
  id="argus_blades"
  title="Techniques d'adds"
  name="Epée de l'Eternel / Epée du cosmos."
  phase="P3"
%}}
Deux adds vont recevoir une épée et devenir tankables en plus de perdre leur utilisation des sorts précédents.
L'add avec l'Epée de l'Eternel va augmenter ses dégâts de 300%. Il doit être tanké à côté d'un autre add pour permettre du cleave.
L'add avec l'Epée du cosmos augmente ses dégâts de 20% et augmente les dégâts des adds à proximité de 20%. Il doit donc être tanké au milieu de la salle.

{{% /ability %}}

{{% transition id="argus_transi3" %}}
Une fois les 7 adds tués... **SPOILERS !!!**

(scroll pour la suite de la strat)
{{% /transition %}}

![Spoiler](/img/antorus/argus/argus_spoiler.jpg)

{{% transition id="argus_transi4" %}}
... Argus va se reformer et tuer tout le raid d'un seul coup !!

Heureusement, nous avons sauvé Eonar et c'est désormais à elle de nous sauver !
{{% /transition %}}

{{% ability
  id="argus_eonar"
  title="Eonar"
  name="Don de la Lieuse-de-Vie."
  phase="P4"
%}}
Eonar va faire apparaître un arbre de vie sur lequel les joueurs peuvent se rendre pour être ressucités.
Cet arbre reste actif pendant toute la P4, les joueurs peuvent donc ressuciter plusieurs fois.
Cependant le nombre de résurrections est limité par l'énergie de l'arbre. Cette énergie ne peut pas remonter.
Ressuciter alors que l'arbre n'a plus d'énergie lui inflige un DoT que les healers peuvent soigner mais qui se stack.
Le nombre de resurrection est donc quand même limité.

Dans le royaume des morts des Détonations spirituelles (en bas sur l'image 1 et à gauche sur l'image 2) sont présentes, que les joueurs doivent éviter.
Au contraire, les joueurs doivent essayer de ramasser les Particules de puissance (à droite sur l'image 2). Quand plus de 20 sont accumulées au total, Khaz'Goroth buff le raid.

![Eonar1](http://wow.zamimg.com/uploads/screenshots/normal/677910.jpg) ![Eonar2](http://wow.zamimg.com/uploads/screenshots/normal/677906.jpg)
{{% /ability %}}

{{% ability
  id="argus_module"
  title="Neuvième technique"
  name="Module de Réorigination."
  phase="P4"
%}}
Fait apparaître 3 orbes qui lancent un cast et donc la zone d'effet s'agrandit au fur et à mesure.
A la fin du cast, provoque une explosion de la zone correspondante.
Ces orbes doivent être tuées le plus vite possible pour limiter leur taille.

A chaque fois que cette technique est utilisée le nombre d'orbes augmente de 1.
![Eonar1](http://wow.zamimg.com/uploads/screenshots/normal/677900.jpg)
{{% /ability %}}

{{% ability
  id="argus_bombe2"
  title="Rappel de techniques"
  name="Explosion/Bombe d'âme / Tanking."
  phase="P2, P4"
%}}
Argus continue à placer des bombes à 50 et 100% d'énergie, cependant il n'y a plus le buff Avatar sur un tank.
Le joueur visé est donc condamné à mourir et doit revenir à l'arbre d'Eonar (en pensant à collecter des Particules de puissance).

Le débuff sur les tanks est de 200% et dure à l'infini, les tanks vont donc finir par mourir et doivent eux aussi retourner à l'arbre (en pensant à collecter des Particules de puissance).
{{% /ability %}}

{{% ability
  id="argus_heroic"
  title="Mode Héroïque"
  mode="hm"
%}}
En P1, P2, P4 : le débuff sur les tanks est de 150% au lieu de 75%.

En P1 : le buff de stats est de 30 sec au lieu d'une minute, donc les joueurs doivent être réactifs.

En P3 : les adds ne doivent être kick que pour les Balise cosmique, car un kick les rend invulnérables à d'autres kicks pendant 20 secondes. 
{{% /ability %}}
