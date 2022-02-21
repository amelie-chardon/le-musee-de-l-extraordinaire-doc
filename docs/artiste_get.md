---
id: Get artiste
hide_title: \[GET\] artiste/\{id_artiste\}
---
## \[GET\] artiste/\{id_artiste\}

### Description

Récupérer les informations d'un artiste. 
Si aucun id n'est indiqué, tous les artistes seront retournés.

### Requête

| Paramètres       |Type      ||
| ------------- | :-----------: | -----: |
| id_artiste      | int | facultatif |


### Réponse

| Paramètres       |Type      |
| ------------- | :-----------: |
| id      | int |  
| nom    |   string    |
| img     |   string    |
| biographie    |   string    |
| id_mouvement     |   int    |
