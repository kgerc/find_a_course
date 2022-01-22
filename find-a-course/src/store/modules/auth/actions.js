export default {
    login() {},
    async signup(context, payload) {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA4ifmpq4XWRQLUS4nRIgf5UEeB1dO8Zec',{
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
        });
        const responseData = await response.json();
        console.log("RESP0", response);
        console.log("RESP", responseData);
        if(!response.ok){
            const error = new Error(responseData.message || 'Failed to authenticate');
            throw error;
        }

        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn,
        })
     },
};