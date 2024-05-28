import { useState, createContext, ReactNode, useEffect } from "react";

import { auth, db } from '../services/firebaseConnect';

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

import { Alert } from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthProviderProps = {
    children: ReactNode

}
interface UserProps {
    name: string,
    email: string,
    password: string,
    isAdmin: boolean
}
  
  export interface AuthContextType {
    user: UserProps | null;
    isAuth: boolean;
    signIn: () => void;
    signUp: () => void;
    Logout: () => void;
    loadingAuth: boolean;
  }
  
  export const AuthContext = createContext({});
  

export default function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<object | null>()

    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            const storangeUser = await AsyncStorage.getItem("@tickets")
            //AsyncStorage
            if (storangeUser) {
                setUser(JSON.parse(storangeUser))
                setLoading(false);
            }
            setLoading(false);

        }

        loadData();
    }, [])

    async function signIn({ email, password }: UserProps) {
        setLoadingAuth(true)
        await signInWithEmailAndPassword(auth, email, password).then(async (value) => {
            let uid = value.user.uid;

            const docRef = doc(db, "users", uid);
            const docSnap = await getDoc(docRef)

           const docUser:any = await docSnap.data()
           console.log(docUser)
            let data = {
                uid: uid,
                name: docUser.name,
                email: docUser.email,
            }

            setUser(data)
            storangeUser(data)
            setLoadingAuth(false)


        }).catch((error) => {
            switch (error.code) {
                case "auth/invalid-email":
                    Alert.alert("Ops", "O endereço de e-mail é inválido.");
                    break;
                case "auth/user-not-found":
                    Alert.alert("Ops", "Usuário não encontrado")
                    break;
                default:
                    Alert.alert("Ops", "Ocorreu um erro ao tentar autenticar. Por favor, tente novamente mais tarde.")

            }

            setLoadingAuth(false);

        })

    }

    async function signUp({ name, email, password }: UserProps) {
        setLoadingAuth(true)
        console.log({ name, email })

        await createUserWithEmailAndPassword(auth, email, password).then(async (value) => {
            let uid = value.user.uid;

            await setDoc(doc(db, "users", uid), {
                uid: value.user.uid,
                name: name,
                email: email,
                isAdmin: false,
            }).then(() => {
                let data = {
                    uid: uid,
                    name: name,
                    email: value.user.email,
                }
                setUser(data)
                storangeUser(data)
                setLoadingAuth(false)
            })
        }).catch((error) => {
            switch (error.code) {
                case "auth/email-already-in-use":
                    Alert.alert("Ops", "O endereço de e-mail já está sendo usado por outra conta.");
                    break;
                case "auth/weak-password":
                    Alert.alert("Ops", "A senha é muito fraca. Tente uma senha mais forte. No minimo 6 digitos");
                    break;
                case "auth/invalid-email":
                    Alert.alert("Ops", "O endereço de e-mail é inválido.");
                    break;
                default:
                    Alert.alert("Ops", "Ocorreu um erro ao tentar criar a conta. Por favor, tente novamente mais tarde.");
                    console.error("Erro ao criar conta:", error);
            }
            console.log(error);
            setLoadingAuth(false)
        })
    }

    function storangeUser(data: object) {
        AsyncStorage.setItem("@tickets", JSON.stringify(data));
    }

    async function Logout() {
        await signOut(auth);
        AsyncStorage.clear().then(() => {
            setUser(null)
        })
    }





    return (



        <AuthContext.Provider value={{ user, isAuth: !user, signIn, signUp, Logout, loadingAuth }}>
            {children}
        </AuthContext.Provider>
    )

}