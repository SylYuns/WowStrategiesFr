---
draft: false
title: Garde-portail Hasabel
date: 2017-11-22T16:00:00+02:00
intro: Quatrième boss du raid. Elle reste sur la plateforme principale, à 90%, 60% et 30% HP le raid doit aller tuer un add sur une autre plateforme.
menu:
  sidebar:
    identifier: hasabel
    parent: antorus
    weight: 4
---

{{% summary %}}
Un tank et un heal doivent toujours rester avec le boss.
Le maximum de joueurs du raid vont tuer l'add quand il pop.
Les dégâts sur le raid augmentent avec chaque portail ouvert, BL après le 3ème.

{{% accordion title="Afficher le positionnement :" %}}
![Zone](/img/antorus/hasabel/hasabel_zone.jpg)
{{% /accordion %}}
{{% /summary %}}

{{% ability
  id="hasabel_breche"
  title="Première technique"
  name="Brèche dans la réalité."
  role="tank"
%}}
Place un DoT physique de 30 sec sur le tank qui peut se stack.
Les tank doivent swap à 2~3 stacks.
Quand un portail s'ouvre le tank qui est le plus low en stacks prend le boss et l'autre va dans le portail.

![Tanking](/img/antorus/hasabel/hasabel_breche.jpg)
{{% /ability %}}

{{% ability
  id="hasabel_effondrement"
  title="Deuxième technique"
  name="Effondrement du monde."
%}}
Crée un immense zone d'AOE qui explose au bout de 5 secondes.
Les joueurs doivent s'en éloigner à tout prix.
Le boss doit être placé au bon endroit pour que les joueurs puissent être proches du prochain portail après l'explosion (voir img résumé)

![Effondrement](/img/antorus/hasabel/hasabel_effondrement.jpg)
{{% /ability %}}

{{% ability
  id="hasabel_barrage"
  title="Troisième technique"
  name="Barrage de gangrorage."
%}}
Lance un bombardement dans une large ligne marquée au sol.
Les joueurs doivent s'écarter avant que le bombardement arrive.

![Barrage](/img/antorus/hasabel/hasabel_barrage.jpg)
{{% /ability %}}

{{% ability
  id="hasabel_transport"
  title="Quatrième technique"
  name="Portail de transport."
%}}
Invoque différents types d'adds.
Les diablotins et les traqueurs lancent <b>un spell qui peut et doit être kick !</b>
Les araignées immobilisent un joueur, elles doivent donc être tuées rapidement pour ne pas empêcher d'éviter les AOE.
{{% /ability %}}

{{% transition id="hasabel_portals" %}}
A 90%, 60% et 30% HP, Hasabel va invoquer un add sur une des autres plateformes.
Tant que cet add est en vie les joueurs sur la plateforme principale prennent de très gros dégâts.
Chaque portail ouvert inflige des dégâts supplémentaires en continu sur le raid, les dégâts sont donc plus importants au fur et à mesure du combat.
Un maximum de joueurs doit aller tuer l'add pour qu'il tombe très vite.
{{% /transition %}}


{{% ability
  id="hasabel_xoroth"
  title="Plateforme Xoroth"
  name="Vulcanar."
%}}
Utilise 2 sorts qui peuvent être kick. Une rotation doit être mise en place.
Lance des AOEs sur les joueurs en continu, elles doivent être évitées.

![Barrage](/img/antorus/hasabel/hasabel_xoroth.jpg)
{{% /ability %}}

{{% ability
  id="hasabel_rancora"
  title="Plateforme Rancora"
  name="Dacidion."
%}}
Place un débuff sur les joueurs qui leur vole 50% de leurs HPs <b>actuels</b> en 5 secondes.
Les Healers doivent donc tenir tout le monde en vie mais ne pas remonter leurs HPs trop haut pour que l'add ne se heal pas trop.
Decidion va aussi cast un Portail Instable qui doit être kick.
Elle va également mettre un joueur dans un cocon qui doit être détruit pour libérer le joueur.

![Barrage](/img/antorus/hasabel/hasabel_rancora.jpg)
{{% /ability %}}

{{% ability
  id="hasabel_nathreza"
  title="Plateforme Nathreza"
  name="Lord Eilgar."
%}}
Place un débuff sur les Healers qui les empêche de faire du heal mais régen leur mana de 2% par seconde.
Ce débuff peut être dispell. Les Healers doivent donc voir combien de temps ils le gardent pour régen une partie de leur mana.
Lord Eilgar inflige aussi périodiquement de gros dégâts à tous les joueurs à 20m.
Il va aussi cast un Portail Instable qui doit être kick.
{{% /ability %}}

{{% transition id="hasabel_transi" %}}
Une fois tous les adds tués, le raid doit finir le boss.
Les dégâts reçus par le raid à ce moment-là sont très important, il faut donc le finir rapidement.
La BL est claquée à ce moment.
{{% /transition %}}


{{% ability
  id="hasabel_heroic"
  title="Mode Héroïque :"
  mode="hm"
%}}
En Héroïque les joueurs doivent gérer les techniques spéciales de chaque plateforme en allant chercher un buff sur une autre plateforme.
Avant d'aller sur Vulcanar, un joueur doit aller chercher une Gelée caustique sur la plateforme Rancora (portail 2) et la ramener pour la faire exploser sur l'add.
Avant d'aller sur Dacidion, un joueur doit aller chercher une Ombre engluante sur la plateforme Nathreza (portail 3) et la ramener pour la faire exploser sur l'add.
Avant d'aller sur Nathreza, des joueurs doivent aller chercher des Flammes semperardentes sur la plateforme Xoroth (portail 1) et les ramener pour donner la vision au raid.
{{% /ability %}}
