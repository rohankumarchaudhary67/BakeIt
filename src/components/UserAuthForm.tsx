"use client"

import { Button } from "./ui/Button"
import { cn } from "@/lib/utils"
import { FC, useState } from 'react'
import {signIn} from "next-auth/react"
import { Icons } from "./Icons"

interface UserAuthFormProps extends React.HtmlHTMLAttributes<HTMLDivElement> {

}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const loadingWithGoogle = async () => {
        setIsLoading(true);

        try {
            await signIn('google');
        } catch (error) {
            // Toast Notifciation
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className={cn('flex justify-center', className)} {...props}>
            <Button onClick={loadingWithGoogle} isLoading={isLoading} size={'sm'} className="w-full">
                {isLoading ? null : <Icons.google className="h-4 w-4 mr-2" />}
                Google
            </Button>
        </div>
    )
}

export default UserAuthForm