---
draft: false
title: Maîtresse Sass'zine
date: 2017-11-22T16:00:00+02:00
intro: "Quatrième boss du raid, 3 phases, la P3 combine les techniques de P1 et P2."
loots: Drop les Jambières T20
menu:
  sidebar:
    identifier: sasszine
    parent: tombe
    weight: 4
---

{{% summary %}}
En P1 (100->70%) : gestion des adds, d'un débuff, d'un dispell et esquive des tornades.

En P2 (70->30%) : esquive d'une zone qui traverse la salle (style P2 Tichondrius), apporter les débuffs à un add pour le faire partir.
En P3 (30->0%) :  P1 + P2, beaucoup de choses à gérer et débuff qui ne peuvent pas être enlevés = il faut finir le boss très vite.

L'utilisation de la BloodLust en P3 est donc certainement une bonne option.
{{% /summary %}}

{{% accordion title="Résumé : (clic pour afficher)" %}}
* Tank-swap à chaque Fardeau de douleur.
* Les murlocs et les serpents peuvent être cut et contrôlés.
* Les murlocs doivent être tués immédiatement.
* Les serpents doivent être tués juste avant que les tornades arrivent.
* Si vous avez un débuff Faim dévorante, placez-vous sous les méduses.
* 2 joueurs pour encaisser chaque Tir de l'hydre, pas plus.
* Ne pas encaisser 2 tirs à la suite.
* Esquiver la zone avec des bulles.
* Nourrir la baleine avec 3 encres.
* Faire durer la P3 le moins longtemps possible.
{{% /accordion %}}

