import { firestore } from "./firestore"


const collection = firestore.collection("auth")

export class Auth {
    ref: FirebaseFirestore.DocumentReference
    data: any
    constructor(id) {
        this.ref = collection.doc(id)
    }
    async pull() {
        const snap = await this.ref.get()
        this.data = snap.data()
    }
    async push() {
        this.ref.update(this.data)
    }

    //el static lo hace un metodo de toda la clase
    static async findByEmail(email: string) {
        const cleanEmail = email.trim().toLowerCase()
        const results = await collection.where("email", "==", cleanEmail).get()
        if (results.docs.length) {
            const first = results.docs[0]
            const newAuth = new Auth(first.id)
            newAuth.data = first.data()
            return newAuth
        } else {
            return null
        }
    }

    static async createNewAuth(data) {
        const newUserSnap = await collection.add(data)
        const newUser = new Auth(newUserSnap.id)
        newUser.data = data
        return newUser
    }

}
