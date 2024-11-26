import { authorize } from "react-native-app-auth";
import * as Keychain from "react-native-keychain";
import Config from "react-native-config";

export async function authentication(onSuccess, onError) {
  const config = {
    issuer: Config.API_URL_AUTHENTICATION_SPOTIFY,
    clientId: Config.CLIEND_ID_SPOTIFY,
    scopes: [
      'user-read-email',
      'user-library-read',
      'user-top-read',
      'user-read-recently-played',
      'playlist-read-private',
      'playlist-read-collaborative',
      'playlist-modify-public',
    ],
    redirectUrl: 'myapp://callback',
  };

  try{
    const result = await authorize(config);
    if(result.accessToken){
        const expirationDate = new Date(result.accessTokenExpirationDate).getTime();
        await Keychain.setGenericPassword(
            'spotify',
            JSON.stringify({
                accessToken: result.accessToken,
                refreshToken: result.refreshToken,
                expirationDate: expirationDate
            })
        );
        if(onSuccess){
            onSuccess();
        }
    }
  }catch(error){
    console.log('Authentication error: ', error);
    if(onError){
        onError();
    }
  }
}
