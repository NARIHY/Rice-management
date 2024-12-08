export interface StaticText {
  email: string;
  password: string;
  login: string;
  logout: string;
  register: string;
  passwordForgotten: string;
  passwordConfirmation: string;
  conection: string;
  contact: string;
  name: string;
  lastName: string;
  subject: string;
  message: string;
  requiredInputName: string;
  requiredInputLastName: string;
  requiredInputEmail: string;
  requiredInputPassword: string;
  requiredInputPasswordConfirmation: string;
  requiredInputSubject: string;
  requiredInputMessage: string;
}

export const staticTextFR: StaticText = {
  email: 'Addresse email',
  password: 'Mots de passe',
  login: 'Se connecter',
  logout: 'Déconnecter',
  register: 'S\'inscrire',
  passwordForgotten: 'Mots de passe oublié',
  passwordConfirmation: 'Confirmer le mots de passe',
  conection: 'Connexion',
  contact: 'Contactez-nous',
  name: 'Nom: ',
  lastName: 'Prénom: ',
  subject: 'Sujet de conversation: ',
  message: 'Votre message: ',
  requiredInputName: 'Le nom est requis',
  requiredInputLastName: 'Le prénon est requis',
  requiredInputEmail: 'L\'email est requis et doit être valide',
  requiredInputPassword: ' Le mot de passe est requis (minimum 8 caractères) et doît correspondre à la mots de passe de confirmation.',
  requiredInputPasswordConfirmation: 'La confirmation du mot de passe est requise et doît être pareil que celle du mots de passe entrer en haut.',
  requiredInputSubject: 'Le sujet de conversation est requis',
  requiredInputMessage: 'Le message pour la conversation est requis',
}

export const staticTextMG: StaticText = {
  email: 'Mailaka',
  password: 'Teny miafina',
  login: 'Iditra',
  logout: 'Iala',
  register: 'Isoratra anarana',
  passwordForgotten: 'Adino ny teny miafina',
  passwordConfirmation: 'Amarino ilay teny miafin',
  conection: 'Iditra',
  contact: '',
  name: '',
  lastName: '',
  subject: '',
  message: '',
  requiredInputName: '',
  requiredInputLastName: '',
  requiredInputEmail: '',
  requiredInputPassword: '',
  requiredInputPasswordConfirmation: '',
  requiredInputSubject: '',
  requiredInputMessage: '',
}


export const staticTextUSA: StaticText = {
  email: 'Email address',
  password: 'Password',
  login: 'Login',
  logout: 'Logout',
  register: 'Register',
  passwordForgotten: 'Password forgotten',
  passwordConfirmation: 'Confirm password',
  conection: 'Login',
  contact: '',
  name: '',
  lastName: '',
  subject: '',
  message: '',
  requiredInputName: '',
  requiredInputLastName: '',
  requiredInputEmail: '',
  requiredInputPassword: '',
  requiredInputPasswordConfirmation: '',
  requiredInputSubject: '',
  requiredInputMessage: '',
}

export interface Locales {
  france: string;
  madagascar: string;
  america: string;
}

export const appLocales: Locales = {
  france: 'FR',
  madagascar: 'MG',
  america: 'USA'
};

export const currentAppLocale = {
  currentAppLocale: appLocales.france || appLocales.madagascar || appLocales.america,
};
