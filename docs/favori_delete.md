---
id: Delete favori
hide_title: \[DELETE\] Oeuvre/favori/\{id_oeuvre\}/\{id_utilisateur\}
---
## \[DELETE\] Oeuvre/favori/\{id_oeuvre\}/\{id_utilisateur\}

### Description

Supprimer une oeuvre de ses favoris.
Cette fonction permet de supprimer uniquement un favori de l'utilisateur connecté.


### Requête

| Paramètres       |Type      ||
| ------------- | :-----------: | -----: |
| id_oeuvre      | int | obligatoire |
| id_utilisateur      | int | obligatoire |


### Réponse

| Paramètres       |Type      |
| ------------- | :-----------: |
| status      | bool |  
| message     |   string    |
