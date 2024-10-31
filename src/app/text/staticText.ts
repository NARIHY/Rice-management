export interface StaticText {
  email: string;
  password: string;
  login: string;
  logout: string;
  register: string;
  passwordForgotten: string;
  passwordConfirmation: string;
  conection: string;
}

export const staticTextFR: StaticText = {
  email: 'Addresse email',
  password: 'Mots de passe',
  login: 'Se connecter',
  logout: 'Déconnecter',
  register: 'S\'inscrire',
  passwordForgotten: 'Mots de passe oublié',
  passwordConfirmation: 'Confirmer le mots de passe',
  conection: 'Connexion'
}

export const staticTextMG: StaticText = {
  email: 'Mailaka',
  password: 'Teny miafina',
  login: 'Iditra',
  logout: 'Iala',
  register: 'Isoratra anarana',
  passwordForgotten: 'Adino ny teny miafina',
  passwordConfirmation: 'Amarino ilay teny miafin',
  conection: 'Iditra'
}


export const staticTextUSA: StaticText = {
  email: 'Email address',
  password: 'Password',
  login: 'Login',
  logout: 'Logout',
  register: 'Register',
  passwordForgotten: 'Password forgotten',
  passwordConfirmation: 'Confirm password',
  conection: 'Login'
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
