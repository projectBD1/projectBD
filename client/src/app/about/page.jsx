import Navbar from "../components/Navbar";

export default function About() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar />
            <div className="max-w-7xl mx-auto px-8 py-12">
                <h1 className="text-3xl font-bold my-6 text-center">Bangladesh Genocide: A Call for Recognition</h1>
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                    The 1971 Bangladesh Genocide led to the deaths of nearly 3 million people. Decades later, 
                    activists continue to push for global recognition of this atrocity.
                </p>

                <div className="mt-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mt-6">Protests for Recognition</h2>
                    <p className="mt-2 text-gray-700 leading-relaxed">
                        In September 2022, activists gathered outside the <strong>United Nations Headquarters</strong> in New York, 
                        demanding recognition of the <strong>Bangladesh Genocide of 1971</strong>. The genocide resulted in:
                    </p>
                    <ul className="list-disc pl-6 mt-2 text-gray-700">
                        <li>~3 million deaths over eight months</li>
                        <li>Widespread sexual violence and religious persecution</li>
                        <li>Mass displacement and ethnic cleansing</li>
                    </ul>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-semibold text-gray-900">Historical Context</h2>
                    <p className="mt-2 text-gray-700 leading-relaxed">
                        The roots of the genocide trace back to <strong>1947</strong> when the Indian subcontinent was partitioned. 
                        <strong>West Pakistan</strong> (now Pakistan) politically and economically dominated <strong>East Pakistan</strong> (now Bangladesh), 
                        leading to tensions that culminated in the independence movement of 1971.
                    </p>
                    <p className="mt-2 text-gray-700 leading-relaxed">
                        On <strong>March 25, 1971</strong>, the Pakistani military launched <em>Operation Searchlight</em> to suppress the independence movement.  
                        This led to mass killings, displacement, and a severe humanitarian crisis.  
                    </p>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-semibold text-gray-900">The Fight for Independence</h2>
                    <p className="mt-2 text-gray-700 leading-relaxed">
                        Despite mass violence, Bangladeshis resisted through civilian uprisings and organized forces.  
                        In December 1971, West Pakistan launched a final offensive, killing 1,000 intellectuals.  
                        However, following India’s intervention, <strong>Bangladesh was officially liberated on December 16, 1971</strong>,  
                        a day now celebrated as <strong>Bijoy Dibosh (Victory Day)</strong>.
                    </p>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-semibold text-gray-900">The Ongoing Struggle for Recognition</h2>
                    <p className="mt-2 text-gray-700 leading-relaxed">
                        The <strong>United Nations</strong> has yet to formally recognize the Bangladesh Genocide.  
                        In Geneva, <strong>Sanchita Haque</strong>, Bangladesh’s Deputy Permanent Representative, urged recognition  
                        to hold the Pakistani Army accountable.
                    </p>
                    <p className="mt-2 text-gray-700 leading-relaxed">
                        Beyond historical acknowledgment, recognition could reinforce <strong>global justice</strong> and prevent future atrocities.  
                    </p>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-semibold text-gray-900">Religious Persecution in Bangladesh Today</h2>
                    <p className="mt-2 text-gray-700 leading-relaxed">
                        Religious violence remains an issue in Bangladesh. The <strong>Hindu population</strong> has dropped  
                        from <strong>20% in 1971 to just 8.9% today</strong>, with thousands fleeing due to persecution.
                    </p>
                    <p className="mt-2 text-gray-700 leading-relaxed">
                        In October 2021, <strong>Durga Puja celebrations</strong> were marred by attacks on Hindu temples,  
                        killings, and mass arrests. Many minorities now celebrate under heavy security.
                    </p>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-semibold text-gray-900">A Call to Action</h2>
                    <p className="mt-2 text-gray-700 leading-relaxed">
                        On October 14, 2022, <strong>Representative Steve Chabot</strong> introduced <em>Resolution 1430 </em>  
                        to the U.S. House of Representatives, seeking official recognition of the Bangladesh Genocide.
                    </p>
                    <p className="mt-4 text-gray-700 leading-relaxed font-medium">How You Can Help:</p>
                    <ul className="list-disc pl-6 text-gray-700">
                        <li>Raise awareness through social media and community discussions</li>
                        <li>Sign petitions urging the <strong>U.S. Congress</strong> and <strong>UN</strong> to recognize the genocide</li>
                        <li>Support organizations working on minority rights in Bangladesh</li>
                    </ul>
                </div>

                
            </div>
        </div>
    );
}
