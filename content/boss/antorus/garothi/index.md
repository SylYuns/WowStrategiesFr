---
draft: false
title: Brise-monde Garothi
date: 2017-11-22T16:00:00+02:00
intro: Premier boss du raid, de moins en moins de techniques mais de plus en plus de dégâts.
menu:
  sidebar:
    identifier: garothi
    parent: antorus
    weight: 1
---

{{% summary %}}
	Détruire un canon enlève la technique associée, mais renforce l'autre.
	A chaque canon détruit le boss augmente ses dégâts de 20% et inflige des dégâts continus à tout le raid.
	Après la destruction du deuxième canon le boss doit être tombé le plus vite possible. Donc BL en P3.
{{% /summary %}}

{{% ability
  id="garothi_bombardement"
  title="Première technique"
  name="Bombardement gangrené."
  role="tank"
%}}
  	Place un débuff sur le tank puis des missiles le visent toutes les sec pendant 5 secs.
	Tank swap au débuff et le tank visé s'éloigne loin du boss et du raid.

  ![Tanking](/img/antorus/garothi/garothi_bombard.jpg)
{{% /ability %}}

{{% ability
  id="garothi_decimation"
  title="Deuxième technique"
  name="Décimation."
%}}
	Débuff de dégâts AOE placé sur des joueurs aléatoires, ils doivent s'écarter du raid immédiatement.
	![Décimation](/img/antorus/garothi/garothi_decimation.jpg)
{{% /ability %}}

{{% ability
  id="garothi_annihilation"
  title="Troisième technique"
  name="Annihilation."
%}}
	Zones de soak identiques au Toucher de Sargeras sur l'Avatar. 
	Le soak place un DoT sur les joueurs, attention au heal.
	~3 personnes par soak.

  ![Annihilation](/img/antorus/garothi/garothi_annihilation.jpg)
{{% /ability %}}

{{% transition id="garothi_transi" %}}
	A 65% et 35% le boss lance Résolution Apocalyptique.
{{% /transition %}}

{{% ability
  id="garothi_apocalypse"
  title="Quatrième technique"
  name="Résolution Apocalyptique."
%}}
	Les canons sont exposés et un des deux doit être détruit à chaque transi.
	S'il arrive au bout du cast avant qu'un canon soit détruit -> wipe.
	Pendant le cast, des AOE en ligne qui traversent toute la zone apparaissent, il faut les éviter.
	Quand un canon est détruit, le boss lance Eradication qui fait des dégâts en fonction de la distance aux joueurs. Donc tout le monde s'éloigne le plus loin possible.

  ![Apocalypse](/img/antorus/garothi/garothi_apocalypse.jpg)
{{% /ability %}}

{{% transition id="garothi_transi2" %}}
	Le premier canon à détruire est le canon d'Annihilation.
	En P2 la technique Annihilation disparaît mais le boss fait des dégâts constants sur le raid et ses techniques sont 20% plus puissantes.
	En P3 il n'y a plus que la technique de tank à gérer mais les dégâts augmentent beaucoup, il faut donc finir le combat rapidement.
{{% /transition %}}


{{% ability
  id="garothi_hm"
  title="Mode Héroïque :"
  mode="hm"
%}}
  A priori rien de plus en Héroïque.
{{% /ability %}}
