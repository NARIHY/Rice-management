# Documentation du Pipe `CapitalizeFirstLetterPipe`

## Introduction

Le pipe `CapitalizeFirstLetterPipe` est utilisé pour transformer une chaîne de caractères en mettant en majuscule la première lettre et en minuscule le reste des lettres. Ce pipe est utile pour formater des chaînes de texte où l'on souhaite que le premier caractère soit capitalisé, tout en assurant que les autres caractères soient en minuscules.

---

## Utilisation

### Syntaxe

```html
{{ value | capitalizeFirstLetter }}
```

- **`value`** : La chaîne de texte à transformer.
- Le pipe retourne la chaîne de texte avec la première lettre en majuscule et les autres lettres en minuscules.

### Exemple

Si vous avez une variable `username` qui contient la valeur `"john"`, vous pouvez l'utiliser dans un template HTML de la manière suivante :

```html
<p>{{ username | capitalizeFirstLetter }}</p>
```

Cela affichera : `John`.

---

## Fonctionnement

Le pipe `CapitalizeFirstLetterPipe` implémente l'interface `PipeTransform` d'Angular, ce qui lui permet de transformer la valeur qu'il reçoit. Le comportement du pipe est décrit dans la méthode `transform` :

### Méthode `transform`

```ts
transform(value: string): string {
  if (!value) return value; // Si la valeur est vide ou undefined, retourne la valeur inchangée.
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}
```

- **Paramètre** : `value` — La chaîne de caractères à transformer.
- **Retour** : La chaîne avec la première lettre en majuscule et le reste des lettres en minuscules.
- Si la valeur est vide ou `undefined`, le pipe retourne la valeur inchangée.

### Exemple de transformation

Si vous appliquez le pipe sur les valeurs suivantes :

- `"hello"` -> `"Hello"`
- `"HELLO"` -> `"Hello"`
- `"hElLo"` -> `"Hello"`
- `""` (chaîne vide) -> `""`
- `undefined` -> `undefined`

---

## Déclaration du Pipe

Le pipe `CapitalizeFirstLetterPipe` doit être déclaré dans un module Angular pour être utilisé dans les templates.

### Exemple de déclaration

```ts
import { NgModule } from '@angular/core';
import { CapitalizeFirstLetterPipe } from './capitalize-first-letter.pipe';

@NgModule({
  declarations: [CapitalizeFirstLetterPipe],
  exports: [CapitalizeFirstLetterPipe]
})
export class SharedModule {}
```

Dans cet exemple, le pipe est déclaré dans un module Angular et peut être exporté pour être utilisé dans d'autres modules de l'application.

---

## Conclusion

Le pipe `CapitalizeFirstLetterPipe` fournit une solution simple et élégante pour formater une chaîne de texte en capitalisant uniquement la première lettre et en mettant le reste des lettres en minuscules. Il est particulièrement utile pour afficher des noms d'utilisateurs, des titres ou toute autre donnée textuelle où une capitalisation correcte est requise.
