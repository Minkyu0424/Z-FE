import LoginStartForm from "@/app/components/auth/LoginStartForm" ;
import LoginGetNicknameTag from "@/app/components/auth/LoginGetNicknameTag";


import Image from 'next/image';

const login = () =>{
    return(
        <div className="flex justify-center items-center bg-black">
        <div>
             <LoginStartForm/>
        </div>
        <div>
            <LoginGetNicknameTag/>
        </div>

     </div>
    );
};
export default login;