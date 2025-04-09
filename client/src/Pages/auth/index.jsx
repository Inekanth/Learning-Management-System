import React, { useState } from 'react'
import {GraduationCap} from 'lucide-react'
import { Link } from 'react-router-dom'
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'


const index = () => {

    const [active, setActive] = useState ('signin')

    function handleTabChange (value) {
        setActive (value)
    }

  return (
    <div className='flex flex-col min-h-screen'>
        <header className='px-4 lg:px-6 h-14 flex items-center border-b'>
            <Link to = {"/"} className = "flex items-center justify-center">
                <GraduationCap className = "bg-black h-8 w-8 mr-4" />
                <span className='font-extrabold text-xl'>LMS Learn</span>
            </Link>
        </header>

        <div className='flex items-center justify-center min-h-screen bg-background'>
            <Tabs value={active} defaultValue='SignIn' onValueChange={handleTabChange} className='w-full max-w-md'>
                <TabsList className = 'grid w-full grid-cols-2'>
                    <TabsTrigger value='signin'> Sign In</TabsTrigger>
                    <TabsTrigger value='signup'> Sign Up</TabsTrigger>
                </TabsList>
                <TabsContent value = 'signin'>SignIn</TabsContent>
                <TabsContent value = 'signup'>SignUp</TabsContent>
            </Tabs>
        </div>
    </div>
  )
}

export default index