{{% ability
  id="sass_fardeau_douleur"
  title="Première technique"
	phase="P1, P2, P3"
  name="Fardeau de douleur."
	role="tank"
%}}
Place un débuff sur le main-tank. Ce débuff dure 1 minute et inflige des dégâts d'Ombre.
De plus, tous les dégâts physiques que prend le tank sont répercutés sur tout le raid.
Le tank qui a ce débuff doit donc laisser le boss à l'autre tank et s'occuper des adds (ils n'infligent pas de dégâts physiques)
{{% /ability %}}

{{% ability
  id="sass_fond_abysses"
  title="Deuxième technique"
	phase="P1, P2, P3"
  name="Du fond des abysses."
%}}
Fait apparaître trois Traqueurs des abysses, qui seront tankés par l'off-tank.
Les adds peuvent être stun / slow / grip, etc.
Quand ils meurent ils laissent une AOE qui fait des dégâts et réduit de 75% les chances de toucher, il faut donc en sortir immédiatement.
Ces adds doivent être cleave sur le boss {{% attention %}}et mourir juste avant que les [Tornades Tranchantes](#sass_tornades_tranchantes) arrivent, car l'AOE qu'ils laissent aide à passer à travers les Tornades.{{% /attention %}}

![Du fond des abysses](/img/sass/sass_fond_abysses.jpg)
{{% /ability %}}

{{% ability
  id="sass_tir_hydre"
  title="Troisième technique"
	phase="P1, P2, P3"
  name="Tir de l'hydre."
%}}
Marque plusieurs joueurs d'une flèche au-dessus de leur personnage, et indique la direction des tirs avec des flèches devant le boss.
Après 6 secondes, les joueurs marqués subissent de gros dégâts physiques, qui sont divisés entre tous les personnages sur la trajectoire.
Les joueurs touchés par les dégâts reçoivent le débuff "Acide d'hydre" pendant 6 secondes. S'ils reçoivent un autre tir avec ce débuff, ils seront stun 6 secondes.
Le tank qui a le débuff [Fardeau de douleur](#sass_fardeau_douleur) doit faire attention à ne pas être touché par les tirs.

{{% attention %}}Les joueurs marqués doivent s'écarter les uns des autres pour qu'un autre joueur vienne se placer devant chacun d'eux pour lisser les dégâts. Attention à ce qu'il n'y ait pas trop de monde à la fois qui absorbe pour que tout le raid ne se retrouve pas avec le débuff !{{% /attention %}}

![Tir de l'hydre](/img/sass/sass_tir_hydre.jpg)
{{% /ability %}}

{{% ability
  id="sass_tornades_tranchantes"
  title="Quatrième technique"
	phase="P1, P3"
  name="Tornades Tranchantes."
%}}
Sass'zine invoque une rangée de tornades qui vont traverser la salle. Les personnages touchés par les tornades subissent un DOT très violent.
Les tornades sont fortement ralenties par les AOE laissées à la mort des [Traqueurs des abysses](#sass_fond_abysses), ceux-ci doivent donc mourir juste avant que les tornades arrivent.
Le fonctionnement est donc similaire aux Anneaux de la Grand Magistrice Elisande.

![Tornades Tranchantes](/img/sass/sass_tornades_tranchantes.jpg)
{{% /ability %}}

{{% ability
  id="sass_faim_devorante"
  title="Cinquième technique"
	phase="P1, P3"
  name="Faim dévorante."
%}}
Place un débuff sur un ou plusieurs joueurs aléatoires. Ce débuff inflige des dégâts et est permanent !
Le seul moyen de l'enlever est de se tenir sous les méduses qui vont apparaître tout au long de la P1 et qui après quelques secondes vont exploser en AOE.
Cette AOE enlève le débuff mais stun pendant 4 secondes ! Les joueurs stun peuvent être dispell par les heal / dispell de masse.

{{% attention %}}Chaque débuff qui est enlevé des personnages va faire spawn un murloc qui va caster en continu. Les murlocs doivent être contrôlés et sont la priorité des DPS !{{% /attention %}}

{{% attention %}}Les méduses n'apparaissent qu'en P1, le raid doit donc veiller à ce qu'aucun débuff ne soit présent lorsque le boss passe sous les 70% de PV.{{% /attention %}}

{{% attention %}}En P3 Sass'zine place à nouveau des débuffs mais il n'y a plus de méduses, cette technique agit donc comme un soft-enrage.{{% /attention %}}

![Faim dévorante](/img/sass/sass_faim_devorante.jpg)
{{% /ability %}}

{{% transition id="sass_transi_p1_p2" %}}
A 70% HP, Sass'zine passe en P2.

Il n'y a plus de [Tornades](#sass_tornades_tranchantes) ni de méduses, et aucun nouveau débuff [Faim dévorante](#sass_faim_devorante) n'est placé, mais ceux qui n'ont pas été enlevés restent.

Les tanks doivent toujours gérer le [Fardeau de douleur](#sass_fardeau_douleur) et les adds du [Fond des abysses](#sass_fond_abysses) ; et les autres joueurs doivent toujours gérer le [Tir de l'hydre](#sass_tir_hydre).

3 nouvelles techniques se rajoutent.
{{% /transition %}}

{{% ability
  id="sass_appel_vellius"
  title="Sixième technique"
	phase="P2, P3"
  name="Appel de Vellius."
%}}
Fait apparaître une zone d'eau agitée qui traverse toute la salle (dans le même genre que lors de la P2 de Tichondrius).
Après quelques instants, un add traverse la salle en suivant cette ligne et repousse les joueurs qu'il croise en leur infligeant des dégâts.

![Appel de Vellius](/img/sass/sass_appel_vellius.jpg)
{{% /ability %}}

{{% ability
  id="sass_invoc_ossunet"
  title="Septième technique"
	phase="P2, P3"
  name="Invocation d'Ossunet."
%}}
Fait régulièrement apparaître des AOE d'Encre répugnante au sol. Marcher dessus donne un débuff de 10 sec qui inflige des dégâts et réduit la vitesse de déplacement de 25%.
{{% /ability %}}

{{% ability
  id="sass_signe_sarukel"
  title="Huitième technique"
	phase="P2, P3"
  name="Signe à Sarukel."
%}}
Fait apparaître une grosse baleine sur un côté de la pièce, qui attire les joueurs (comme l'effet de souffle sur Gul'Dan ou Dresaron au Fourré Sombrecoeur) et inflige des dégâts à tout le raid toutes les 2 secondes. Si un joueur se trouve à moins de 15 mètres de la baleine, il est dévoré et tué.
Pour la faire disparaître, il faut la nourrir de 3 Encre répugnante.
3 joueurs doivent donc passer dans une AOE pour obtenir le débuff et s'approcher de la baleine pour qu'elle l'absorbe.

{{% attention %}}Cette technique doit être gérée le plus rapidement possible, car le mouvement gêne fortement l'exécution des autres techniques.{{% /attention %}}

![Signe à Sarukel](/img/sass/sass_signe_sarukel.jpg)
{{% /ability %}}

{{% transition id="sass_transi_p2_p3" %}}
A 30% HP, Sass'zine passe en P3.

Les tanks doivent toujours gérer le [Fardeau de douleur](#sass_fardeau_douleur) et les adds du [Fond des abysses](#sass_fond_abysses) ; et les autres joueurs doivent toujours gérer le [Tir de l'hydre](#sass_tir_hydre).

[L'appel de Vellius](#sass_appel_vellius) continue à apparaître, ainsi que [Sarukel](#sass_signe_sarukel).

En plus de cela, le boss récupère les techniques [Tornades tranchantes](#sass_tornades_tranchantes) et [Faim dévorante](#sass_faim_devorante), mais pas les méduses ; les débuffs ne peuvent donc plus être retirés et vont servir de soft-enrage.

Cette phase doit donc être expédiée au plus vite.
{{% /transition %}}

{{% ability
  id="sass_sombres_profondeurs"
  title="Mode Héroïque"
	phase="P2, P2, P3"
  name="Sombres profondeurs."
	mode="hm"
%}}
En mode de difficulté héroïque, les adds de [Fond des abysses](#sass_fond_abysses) vont lancer des casts de Sombres Profondeurs, ce qui a pour effet de les téléporter sur un membre du raid au hasard et de lui infliger des dégâts.
Pour garder le contrôle des adds il faut donc couper ces casts au maximum, et lorsqu'ils sont bas en vie utiliser des sorts de contrôle pour que l'AOE qu'ils laissent soit positionné stratégiquement.

![Sombres profondeurs](/img/sass/sass_sombres_profondeurs.jpg)
{{% /ability %}}
