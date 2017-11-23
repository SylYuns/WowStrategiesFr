---
draft: false
title: Soeurs de la lune
date: 2017-11-22T16:00:00+02:00
intro: "Cinquième boss du raid, 3 phases, 1 seul boss actif à chaque phase, les 2 autres lancent quand même des techniques."
menu:
  sidebar:
    identifier: sisters
    parent: tombe
    weight: 5
---

{{% summary %}}
En P1 (100->70%) : Chasseresse Kasparianne.
En P2 (70->30%) : Capitaine Yathe Heurtelune + Serre-de-lune.
En P3 (30->0%) :  Prêtresse Pyroluna.
Les joueurs doivent régulièrement passer du côté clair/obscur pour enlever leurs stacks.
Quand la salle est entièrement claire/obscure, un des boss lance une technique plus puissante.
{{% /summary %}}

{{% accordion title="Résumé : (clic pour afficher)" %}}
* Faire en sorte de ne pas monter trop haut en stacks. Purger les stacks en changeant de côté de lune.
* Tank-swap sur Glaive Lunaire (P1) et Feu de la Lune (P3). Purger la Désincarnation après Glaive Lunaire.
* Ne pas rester en face de la Chasseresse pour son Glaive de crépuscule.
* Purger le débuff Brûlure Lunaire et Tir Accéléré.
* Pleine/Nouvelle Lune P1, se stack sur la trajectoire du rayon.
* Focus l'add en P2, ne pas le laisser longtemps sous 25% PV.
* Pleine/Nouvelle Lune P2, burst DPS sur le boss et burst heal sur le raid.
* S'écarter du raid avec le débuff Balise Lunaire.
* Pleine/Nouvelle Lune P3, ne pas être au milieu de la salle, esquiver les glaives.
{{% /accordion %}}

