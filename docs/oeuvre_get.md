---
id: Get oeuvre
hide_title: \[GET\] Oeuvre/\{id_oeuvre\}
---
## \[GET\] oeuvres/\{id_oeuvre\}

### Description

Récupérer les informations d'une oeuvre.
Si aucun id n'est indiqué, toutes les oeuvres seront retournées.

### Requête

| Paramètres       |Type      ||
| ------------- | :-----------: | -----: |
| id_oeuvre      | int | facultatif |


### Réponse

| Paramètres       |Type      |
| ------------- | :-----------: |
| id      | int |  
| titre    |   string    |
| date    |   int    |
| img     |   string    |
| anecdote     |   string    |
| mouvement     |   string    |
| artiste     |   string    |


