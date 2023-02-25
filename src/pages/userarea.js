import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'

const Userarea = () => {
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    User Area
                </h2>
            }>
            <Head>
                <title>Laravel - User Area</title>
            </Head>

            <div className="py-12">
                <h2>
                    You are in secret User AREA using http cookie only Laravel
                </h2>
            </div>
        </AppLayout>
    )
}

export default Userarea
