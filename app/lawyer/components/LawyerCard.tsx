import '../../globals.css'

const LawyerCard: React.FC<ILawyerCard> = ({ 
    name,
    specialty_areas,
    n_experience,
    language,
    price_per_hour,
    review 
}
) => {
    return (
        <div className="bg-white rounded-md p-5 shadow-lg mb-5 flex flex-col justify-between" style={{maxWidth : '300px', minHeight : '400px'}}>
            <div className="flex items-center justify-center mb-4 bg-gray-100 p-2">
                <img
                    src='https://as2.ftcdn.net/v2/jpg/02/29/75/83/1000_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg'
                    alt={`${name}'s profile`}
                    className="rounded-full h-20 w-20  object-cover"
                />
            </div>
            <h2 className="text-xl font-bold mb-2">{name}</h2>
            <div>
                <p className="text-gray-600 mb-2">{specialty_areas.join(', ')}</p>
                <p className="text-gray-600 mb-2">{`Languages: ${language.join(', ')}`}</p>
            </div>
            <div className="mt-auto pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{`${n_experience ?? 0} years`}</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{`${price_per_hour ?? 0} CHF/h`}</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{`Review: ${review}/5`}</span>
            </div>
        </div>
    );
};

export default LawyerCard;
