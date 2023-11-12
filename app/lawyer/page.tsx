import '../globals.css'
import { sql } from '@vercel/postgres'

import LawyerCard from './components/LawyerCard'
import LawyerSearch from './components/LawyerSearch';
import { useSearchParams } from 'next/navigation';

export default async function Lawyers({
    searchParams
  } : {
    searchParams?: { 
        query?: string
        page?: string
     }
  }): Promise<JSX.Element> {
    const { rows } = await sql`SELECT * from lawyer order by scores desc`;
    const query = searchParams?.query || ''
    const currentPage = Number(searchParams?.page || 1)

    const filteredLawyers = rows.filter((lawyer) =>
    lawyer.name.toLowerCase().includes(query.toLowerCase())
    )
  
    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold mb-10">Lawyers</h1>
            <div className="relative mb-3" data-te-input-wrapper-init>
                <LawyerSearch />
            </div>
            <div className="flex flex-wrap justify-center">
                {filteredLawyers.map((lawyer, index) => (
                    <div className="mx-4 mb-4" key={index}>
                        <LawyerCard id={0} name={''} language={[]} employed_type={''} specialty_areas={[]} location_km={0} price_per_hour={0} winning_rate={0} review={0} provono={0} n_experience={0} earlist_available_within_n_day={0} average_response_hour={0} y={0} scores={0} {...lawyer} />
                    </div>
                ))}
            </div>
        </div>
    )
}