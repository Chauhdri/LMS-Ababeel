import React, { useEffect, useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { query, collection, getDocs, where } from "firebase/firestore";
import { auth } from "./components/firebaseServer";
import { useNavigate } from 'react-router-dom';
import Students from './students';








export default function Dashboard(props) {

    const [user, loading, error] = useAuthState(auth);
    const [email, setEmail] = useState("");
    const [permission, setPermission] = useState(false);
    const navigate = useNavigate();

    const fetchPermission = async () => { userData["Role"][props.role]&& setPermission(true);}



    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
        fetchUserEmail();
    }, [user, loading]);

    //fetching data from auth
    const fetchUserEmail = async () => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();
            setEmail(data.email);
            emailVerifying(data.email);
        } catch (err) {
            console.error(err);
            alert("An error occured while fetching user data");
        }
    };

    //verifying either user data exits or not
    const emailVerifying = (email) => {
        
    }


    return (

        <>
        {permission&&user&&<Students />}
        
    </>

    )
}