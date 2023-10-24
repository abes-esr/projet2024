# Calendrier prévisionnel du projet 2024-2028 de l'Abes

<u>Avertissement</u>

Ce calendrier prévisionnel du [projet 2024-2028 de l'Abes](./projet2024) a été réalisé en l'état actuel de nos connaissances. Il est susceptible d'évoluer tout au long de la période en fonction de son déroulé. 

## Le système de gestion de métadonnées de l’Abes 

Le calendrier du renouvellement du SGM de l'Abes est présenté en deux parties. La première partie « Réinformatisation - Prestataire » fait référence à tout le travail qui sera réalisé entre l'Abes et le(s) prestataire(s) pour sa réinformatisation. La seconde partie « Réinformatisation - Abes » fait référence au travail des équipes Abes sur son système actuel et le travail nécessaire pour migrer vers le nouveau système.

```mermaid
gantt
    tickInterval  6month
    axisFormat %Y
    dateFormat YYYY-MM-DD

    section Réinformatisation - Prestataire
      expression besoin         :rp1,2024-01-01,180d
      benchmarking et sourcing  :rp2,2024-01-01,180d
      rédaction cahier des charges        :rp3,2024-04-01,180d
      procédure de mise en concurrence :rp4,after rp3,1y
      Choix arrété du SGM        :milestone,m1,after rp4, 0d
      Accompagnement prestataire(s) :rp5,after rp4,2028-12-31
      Mise en test SGM           :milestone,m2,2026-01-01,0d
      Mise en prod SGM étape 1 :milestone,m3,2027-01-01,0d
      Mise en prod SGM étape 2 :milestone,m4,2027-10-01,0d
      Mise en prod SGM étape 3 :milestone,m5,2028-10-01,0d
      Maintenance prestataire(s)    :rp6,2027-01-01,2028-12-31
    
    section Réinformatisation - Abes
      phase 1 - coeur du système             :ra1,2024-09-09,2026-01-01
      phase 2 - intégration satellite        :ra2,2026-01-01,2027-03-31
      phase 3 - refonte satellite et nouveaux services :ra3,2027-01-01,2028-12-31

    Fin du projet           :milestone,2028-12-31,0d
```

Le détail de la répartition Abes et prestataire(s) n'est pas encore figé.

Les étapes 1, 2 et 3 du marché indiquent que nous demanderons au(x) prestataire(s) 3 livraisons successives du SGM. Le contenu de ces livraisons sera défini pendant la phase d'expression des besoins et de benchmarking. Chaque livraison aura un périmètre défini qui pourra contenir des fonctionnalités et/ou des données à faire gérer par le SGM.

Les phases 1, 2 et 3 ne sont pas détaillées dans ce calendrier. Elles font écho aux fortes dépendances expliquées dans la partie 2 du projet.

La phase 1 correspond aux étapes visant à préparer le nécessaire avec le prestataire pour un objectif d'ouverture publique du SGM en test. Cette phase inclut par exemple le travail d'installation, de configuration, de préparation et de migration des données dans le SGM à articuler ou pas avec l'accompagnement prestataire(s).

La phase 2 correspond au travail que l'on ne peut pas différer en phase 3 visant soit à activer des fonctionnalités dans le SGM qui viendront remplacer certaines applications satellites existantes, soit à connecter le plus rapidement possible les applications satellites qui ne peuvent pas être remplacées ou bien qui ont dans leurs fonctionnalités l'écriture dans le SGM. En effet, les applications satellites qui écrivent devront être remplacées ou connectées en priorité car une fois le SGM en production, les données y seront gérées. A noter que cette phase 2 est courte et dans le cas où nous manquerions de temps, des fermetures temporaires d'application seraient alors nécessaires pour pouvoir tenir notre calendrier de mise en prod du SGM.

La phase 3 est une suite logique de la phase 2 et elle correspond au travail d'ouverture aux réseaux de nouveaux services prévus en natif dans le nouveau SGM et au travail de connexion des dernières applications satellites sur le SGM, ce travail pouvant nécessiter des refontes du fait de la dette technique accumulée.


## Une « base de métadonnées » pour l’ESR

```mermaid
gantt
    tickInterval  6month
    axisFormat %Y
    dateFormat YYYY-MM-DD

      Référentiel des structures              :d1,2024-01-01,2026-12-31
      Référentiel des personnes               :d3,2024-01-01,2028-12-31
      Automatisation des exemplaires imprimés :d4,2027-06-01,2028-12-01
      Nouveaux flux / API à créer             :d5,2027-06-01,2028-12-01
      APIs écriture biblios - GT              :d6,2025-01-01,2026-06-01
      APIs écriture biblios - Décision        :milestone,2026-06-01,0d

    Fin du projet           :milestone,2028-12-31,0d
```

Les travaux de réflexion, par exemple sur le référentiel structures, peuvent débuter avant que la réinformatisation ne commence. Toutes les opérations liées à la mise en oeuvre de nouveautés sont reportées après la réinformatisation.

## Acquisitions de documentation électronique

```mermaid
gantt
    tickInterval  6month
    axisFormat %Y
    dateFormat YYYY-MM-DD

      Travail frais de gestion       :ad1,2024-01-01,2024-06-01
      Mise en place frais de gestion :ad2,2024-06-01,2025-04-01
      Définition des critères GC     :ad3,2024-01-01,2024-04-01
      Formalisation travail avec Couperin :ad4,2024-01-01,2024-12-31

    Fin du projet           :milestone,2028-12-31,0d
```

Tout le travail d'évolution de la mission Acquisition de documentation électronique de l'Abes est peu dépendante de la réinformatisation de l'Abes. Il peut donc débuter dès les premières années du projet.


## Réseaux et partenaires

```mermaid
gantt
    tickInterval  6month
    axisFormat %Y
    dateFormat YYYY-MM-DD

      Groupe de travail sur les modes de représentation des réseaux :r1,2024-10-01,2025-12-31
      Renouvellement relation aux réseaux - CoS :r2,2024-01-01,2024-06-01
      Renouvellement relation aux réseaux - DSI :r3,2025-04-01,2026-12-31 
      Rénovation Sudoc-PS - GT culture-ESR	    :r4,2024-02-01,2024-12-31
      Rénovation Sudoc-PS - Mise en oeuvre      :r6,2025-01-01,2027-12-31						

    Fin du projet           :milestone,2028-12-31,0d
```
Le travail de réflexion et de dialogue nécessaire au renouvellement des réseaux a peu de dépendance avec la réinformatisation de l'Abes. C'est pour cette raison que de nombreuses actions peuvent commencer dès le début du projet, en particulier la rénovation du réseau Sudoc-PS.

## Renforcer la politique de Recherche et Développement

```mermaid
gantt
    tickInterval  6month
    axisFormat %Y
    dateFormat YYYY-MM-DD

      Appel à projet / prestation / partenariat en IA jusqu'à mise en prod  :rd3,2024-01-01,2028-12-31

    Fin du projet           :milestone,2028-12-31,0d
```
Les travaux de R&D dépendent de l'obtention de partenariats.  En cas de réponse négative, ce qui peut être posé comme principe dans le calendrier c'est le besoin de lancer d'autres actions via divers moyens comme un appel à projet, une prestation, ou un partenariat. 

L'appel à projet ia-cluster est un élément potentiellement très structurant (projet de 7 ans) qui orientera les activités R&D de l'Abes si la réponse était positive. Il est donc difficile d'écrire un calendrier avant d'avoir la réponse à cet appel à projet.

## Organisation, GPEEC, missions et évaluation

```mermaid
gantt
    tickInterval  6month
    axisFormat %Y
    dateFormat YYYY-MM-DD

      Réorganisation Abes      :o1,2024-01-01,2024-10-01
      GPEEC                    :o2,2024-01-01,2025-12-31
      Décret Abes - réécriture, adoption et publication :o4,2024-01-01,2026-12-31

    Fin du projet           :milestone,2028-12-31,0d
```

La réorganisation de l'Abes fait partie intégrante du projet d'établissement car elle occupera fortement les équipes. Cette restructuration des équipes est placée logiquement en début de projet car elle est le pré-requis pour ensuite mener le projet dans les meilleures conditions possibles. La réécriture du décret de l'Abes est également un élément structurant, donc la réflexion pourra être initiée très tôt dans le projet.
