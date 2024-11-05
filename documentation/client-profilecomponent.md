# Documentation du Composant `ClientProfileComponent`

## Introduction

Le composant `ClientProfileComponent` permet à un utilisateur de gérer son profil client. Il inclut la possibilité de visualiser et d'éditer des informations personnelles telles que le nom, l'adresse, et le genre, ainsi que de gérer un identifiant unique (CIN). Ce composant interagit avec plusieurs services pour récupérer les données de l'utilisateur, charger les genres disponibles, et soumettre de nouvelles informations clients.

---

## Propriétés

### Variables d'état

- **`user`** (`ApiMeGetCollection200Response | null`) : Contient les données de l'utilisateur actuel récupérées via le service `UserService`.
- **`isLoading`** (`boolean`) : Indicateur de chargement, utilisé pour afficher un spinner pendant les appels API.
- **`genders`** (`ApiGendersGetCollection200Response[]`) : Tableau contenant les genres disponibles récupérés via le service `GenderManagementService`.
- **`allMembers`** (`GenderManagementJsonldGenderCollectionGet[]`) : Liste des membres associés à chaque genre.
- **`clientForm`** (`FormGroup`) : Le formulaire réactif qui contient les informations du client, incluant des champs pour le CIN (Carte d'Identité Nationale), le nom, le prénom, l'adresse et le genre.
- **`cinFields`** (`number[]`) : Tableau contenant les 12 chiffres du CIN sous forme de champs individuels.
- **`cinFieldsInvalid`** (`boolean`) : Indicateur de validité pour les champs CIN.
- **`showModal`** (`boolean`) : Détermine si une alerte modale doit être affichée ou non.
- **`modalTitle`** (`string`) : Le titre à afficher dans la modale.
- **`modalMessage`** (`string`) : Le message à afficher dans la modale.
- **`alertType`** (`string`) : Type d'alerte ('success' ou 'danger').
- **`client`** (`ClientJsonldClientCollectionGetClientCollectionPostClientCollectionPutGenderCollectionGet`) : Contient les informations du client actuel si elles sont disponibles.

---

## Constructeur

### `constructor(userService: UserService, fb: FormBuilder, clientService: ClientService, genderManagementService: GenderManagementService)`

Le constructeur initialise les services nécessaires et crée le formulaire réactif avec des contrôles pour chaque chiffre du CIN.

- **`userService`** : Service pour récupérer les informations de l'utilisateur actuel.
- **`fb`** : FormBuilder utilisé pour construire le formulaire réactif.
- **`clientService`** : Service pour gérer les informations clients.
- **`genderManagementService`** : Service pour récupérer les genres disponibles.

---

## Méthodes

### `ngOnInit()`

Cette méthode est appelée lors de l'initialisation du composant. Elle charge les données de l'utilisateur et les genres disponibles en appelant les méthodes `getUserData()` et `loadGenders()`.

### `getUserData()`

Appelle le service `UserService` pour récupérer les données de l'utilisateur actuel et charge les informations clients si l'utilisateur est un client existant.

### `loadGenders()`

Récupère la liste des genres disponibles via `GenderManagementService` et charge les membres associés à ces genres via `getAllMembers()`.

### `onInputChange(event: Event, index: number)`

Gère le changement dans les champs CIN. Lorsqu'un champ est rempli, le focus est déplacé vers le champ suivant. Vérifie également la validité du CIN avec `checkCinValidity()`.

### `checkCinValidity()`

Vérifie si tous les champs du CIN ont été remplis correctement. Si un champ est vide, la validité du CIN est considérée comme incorrecte.

### `submitNewClient()`

Soumet le formulaire pour créer un nouveau client si celui-ci est valide. Les données du formulaire sont envoyées à l'API pour créer un nouveau client, et une alerte de succès est affichée si l'opération est réussie.

### `showAlert(title: string, message: string, type: string)`

Affiche une alerte modale avec un titre, un message et un type (succès ou erreur).

### `resetForm()`

Réinitialise le formulaire client, effaçant toutes les valeurs.

### `getClientSaved()`

Récupère les informations d'un client existant si l'utilisateur est un client en appelant l'API client avec un ID.

### `getAllMembers()`

Charge les membres associés aux genres récupérés et les stocke dans `allMembers`.

### `formatCin(cinValues: string)`

Formate la chaîne du CIN en ajoutant des espaces tous les 3 chiffres (par exemple, "123 456 789 012").

### `getClientId(url: string): string | null`

Extrait l'ID du client d'une URL de type `/clients/{id}`.

---

## Utilisation du Formulaire

Le formulaire `clientForm` utilise la validation réactive d'Angular avec les contrôles suivants :

- **`name`** : Le prénom du client (obligatoire).
- **`lastName`** : Le nom de famille du client (obligatoire).
- **`address`** : L'adresse du client (obligatoire).
- **`cin0` à `cin11`** : Champs pour les 12 chiffres du CIN, chaque champ est validé avec un motif de chiffre (`[0-9]`).
- **`gender`** : Genre du client, qui doit correspondre à l'un des genres disponibles (obligatoire).

### Validation du formulaire

- Chaque champ de CIN est validé individuellement pour s'assurer qu'il contient un chiffre.
- Le formulaire est validé lors de la soumission pour s'assurer que tous les champs obligatoires sont remplis.

---

## Services utilisés

### `UserService`

Le service `UserService` est utilisé pour récupérer les données de l'utilisateur actuel via l'API `apiMeGetCollection`.

### `ClientService`

Le service `ClientService` permet d'interagir avec l'API des clients pour récupérer ou créer des données clients via les méthodes `apiClientsPost` et `apiClientsIdGet`.

### `GenderManagementService`

Le service `GenderManagementService` récupère la liste des genres via l'API `apiGendersGetCollection`.

---

## Conclusion

Le composant `ClientProfileComponent` fournit une interface utilisateur complète pour gérer les informations d'un client, incluant la validation et la soumission d'un formulaire. Il interagit avec plusieurs services backend pour récupérer les données nécessaires (comme l'utilisateur, les genres, et les informations clients existants) et offre des retours utilisateurs sous forme d'alertes modales.
