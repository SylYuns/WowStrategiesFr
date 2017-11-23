---
draft: false
title: Molosses de Sargeras
date: 2017-11-22T16:00:00+02:00
intro: Deuxième boss du raid, 2 boss espacés de 40m, vie partagée, techniques contradictoires.
menu:
  sidebar:
    identifier: hounds
    parent: antorus
    weight: 2
---

{{% summary %}}
	IMPORTANT : Ombre, je me pack ; Feu, je m'éloigne. /!\
	Les tanks restent chacun de leur côté tout le fight.
	Les distants au milieu des deux boss, les mélées tous sur le même boss (Shatug).
	Il faut être très réactifs sur les mouvement : se pack ou s'éloigner en fonction du débuff reçu.
{{% /summary %}}

{{% ability
  id="hounds_gueule"
  title="Première technique"
  name="Gueule brûlante / corrompue."
  role="tank"
%}}
  	Les chiens attaquent en cône donc attention à l'orientation.
	Les attaques placent un DoT stackable sur le tank. Quand les stacks montent haut il faut utiliser des CDs et demander du heal, mais les stacks vont disparaître naturellement, pas de swap.

{{% /ability %}}

{{% ability
  id="shatug_33"
  title="Shatug 33% énergie"
  name="Sphère dévorante."
%}}
	Envoie une orbe violette dans la direction d'un joueur au hasard qui inflige des dégâts et attire les joueurs. 
	Il suffit de s'en éloigner.
	![Sphère](/img/antorus/hounds/hounds_sphere.jpg)
{{% /ability %}}

{{% ability
  id="shatug_66"
  title="Shatug 66% énergie"
  name="Poids des ténèbres."
%}}
	Place un débuff AOE sur des joueurs qui les ralentit et après 5 sec les fear. 
	Si l'AOE est soak par 3+ joueurs, pas de fear. Il faut donc se pack.

  ![Poids](/img/antorus/hounds/hounds_poids.jpg)
{{% /ability %}}

{{% ability
  id="shatug_100"
  title="Shatug 100% énergie"
  name="Corruption siphonnée."
%}}
	Inflige des dégâts à tout le raid pendant quelques secondes.
	Place également un débuff AOE sur des joueurs qui inflige des gros dégâts.
	Les dégâts peuvent et doivent être partagés avec le plus de joueurs possibles. Il faut donc se pack.

  ![Poids](/img/antorus/hounds/hounds_siphon.jpg)
{{% /ability %}}

{{% ability
  id="fharg_33"
  title="F'harg 33% énergie"
  name="Regard de désolation."
%}}
	Marque plusieurs joueurs et envoie un rayon en ligne droite depuis le boss vers les joueurs marqués. 
	Ceux-ci doivent s'écarter pour que personne d'autre ne soit touché (cf. les Lames sur l'Avatar).

  ![Poids](/img/antorus/hounds/hounds_regard.jpg)
{{% /ability %}}

{{% ability
  id="fharg_66"
  title="F'harg 66% énergie"
  name="Toucher magmatique."
%}}
	Envoie un joueur en l'air, lui met un gros DoT et de ce joueur vont partir des AOEs sur des joueurs au hasard, qui doivent être évitées.

  ![Poids](/img/antorus/hounds/hounds_toucher.jpg)
{{% /ability %}}

{{% ability
  id="fharg_100"
  title="F'harg 100% énergie"
  name="Corruption enflammée."
%}}
	Inflige des dégâts à tout le raid pendant quelques secondes.
	Marque des joueurs avec un DoT de 9 sec qui inflige des dégâts en zone autour d'eux. 
	Les joueurs visés doivent s'écarter du raid.

  ![Poids](/img/antorus/hounds/hounds_corruption.jpg)
{{% /ability %}}

{{% transition id="hounds_transi" %}}
	A certains moments les chiens vont lancer leurs techniques en même temps. Dans certains cas, cela peut poser problème :
	
	* 33% ombre et 100% feu : orbe qui attire + joueurs qui font des dégâts en AOE => utiliser des CDs de mouvement.
	* 100% ombre et 66% feu : les joueurs doivent se packer pour partager les dégâts d'ombre mais des AOEs de feu visent les joueurs au hasard => tout le monde packé sur un symbole et se déplace sur un autre symbole en même temps quand les AOEs arrivent.
	* 66% ombre et 100% feu : pack pour ne pas être fear + joueurs qui font des dégâts en AOE => si vous avez le fear, pack ; si vous avez le feu, dépack ; si vous avez les deux, pack et petit CD heal.
	* 100% ombre et 100% feu : gros dégâts sur tout le raid + débuff à soak et débuff où il faut s'éloigner => si vous avez l'ombre, pack ; si vous avez le feu, dépack ; si vous avez les deux, dépack et bonne mort (sauf si immune). CDs heal sur ce combo.
	
{{% /transition %}}

{{% ability
  id="hounds_hm"
  title="Mode Héroïque :"
  mode="hm"
%}}
  A priori rien de plus en Héroïque.
{{% /ability %}}
