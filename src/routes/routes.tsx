import React, { useContext } from "react";

import StackRoutes from "./StackRoutes";
import DrawerRoutes from "./DrawerRoutes";

import { AuthContext } from "../contexts/Auth";

export default function Routes() {

    const {user, isAuth} = useContext(AuthContext)

    return (
        <>
            {
                isAuth ? <StackRoutes/> : <DrawerRoutes/>
            }
        </>
    );
}