import * as Keychain from 'react-native-keychain';

export async function getAccesToken(){
    try{
        const credentials = await Keychain.getGenericPassword();
        if(credentials){
            const {accessToken, refreshToken, expirationDate} = JSON.parse(credentials.password);
            const now = Date.now();
            if(now < expirationDate){
                return {isValid: true};
            }else{
                return {isValid: false}
            }
        }else{
            return {isValid: false}
        }
    }catch(error){
        console.error('Error fetching access token:', error);
        return {isValid: false}
    }
}