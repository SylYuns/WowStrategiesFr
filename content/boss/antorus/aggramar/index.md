---
draft: false
title: Aggramar
date: 2017-11-22T16:00:00+02:00
intro: Dixième et avant-dernier boss du raid, 3 phases très semblables, avec 2 intermissions.
loots: Drop le casque T21
menu:
  sidebar:
    identifier: aggramar
    parent: antorus
    weight: 10
---

{{% summary %}}
A 80% et 40% HP passe en intermission pendant laquelle il est insensible. 
En P1, P2 et P3 à chaque fois qu'il atteint 100 d'énergie il lâche une série de 5 coups qui demande aux tanks de le tourner vite du bon côté.
Les intermissions demandent de gérer des adds, bien penser à utiliser un max de contrôles.
{{% /summary %}}

{{% ability
  id="aggramar_tank"
  title="Première technique"
  name="Portée de Taeshalach."
  role="tank"
  phase="P1, P2, P3"
%}}
Les attaques de mélée du boss frappent le tank principal et la deuxième cible la plus proche.
Les attaques appliquent également un débuff de 5% de dégâts supplémentaires pour les prochaines attaques dans les 12 secondes.
Les tanks doivent donc être très proches l'un de l'autre et swap l'aggro dès que le débuff disparaît.  

{{% /ability %}}

{{% ability
  id="aggramar_brasier"
  title="Deuxième technique"
  name="Brasier cuisant."
  phase="P1, P2, P3"
%}}
Place des DoTs sur des joueurs aléatoires qui leur inflige des dégâts de feu en zone autour d'eux.
Les joueurs doivent donc être espacés les uns des autres.

{{% /ability %}}

{{% ability
  id="aggramar_sillage"
  title="Troisième technique"
  name="Sillage de feu."
  phase="P1"
%}}
Fait partir plusieurs traits de feu depuis ses pieds vers l'extérieur, qui infligent des dégâts et appliquent un DoT.
Il suffit d'esquiver.

![Sillage](http://wow.zamimg.com/uploads/screenshots/normal/677883.jpg) ![Sillage2](http://wow.zamimg.com/uploads/screenshots/normal/677884.jpg)

{{% /ability %}}

{{% ability
  id="aggramar_100"
  title="100% d'énergie"
  name="Technique de Taeshalach."
  phase="P1, P2, P3"
%}}
Lance 5 techniques à la suite les unes des autres :

* **Brise-adversaire** : inflige d'énormes dégâts en cleave + un débuff aux joueurs en face de lui. Ne doit être encaissé que par un seul tank (Tank1).
* **Entaille de flamme** : inflige d'énormes dégâts en cleave *divisés entre les joueurs* en face de lui et les repousse. Le 2ème tank (Tank2) doit taunt en étant packé sur le raid pour partager les dégâts.
* **Brise-adversaire** n°2 : le Tank2 doit vite s'écarter du raid pour encaisser les dégâts de cette technique tout seul.
* **Entaille de flamme** n°2 : le Tank1 taunt après s'être packé sur le raid.
* **Tempête incendiaire** : inflige des dégâts dans une énorme zone autour de lui. Tous les joueurs doivent s'éloigner.

{{% /ability %}}

{{% transition id="aggramar_transi1" %}}
A 80% HPs, Aggramar place un shield sur lui-même le rendant insensible.
Tous les joueurs qui touchent le shield sont repoussés et subissent des dégâts.
Pendant toute la phase d'intermission des météores tombent sur la zone et doivent être esquivés.
Aggramar va également invoquer 2 *Flammes de Taeshalach* et de nombreux *Embers de Taeshalach*.
{{% /transition %}}

{{% ability
  id="aggramar_flamme"
  title="Premier add"
  name="Flamme de Taeshalach."
%}}
Ces adds ont une aura qui rend tous les adds dans les 15 mètres (y compris eux-même) insensibles aux contrôles et augmente les dégâts des autres adds de 50%.
Ils infligent également des dégâts constants à tout le raid, qui augmentent toutes les 3 secondes.
Les tanks doivent donc les éloigner de tous les autres adds et ils doivent donc être tués rapidement.

{{% /ability %}}

{{% ability
  id="aggramar_ember"
  title="Deuxième add"
  name="Ember de Taeshalach."
%}}
Ces adds ne peuvent pas être tankés mais sont **sensibles à tous les contrôles**.
Ils avancent en direction d'Aggramar et explosent en le touchant, ce qui inflige des dégâts à tout le raid, ainsi qu'un DoT de 15 sec et augmente les dégâts des prochaines explosions dans les 15 secondes de 100%.
Ils doivent donc être contrôlés au maximum et/ou tués pour ne pas atteindre le boss.

{{% /ability %}}

{{% transition id="aggramar_transi2" %}}
Une fois les 2 *Flammes de Taeshalach* tués, Aggramar passe en P2, même s'il reste des *Embers de Taeshalach*.
Cependant, les *Embers de Taeshalach* explosent automatiquement au bout de 3 minutes, ils ne peuvent donc pas être juste perma-control. 
{{% /transition %}}

{{% ability
  id="aggramar_fusee"
  title="Quatrième technique"
  name="Fusée éclairante."
  phase="P2, P3"
%}}
Lance des fusées sur la position de joueurs distants, qui explosent dans une large AOE après 4 secondes.
Les joueurs doivent donc s'en éloigner.
En P3 les explosions font également apparaître des [Sillages de feu](#aggramar_sillage) qui partent dans des directions aléatoires.

{{% /ability %}}

{{% transition id="aggramar_transi3" %}}
A 40% HPs Aggramar repasse en transition.
Les mécaniques sont les même que pour la première transition.
Une fois les 2 *Flammes de Taeshalach* tués, Aggramar passe en P3.
{{% /transition %}}

{{% ability
  id="aggramar_heroic"
  title="Mode Héroïque"
  mode="hm"
%}}
En HM, les *Embers de Taeshalach* ne disparaissent pas lorsqu'ils sont tués, mais se transforment en flaque de lave pendant 18 secondes puis réapparaissent avec 100% HPs.
Le seul moyen de les faire disparaître est de les laisser arriver jusqu'à Aggramar.
Le raid doit donc être coordonné pour les faire atteindre Aggramar un par un tout en pensant que le débuff+DoT de leur explosion dure 15 secondes.
Ils doivent tous avoir explosé en moins de 3 minutes. 
{{% /ability %}}
