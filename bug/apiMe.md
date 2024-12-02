Error: src/app/client/client-profile/client-profile.component.html:115:88 - error TS2339: Property 'userIdentifier' does not exist on type 'UserReadUser'.

115                               <p><strong>Identifiant de l'utilisateur:</strong> {{user.userIdentifier}} </p>
                                                                                           ~~~~~~~~~~~~~~

  src/app/client/client-profile/client-profile.component.ts:13:16
    13   templateUrl: './client-profile.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component ClientProfileComponent.


Error: src/app/commons/header-admin/header-admin.component.ts:4:10 - error TS2305: Module '"src/app/rest"' has no exported member 'ApiMeGetCollection200Response'.

4 import { ApiMeGetCollection200Response } from 'src/app/rest';
           ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Bug sur ceci

à corriger aux plus vite

je pense que le bug vien du back
