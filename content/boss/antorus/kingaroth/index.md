---
draft: false
title: Kin'Garoth
date: 2017-11-22T16:00:00+02:00
intro: Septième boss du raid, deux phases qui se répètent : boss solo puis spawn d'adds.
loots: Drop les gants T21
menu:
  sidebar:
    identifier: king
    parent: antorus
    weight: 7
---

{{% summary %}}
	Phase de déploiement : le boss est seul et lance des techniques simples. 
	Phase de construction : fait apparaître des adds dans les zones de construction qui doivent être burst rapidement.
	Attention au positionnement des tanks par rapport au raid.
	En NM 2 adds à chaque P2, en HM 3 adds.
{{% /summary %}}

{{% ability
  id="king_tank"
  title="Première technique"
  name="Frappe de forge."
  role="tank"
%}}
  	Attaque qui inflige de gros dégâts AOE sur le tank et lui place un débuff de 20sec qui augmente les dégâts reçus de la prochaine Frappe de forge de 200%.
	Les tanks doivent switch dès que le débuff disparaît.

{{% /ability %}}

{{% ability
  id="king_reverb"
  title="Deuxième technique"
  name="Frappe réverbérante."
%}}
	Frappe un joueur au hasard en infligeant des dégâts en AOE et place une  mine à sa position. 
	Cette mine va infliger des dégâts dans un rayon de 10m à chaque fois que le boss va relancer Frappe réverbérante.

   ![Frappe](/img/antorus/kingaroth/king_reverb.jpg)
{{% /ability %}}

{{% ability
  id="king_devast"
  title="Troisième technique"
  name="Dévastateur."
%}}
	Se tourne vers une direction aléatoire (joueur aléatoire ?) puis après 2~3 secondes lance un rayon d'énergie en tournant. 
	Cette technique est similaire au rayon de Trilliax dans le Palais Sacrenuit.

  ![Dévastateur](/img/antorus/kingaroth/king_devast.jpg)
{{% /ability %}}

{{% ability
  id="king_bombe"
  title="Quatrième technique"
  name="Bombe diabolique."
%}}
	Fait apparaître une bombe d'énergie (3 bombes en HM), qui va faire le tour de la salle en roulant jusqu'à ce qu'elle touche un joueur.
	Lorsque la bombe explose elle inflige des dégâts à tout le raids, réduits avec la distance.
	L'offtank doit donc être éloigné du gros du raid et les encaisser, en laissant le temps aux healers de remonter tout le monde à chaque fois.

  ![Bombe](/img/antorus/kingaroth/king_bombe.jpg)
{{% /ability %}}

{{% transition id="king_transi1" %}}
	A 100 d'énergie le boss va passer en phase de construction pendant 40 secondes.
	Pendant toute cette phase le raid subit des dégâts constants et la zone est bombardée d'AOEs de fel à esquiver. 
	Dès le début de la P2 les portes vers les plateformes de construction s'ouvrent avec 1 add sur chaque (donc 3 au total - seulement 2 en NM).
	Les adds ont un débuff +30% dégâts reçus qui diminue de 1% par seconde, ils doivent être burst très vite.
	Après 40 sec les portes des plateformes se referment et les joueurs restés dedans sont tués.
{{% /transition %}}

{{% ability
  id="king_anni"
  title="Premier add"
  name="Annihilateur garothi."
%}}
	Fait apparaître des AOEs qui doivent être soak, sinon elles infligent des dégâts à tout le raid.
	Les dégâts ne sont pas partagés, donc une seule personne par AOE (comme l'Arma de KJ).

  ![Annihilateur](/img/antorus/kingaroth/king_anni.jpg)
{{% /ability %}}

{{% ability
  id="king_deci"
  title="Deuxième add"
  name="Décimateur garothi."
%}}
	Place un débuff AOE très large sur des joueurs aléatoires.
	A l'expiration du débuff la position actuelle du joueur est bombardée sur toute la surface de l'AOE.

  ![Décimateur](/img/antorus/kingaroth/king_deci.jpg)
{{% /ability %}}

{{% ability
  id="king_demo"
  title="Troisième add"
  name="Démolisseur garothi."
%}}
	Place un débuff AOE d'ombre sur des joueurs. L'explosion inflige de gros dégâts qui sont divisés entre les joueurs présents dans l'AOE.
	Recevoir des dégâts de cette technique augmente les dégâts d'ombre reçus de 100% pendant 4 sec.
	Les joueurs avec le débuff doivent donc s'écarter les uns des autres et les autres joueurs se répartissent dans les AOEs.

  ![Démolisseur](/img/antorus/kingaroth/king_demo.jpg)
{{% /ability %}}

{{% transition id="king_transi2" %}}
	Après 40 secondes de P2 et même si tous les adds ne sont pas morts, le boss repasse en P1.
{{% /transition %}}

{{% ability
  id="king_heroic1"
  title="Mode Héroïque :"
  mode="hm"
%}}
	En difficulté Héroïque chaque P2 va invoquer 3 adds plutôt que 2.
{{% /ability %}}

{{% ability
  id="king_heroic2"
  title="Mode Héroïque :"
  mode="hm"
%}}
	(Peut-être en NM aussi, ou juste en MM ?) Le dernier add tué va améliorer une des techniques du boss.
	Annihilateur améliore le Dévastateur, Décimateur améliore la Frappe Réverbérante, le Démolisseur améliore la Bombe Diabolique.
	Dévastateur améliorée : pendant le rayon du Dévasteur, des AOEs apparaissent et doivent être soak. 
	Frappe Réverbérante améliorée : à chaque Frappe Réverbérante, chaque joueur du raid inflige des dégâts en zone autour de lui. 
	Bombe Diabolique améliorée : chaque explosion de bombe augmente les dégâts d'ombre subis de 100% sur les joueurs touchés.
{{% /ability %}}
