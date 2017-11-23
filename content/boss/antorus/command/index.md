---
draft: false
title: Haut-commandement antoréen
date: 2017-11-22T16:00:00+02:00
intro: Troisième boss du raid, 3 boss combattus tour à tour pendant que les 2 autres sont dans leurs cabines.
loots: Drop la cape T21
menu:
  sidebar:
    identifier: command
    parent: antorus
    weight: 3
---

{{% summary %}}
Le boss qui est au sol change toutes les 80 secondes.
Le boss au sol est d'abord Svirax puis Ishkar puis Erodus.
Un joueur doit aller dans le pod libre pour utiliser les techniques.

{{% accordion title="Afficher le positionnement :" %}}
Position de chaque boss :
![Zone](/img/antorus/command/command_zone.jpg)
{{% /accordion %}}
{{% /summary %}}

{{% ability
  id="command_faiblesse"
  title="Première technique"
  name="Exploitation de faiblesse."
  role="tank"
%}}
Frappe en AOE (10m) sur le Tank et lui place un débuff qui augmente les dégâts physiques reçus de 75% pendant 20 sec.
Faire un tank swap (voir à combien de stacks ?)
Cette technique est utilisée pendant tout le combat par le boss au sol.
{{% /ability %}}

{{% ability
  id="command_grenade"
  title="Deuxième technique"
  name="Grenade commotionnante."
%}}
Lance des grenades sur plusieurs joueurs, au bout de 5 secondes celles-ci explosent et infligent des gros dégâts AOE en plus de stun tous les joueurs touchés.
Les joueurs visés doivent immédiatement se dépack.
Cette technique est utilisée pendant tout le combat par le boss au sol.
{{% /ability %}}

{{% ability
  id="command_chaos"
  title="Troisième technique"
  name="Impulsion chaotique."
  role="heal"
%}}
Vise plusieurs joueurs puis leur lance 3 missiles chacun, qui appliquent un débuff augmentant les dégâts reçus de 1% par missile.
Le débuff se stack mais peut être dispell.
Les Healers doivent donc dispell dès que la vague de missiles est finie.
Cette technique est utilisée pendant tout le combat par les boss dans les pods.
{{% /ability %}}

{{% transition id="command_technique_pod" %}}
Les boss utilisent des techniques spécifiques quand ils sont dans leurs pods :
{{% /transition %}}

{{% ability
  id="command_mine"
  name="Ishkar : Mine entropique."
%}}
Place des mines à l'emplacement de joueurs aléatoires.
Après 3 secondes les mines sont armées et explosent si un joueur passe à proximité.

![Mines](/img/antorus/command/command_mines.jpg)
{{% /ability %}}

{{% ability
  id="command_summon"
  name="Erodus : Invocation de renforts."
%}}
Invoque des adds de deux types différents :
Pyromancienne fanatique : cast une *Explosion pyrotechnique* qui **doit être kick !**
Troupier de choc gangrelame :

1. charge l'ennemi le plus loin et le bump puis le slow
2. lance une Tempête de lames qui inflige des dégâts en AOE
{{% /ability %}}

{{% ability
  id="command_fusillade"
  name="Svirax : Fusillade."
%}}
Svirax appelle un bombardement qui inflige 2 millions de dégâts à tout le raid.
Après chaque utilisation, la technique devient 25% plus puissante.
Les joueurs doivent être sous Gangrebouclier pour réduire les dégâts
Ces boucliers sont disponibles grâce au pod d'Ishkar [(voir pod d'Ishkar)](#command_pod_ishkar)
{{% /ability %}}

{{% transition id="command_voler_pod" %}}
Le boss qui vient dans l'arène laisse son pod libre, un joueur doit donc y aller pour utiliser les techniques.
Tant qu'il y reste il reçoit un DoT qui fait de plus en plus mal, il devra donc sortir avant de mourir et un autre joueur peut prendre sa place.
{{% /transition %}}

{{% ability
  id="command_pod_svirax"
  name="Pod de Svirax : Feu cinglant."
%}}
Lance un bombardement à l'emplacement ciblé.
Fonctionne uniquement sur les adds.
{{% /ability %}}

{{% ability
  id="command_pod_ishkar"
  name="Pod d'Ishkar : Gangrebouclier."
%}}
Lance un émetteur de bouclier à l'emplacement ciblé.
Cet émetteur peut être activé pour générer un gangrebouclier qui réduit les dégâts de feu de 50% pendant 10 sec.
Le bouclier doit donc être activé juste avant la [Fusillade](#command_fusillade).

{{% attention %}}
Une zone doit être définie ou placer les boucliers et où les joueurs ne doivent pas aller en dehors des Fusillade pour qu'il n'y ait pas de mines à proximité des boucliers.
{{% /attention %}}

![Bouclier](/img/antorus/command/command_bouclier.jpg)
{{% /ability %}}

{{% ability
  id="command_pod_erodus"
  name="Pod d'Erodus : Balise pertubatrice."
%}}
Lance une balise perturbatrice qui kick les ennemis et les slow, et qui détruit les mines au sol.
Le plus de mines possible doivent être désactivées, en particulier s'il y en a à proximité des émetteurs de bouclier.

![Balise](/img/antorus/command/command_balise.jpg)
{{% /ability %}}

{{% ability
  id="command_hm"
  title="Mode Héroïque"
  mode="hm"
%}}
A priori rien de plus en Héroïque.
{{% /ability %}}