{{% ability
  id="sisters_fonts"
  title="Méchanique spéciale"
  name="Fonts d'Elune."
%}}
Le sol de la salle va constamment évoluer, en suivant une évolution lunaire (Nouvelle lune, quart de lune, ..., Pleine lune, etc.)
Tant que le joueur reste du côté clair de la lune, il reçoit un débuff qui se stack, **Suffusion lunaire**, qui augmente les dégâts d'Arcane reçus de 3% par stack.
Tant que le joueur reste du côté obscur de la lune, il reçoit un débuff qui se stack, **Suffusion ombreuse**, qui augmente les dégâts d'Ombre reçus de 3% par stack.
Si le joueur change de côté de la lune (même s'il ne bouge pas ça peut être le sol qui avance), il va proc une **Purge Astrale**, ce qui va lui retirer les stacks de Suffusion lunaire et Suffusion ombreuse en lui infligeant des dégâts, et augmenter les dégâts de la prochaine Purge Astrale de 50% pendant quelques secondes.
Le but n'est donc pas de changer de côté sans cesse, mais seulement quand certaines techniques le demandent.

{{% attention %}}Lorsque le sol est complètement recouvert par le côté clair ou obscur, les boss vont utiliser une technique puissante en fonction de la phase.{{% /attention %}}

![Fonts](/img/sisters/sisters_fonts.jpg)
{{% /ability %}}

{{% transition id="sisters_p1" %}}
Au début du fight, c'est la Chasseresse Krasparianne qui est gérée, les deux autres soeurs sont inciblables.
{{% /transition %}}

{{% ability
  id="sisters_glaive_lunaire"
  title="Première technique"
	phase="P1"
  name="Glaive lunaire."
	role="tank"
%}}
Lance un glaive sur le tank actuel, qui inflige de dégâts à la première cible et rebondit sur 2 cibles supplémentaires.
Le tank doit utiliser un CD pour diminuer les dégâts encaissés.
Le glaive laisse un débuff **Désincarnation**, qui réduit les soins de 75%, les tanks doivent donc s'échanger le boss après cela, et le tank qui a le débuff doit s'il le peut changer de côté de la lune pour enlever le débuff.
{{% /ability %}}

{{% ability
  id="sisters_glaive_crepuscule"
  title="Deuxième technique"
	phase="P1, P2, P3"
  name="Glaive du crépuscule."
%}}
Vise un joueur et place une grosse flèche partant du boss pour identifier où le glaive va partir.
Le glaive inflige des dégâts d'Ombre à tous les personnages sur la trajectoire, les joueurs non-visés doivent donc s'écarter.
Si le joueur visé à beaucoup de stacks de Suffusion Ombreuse, il doit utiliser un CD défensif pour encaisser.

![Glaive du crépuscule](/img/sisters/sisters_glaive_crepu.jpg)
{{% /ability %}}

{{% ability
  id="sisters_brulure_lunaire"
  title="Troisième technique"
	phase="P1, P2, P3"
  name="Frappe lunaire et brûlure lunaire."
%}}
La Prêtresse Pyroluna va attaquer des joueurs avec sa **Frappe Lunaire**, ce qui inflige des dégâts d'arcane.
La Prêtresse va également placer des **Brûlures Lunaires** sur des joueurs, qui est un DOT d'Arcane qui dure 2 minutes 30.
Les joueurs qui reçoivent ce DOT doivent essayer de proc un purge astrale en changeant de côté de la lune, pour faire disparaître le débuff.

{{% attention %}}Si des joueurs sont trop haut en stacks de Suffusion Lunaire, ils vont prendre des dégâts considérables.{{% /attention %}}
{{% /ability %}}

{{% ability
  id="sisters_tir_incorpo"
  title="Cinquième technique"
	phase="P1 - Pleine/Nouvelle Lune"
  name="Tir incorporel."
%}}
Lorsque la lune est Pleine ou Nouvelle, la Capitaine vise un joueur au hasard avec un rayon. Au bout de 8 secondes, inflige de lourds dégâts répartis entre tous les joueurs sur la trajectoire du rayon.
Le joueur visé doit donc se placer au milieu de la pièce, et les autres joueurs se mettent sur la trajectoire.

{{% attention %}}Si le raid a beaucoup de stacks de Suffusion Ombreuse, un CD heal défensif sera nécessaire.{{% /attention %}}

![Tir incorporel](/img/sisters/sisters_tir_incorpo.jpg)
{{% /ability %}}

{{% transition id="sisters_p2" %}}
A 70% de PV, la Chasseresse se retire et c'est la Capitaine Yathe Heurtelune qui prend sa place.
La Chasseresse va quand même utiliser [Glaive du crépuscule](#sisters_glaive_crepuscule) en se téléportant partout dans la salle, les joueurs doivent donc faire attention à son positionnement pour pouvoir éviter le glaive.
La Capitaine garde sa technique [Salve du crépuscule](#sisters_salve_crepu).
La Prêtresse garde ses techniques [Frappe lunaire et brûlure lunaire](#sisters_brulure_lunaire).
{{% /transition %}}

{{% ability
  id="sisters_appel_serre"
  title="Première technique"
	phase="P2, P3"
  name="Tir accéléré et Appel de Serre-de-Lune."
%}}
La Capitaine Yathe Heurtelune remplace son Tir de l'Ombre par un Tir Accéléré, qui au lieu de faire des dégâts directs va infliger un DOT de 5 secondes. Le joueur touché doit essayer de proc la Purge Astrale pour supprimer sa Suffusion Ombreuse.
La Capitaine va surtout appeler Serre-de-Lune, ce qui invoque un add. Cet add doit être tanké et lance des Hurlement Mortel en-dessous de 25% PV, qui infligent des dégâts de raid.
Les dégâts augmentent de 25% à chaque cri. Cet add est donc la priorité des DPS.

![Tir accéléré et Appel de Serre-de-Lune](/img/sisters/sisters_appel_serre.jpg)
{{% /ability %}}

{{% ability
  id="sisters_glaive_spectral"
  title="Deuxième technique"
	phase="P2, P3"
  name="Glaive Spectral."
%}}
La Chasseresse va lancer un glaive rebondissant comme en P1, mais celui-ci ne visera pas forcément le tank.
Les ranges doivent être espacés les uns des autres pour essayer d'empêcher les rebonds du glaive.
{{% /ability %}}

{{% ability
  id="sisters_etreinte"
  title="Troisième technique"
	phase="P2 - Pleine/Nouvelle Lune"
  name="Etreinte de l'éclipse."
%}}
Lorsque la lune est Pleine ou Nouvelle, la Prêtresse va placer un énorme bouclier d'absorption de dégâts sur la Capitaine, et des shiels d'absorption de heal sur tous les joueurs.

{{% attention %}}Tous les shields doivent être cassés en moins de 12 secondes, en utilisant des CDs de DPS et des CDs de Heal !{{% /attention %}}

{{% attention %}}Si les Heals n'arrivent pas à casser les shields d'absorb, les joueurs doivent s'espacer de 8 mètres les uns des autres pour ne pas prendre de dégâts. Les dégâts du shield sur le boss ne peuvent pas être esquivés.{{% /attention %}}

![Etreinte de l'éclipse](/img/sisters/sisters_etreinte.jpg)
{{% /ability %}}

{{% transition id="sisters_p3" %}}
A 40% de PV, la Capitaine se retire et c'est la Prêtresse Pyroluna qui va prendre sa place.
La Chasseresse conserve ses techniques [Glaive du crépuscule](#sisters_glaive_crepuscule) et [Glaive Spectral](#sisters_glaive_spectral), toujours en sautant dans la salle.
La Capitaine garde ses techniques [Salve du crépuscule et Tir de l'Ombre](#sisters_salve_crepu).
La Prêtresse continue de lancer des [Brûlures Lunaires](#sisters_brulure_lunaire).
{{% /transition %}}

{{% ability
  id="sisters_feu_lune"
  title="Première technique"
	phase="P3"
  name="Feu de la lune."
	role="tank"
%}}
La Prêtresse remplace sa technique Frappe Lunaire par Feu de la Lune, qui est un DOT sur le tank actuel.
Les tanks doivent donc s'échanger le boss quand ils ont ce DOT.
{{% /ability %}}

{{% ability
  id="sisters_balise_lunaire"
  title="Deuxième technique"
	phase="P3"
  name="Balise Lunaire."
%}}
La Prêtresse va également placer des débuffs sur des joueurs, leur infligeant de légers dégâts des arcanes pendant 6 secondes.
A la fin des 6 secondes, la zone où le joueur se trouve est bombardée de dégâts d'arcane et les joueurs présents dans la zone sont silence.
Les joueurs qui reçoivent le débuff doivent donc s'écarter du raid.
{{% /ability %}}

{{% ability
  id="sisters_profusion"
  title="Troisième technique"
	phase="P3 - Pleine/Nouvelle Lune"
  name="Profusion de glaives."
%}}
Lorsque la lune est Pleine ou Nouvelle, la Chasseresse va lancer un énorme glaive au centre de la salle.
Le glaive va alors se diviser en plusieurs glaives qui vont se diriger vers les bords de la salle en infligeant des dégâts.
Il est donc important d'éviter le centre de la salle lors de la P3.

![Profusion de glaives](/img/sisters/sisters_profusion.jpg)
{{% /ability %}}

{{% ability
  id="sisters_heroic_mode"
  title="Mode Héroïque"
	phase="P1, P2, P3"
  name="Techniques doublées."
	mode="hm"
%}}
En mode de difficulté héroïque, au lieu d'une technique puissante à chaque phase, les joueurs devront faire face à deux d'entre elles.
En P1, en plus de [Tir Incorporel](#sisters_tir_incorpo), il faudra gérer l'[Etreinte de l'éclipse](#sisters_etreinte).
En P2, en plus de l'[Etreinte de l'éclipse](#sisters_etreinte), il faudra gérer la [Profusion de glaives](#sisters_profusion).
En P3, en plus de la [Profusion de glaives](#sisters_profusion), il faudra gérer le [Tir Incorporel](#sisters_tir_incorpo).
{{% /ability %}}
