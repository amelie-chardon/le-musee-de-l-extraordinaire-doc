---
id: Update data utilisateur
hide_title: \[POST\] utilisateur/updateData
---
## \[POST\] utilisateur/updateData

### Description

Modifier les informations d'un compte utilisateur (sauf mot de passe).
Cette fonction permet de modifier uniquement les informations de l'utilisateur connecté.

### Requête

| Paramètres       |Type      ||
| ------------- | :-----------: | -----: |
| identifiant      | string | obligatoire |
| email      | string | obligatoire |
| mdp      | string | obligatoire |
| token (header)      | string | obligatoire |


### Réponse

| Paramètres       |Type      |
| ------------- | :-----------: |
| status      | bool |
| data      | array |
| error     |   string    |
| message     |   string    |

