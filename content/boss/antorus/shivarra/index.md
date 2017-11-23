---
draft: false
title: Sabbat des Shivarra
date: 2017-11-22T16:00:00+02:00
intro: Neuvième boss du raid, les boss se battent 2 par 2 et échangent après 2 techniques de Titans.
menu:
  sidebar:
    identifier: shiv
    parent: antorus
    weight: 9
---

{{% summary %}}
	Les boss sont attaquables 2 par 2 et doivent être écartés l'un de l'autre (buff 99% rési sinon). 
	Chaque boss utilise des techniques spécifiques.
	Les boss font appel aux âmes des Titans pour lancer des techniques spéciales.
	Après 2 techniques de Titans les boss changent.
{{% /summary %}}

{{% ability
  id="shiv_tank"
  title="Technique de tank"
  name="Frappe flamboyante & Gel éclair."
  role="tank"
%}}
  	Frappe flamboyante (Noura) attaque en cône devant le boss et augmente les dégâts de cette technique sur la cible de 50%.
	Gel éclair (Diima) inflige d'énorme dégâts à la cible et la ralenti de 10% pendant 20 secondes. 
	Ces deux techniques se stackent, les tanks devront donc swap.

{{% /ability %}}

{{% ability
  id="shiv_noura"
  title="Premier boss"
  name="Noura, mère des Flammes."
%}}
	Sabre tournoyant : lance une épée enflammée sur un joueur aléatoire puis la fait revenir doucement vers elle. 
	> L'épée inflige des dégâts à l'aterrissage et sur son passage.
	Impulsion fulminante : place un débuff sur un joueur qui lui inflige des dégâts pendant 10 sec.
	> A la fin des 10 sec il inflige des dégâts à tous les joueurs dans les 8 mètres.

{{% /ability %}}

{{% ability
  id="shiv_asara"
  title="Deuxième boss"
  name="Asara, mère de la Nuit."
%}}
	Lames de l'ombre : Invoque 3 lames puis les envoies en ligne droite. 
	> Les joueurs sur la trajectoire subissent des dégâts et sont repoussés.
	Tempête de ténèbres : inflige 1 000 000 de dégâts par seconde à tout le raid pendant 15 secondes.
	> (certains emplacements au sol réduisent les dégâts subis).
{{% /ability %}}

{{% ability
  id="shiv_diima"
  title="Troisième boss"
  name="Diima, mère de l'Obscurité.."
%}}
	Sang gelé : place un shield d'absorb heal sur des joueurs au hasard.
	> Après quelques secondes les joueurs sont stun pendant une durée dépendante du shield restant.
	Orbe de givre : invoque une orbe qui inflige d'énormes dégâts à tout le raid et le slow pendant 20 secondes.
	> L'effet de slow est diminué si les joueurs sont éloignés de l'orbe.
{{% /ability %}}

{{% ability
  id="shiv_thu"
  title="Quatrième boss"
  name="Thu'raya, mère du Cosmos."
%}}
	Toucher du cosmos : cast interruptible qui inflige de gros dégâts à des joueurs aléatoires. Doit être kick.
	Regard cosmique : Lie deux joueurs avec un rayon de Fel.
	> Les joueurs sur la trajectoire du rayon subissent d'énormes dégâts (2.5 ~ 4M).
{{% /ability %}}

{{% transition id="shiv_transi" %}}
	Une des Shivarra ne participant pas au combat lance un long cast (~40 sec ?).
	A la fin de celui-ci, elle invoque des adds qui ont des effets différents en fonction du Titan tortué.
	Les adds doivent être tués le plus rapidement possible, tout en continuant à faire attention aux techniques des boss.
{{% /transition %}}

{{% ability
  id="shiv_titans"
  title=""
  name="Tourment des Titans. "
%}}
	Machinations d'Aman'Thul : ~6 adds autour de la salle qui lancent un cast qui leur rend 100% des HPs et pose un DoT sur le raid. Les joueurs doivent focus les même pour etre sûrs d'en tuer avant la fin de leur cast.
	Fureur de Golganneth : les adds envoient des chaines d'éclairs sur les joueurs se trouvant à moins de 2 mètres les uns des autres.
	Flammes de Khaz'goroth : les adds font apparaître une ligne de flammes en direction du centre de la salle qui inflige d'énormes dégâts par seconde.
	Armée spectrale de Norgannon : invoque beaucoup d'adds (contrôlables) formant des lignes qui vont traverser la salle et infliger d'énormes dégâts aux joueurs proches.

{{% /ability %}}


{{% ability
  id="shiv_heroic"
  title="Mode Héroïque :"
  mode="hm"
%}}
	A priori rien de plus en Héroïque.
{{% /ability %}}
