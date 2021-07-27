import Api from "@/services/Api"

export default {
    register(credentials){
        return Api().post("register", credentials)
    },
    login(credentials){
        return Api().post("login", credentials)
    },
    add(credentials){
        return Api().post("add", credentials)
    },
    getTodo(){
        return Api().get("home")
    },
    delete(credentials){
        return Api().post("delete", credentials)
    }
}
/*Auth.register({
    email: "test@gmail.com",
    password: "123456"
})*/