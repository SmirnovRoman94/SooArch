export default function (contex){
    console.log('auth')
    if(!contex.store.getters.checkAuthUser){
        contex.redirect('/admin/auth')
    }
}