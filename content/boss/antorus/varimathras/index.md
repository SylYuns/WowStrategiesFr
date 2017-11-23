---
draft: false
title: Varimathras
date: 2017-11-22T16:00:00+02:00
intro: Huitième boss du raid, inflige d'énormes dégâts aux joueurs isolés.
menu:
  sidebar:
    identifier: vari
    parent: antorus
    weight: 8
---

{{% summary %}}
	Boss poteau en grande partie.
	Les Cacs et les distants sont packés en 2 groupes et passent d'un repère à l'autre pour éviter une AOE.
	Les distants doivent être alignés avec les Cacs et le boss pour que le Cac qui est bump leur arrive dessus.
	Les tanks doivent être proches l'un de l'autre mais pas trop pour ne pas prendre le cleave.
{{% /summary %}}

{{% transition id="vari_specif" %}}
	Deux techniques spécifiques pendant le combat :
	**Misère :** Chaque dégât d'ombre reçu pendant le fight empêche le joueur d'être soigné pendant 7 secondes et augmente les dégâts qu'il subit de 200%.
	**Seul dans les ténèbres :** Tout joueur séparé de plus de 8 mètres des autres reçoit instantanément de gros dégâts d'Ombre.
{{% /transition %}}

{{% ability
  id="vari_tourment"
  title="Torture des Shivarra"
  name="Tourments."
%}}
	Tourment de flammes : inflige des dégâts de feu toutes les secondes.
	Tourment des ombres : inflige des dégâts d'ombre toutes les secondes.
	(HM) Tourment de givre : inflige des dégâts de glace toutes les secondes et ralenti le déplacement de 40%.
	(HM) Tourment de corruption : inflige des dégâts de fel toutes les 5 secondes. Augmente de 50% par tick.
			
{{% /ability %}}

{{% ability
  id="vari_tank"
  title="Première technique"
  name="Attaque d'ombre."
  role="tank"
%}}
  	Attaque en cône devant lui en infligeant des dégâts d'ombre.
	Les tanks doivent swap pour alterner le débuff heal.

{{% /ability %}}

{{% ability
  id="vari_proie"
  title="Deuxième technique"
  name="Proie marquée."
%}}
  	Marque un joueur et charge dans sa direction.
	Le premier joueur sur la trajectoire reçoit des dégâts d'ombre et est éjecté en arrière.
	{{% attention %}}
	Le but est que le joueur qui est bump atterrisse à proximité des distants pour ne pas déclencher *Seul dans les ténèbres*
	{{% /attention %}}

{{% /ability %}}

{{% ability
  id="vari_fissure"
  title="Troisième technique"
  name="Fissure sombre."
%}}
	Fait apparaître 3 failles à l'emplacement de joueurs aléatoires qui infligent des dégâts pendant 6 secondes puis explosent.
	Les joueurs doivent **immédiatement et tous ensemble** se décaller pour ne pas prendre les dégâts de la faille.
	
  ![Fissure](/img/antorus/varimathras/vari_fissure.jpg)
{{% /ability %}}


{{% ability
  id="vari_heroic_etreinte"
  title="Mode Héroïque :"
  name="Etreinte nécrotique."
  mode="hm"
%}}
	Place un débuff sur un joueur qui inflige des dégâts après 6 secondes, et se transmet ensuite à tous les joueurs à moins de 10 mètres.
	Le joueur devra donc s'écarter. 
	{{% attention %}}
	Il doit être tenu à 100% HP au moment où il s'écarte car il va recevoir les dégâts du débuff + *Seul dans les ténèbres* et ne pourra pas être soigné pendant 7 secondes.
	{{% /attention %}}
{{% /ability %}}

{{% ability
  id="vari_heroic_tourment"
  title="Mode Héroïque :"
  name="Tourments"
  mode="hm"
%}}
	En mode Héroïque, les Shivarra utilisent deux versions supplémentaires de tourment [(voir Tourments)](#vari_tourment).
{{% /ability %}}
