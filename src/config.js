import Admin from "./components/admin/Admin";
import SignUpOrganization from "./components/sign-up/organization/SignUpOrganization";
import SignUpUser from "./components/sign-up/user/SignUpUser";

export const CONFIG = {
    signUpConfig: [
        {
            name: "As User",
            component: <SignUpUser />
        },
        {
            name: "As Organization",
            component: <SignUpOrganization />
        },
        {
            name: "As Admin",
            component: <Admin />
        }
    ]
}