---
id: Get favori
hide_title: \[GET\] Oeuvre/favori/\{id_utilisateur\}
---
## \[GET\] Oeuvre/favori/\{id_utilisateur\}

### Description

Récupérer les favoris d'un utilisateur.
Cette fonction permet de récupérer uniquement les favoris de l'utilisateur connecté.


### Requête

| Paramètres       |Type      ||
| ------------- | :-----------: | -----: |
| id_utilisateur      | int | obligatoire |


### Réponse

| Paramètres       |Type      |
| ------------- | :-----------: |
| id_oeuvre      | int |  
| titre     |   string    |
| date     |   int    |
| id_artiste     |   string    |
| anecdote     |   string    |
| img     |   string    |

