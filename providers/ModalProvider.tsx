"use client";

import AuthModal from "@/components/AuthModal";
import { useEffect, useState } from "react";

const ModalProvider = () => {
    //hydrationエラーを防ぐために、確実にクライアントサイドで実行されるようにする。
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;
    
    return (
        <>
           <AuthModal />
        </>
    )
}
export default ModalProvider;