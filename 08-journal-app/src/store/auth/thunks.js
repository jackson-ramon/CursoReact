import { signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./";

export const checkingAuthentication = ( email, password ) => {
    return async( disaptch ) => {

        disaptch( checkingCredentials() );

    };
};

export const startGoogleSignIn = () => {
    return async( disaptch ) => {

        disaptch( checkingCredentials() );

        const result = await signInWithGoogle();
        
        if ( !result.ok ) return disaptch( logout( result.errorMessage ) );
        
        disaptch( login( result ) );

    };
};