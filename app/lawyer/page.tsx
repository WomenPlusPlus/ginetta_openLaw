import '../globals.css'
import { sql } from '@vercel/postgres'

import LawyerCard from './components/LawyerCard'

export default async function Lawyers({
    params
  } : {
    params: { user: string }
  }): Promise<JSX.Element> {
    const { rows } = await sql`SELECT * from lawyer order by scores desc LIMIT 4`;
  
    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold mb-10">Lawyers</h1>
            <div className="relative mb-3" data-te-input-wrapper-init>
                <input
                    type="search"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleSearch2"
                    placeholder="Type query" />
                <label
                    for="exampleSearch2"
                    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                    >Search...</label
                >
            </div>
            <div className="flex flex-wrap">
                {rows.map((lawyer, index) => (
                    <div className="mx-4 mb-4">
                        <LawyerCard key={index} {...lawyer} />
                    </div>
                ))}
            </div>
        </div>
    )
}