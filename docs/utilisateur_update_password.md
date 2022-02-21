---
id: Update password utilisateur
hide_title: \[POST\] utilisateur/updatePassword
---
## \[POST\] utilisateur/updatePassword

### Description

Modifier le mot de passe d'un compte utilisateur.
Cette fonction permet de modifier uniquement le mot de passe de l'utilisateur connecté.

### Requête

| Paramètres       |Type      ||
| ------------- | :-----------: | -----: |
| old_pwd      | string | obligatoire |
| new_pwd      | string | obligatoire |
| new_pwd_confirm      | string | obligatoire |
| token (header)      | string | obligatoire |


### Réponse

| Paramètres       |Type      |
| ------------- | :-----------: |
| status      | bool |
| error     |   string    |
| message     |   string    |

