# Meteo3.16

Météo

# Explication

Ok quand vous allez téléchargez mon plugin Meteo3.16 vous allez avoir un dossier WinRar nommé Meteo3.16-master puis quand vous allez l'ouvrire vous allez avoir un dossier nommé Meteo3.16-master, puis dans se dossier il y a un autre dossier nommé Meteo , et bien c'est se dossier nommé Meteo qui faut que vous placez dans le dossier Plugins de Sarah.

Bon si vous avez bien suivi se que j'ai écrit ^^ on passe au chose sérieuse.

Maintenant que vous avez le dossier Meteo, ouvrez votre dossier Meteo , puis une fois que vous l'avez ouvair ouvrez le fichier meteo.prop avec le logiciel Notpad++,

une fois ouvert ,

vous avez cette ligne: "zip": "",

donc vous devez mettre les numéro entre les ""

sa donne sa "zip": "032030",

Heu sa c'est un exemple les numéro ^^ trouve le votre , vous devez avoir 6 numéro au total a placer dans le Zip.

puis vous sauvegardez , et vous relancez Sarah et son serveur.

pour trouvez le numéro du Zip de votre ville rendez-vous sur se site http://www.meteo-france.mobi/home#!france

Réglage de la météo sur l'interface du home

Je pense que sa vas vous plaire.

La mise a jour et porter sur les portlet.html et le portlet.css

donc en gros, sur l'interface de la meteo3.16 sur le home

vous aurez la météo en temps et en heure sur l'interface.

Part défaut j'ai mis Paris , j'aurais pus mettre ma ville

( enfin ma commune 03230 ).

Donc pour changé se petit effet là, aller sur se site,

http://fr.yowindow.com/weatherwidget.php

Mettre le nom de votre ville , puis bien mettre c'est dimension là:

Taille de la fenêtre
Largeur:150

Hauteur:130

Puis aller directement au numéro 8 de l'explication dans le site,

puis cochez My Opera.

En dessous prenez tous le code, puis copier le dans le fichier

portlet.html puis coller le en dessous de sa:

<% stylesheet('assets/'+key+'/portlet.css') %> meteo

puis enregistré , et redémarré Sarah et son serveur ,

et aller dans le home est regardez l'interface de la meteo3.16

A oui cette effet mais 5 a 10 seconde avant d'apparaître, une fois qu'il et charger

vous aller avoir une forme de grosse flèche en gros (play ) donc clique droit dessus et exécuter ce plug-in

Veuillez bien a avoir adobe flash player a jour sinon sa marche pas hein.

Voilà j’espère que cela vous plairas.
