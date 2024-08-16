import Image from 'next/image';
import React from 'react';

const OurClient = () => {
    const Imageobj = {
        image1: "/client_logo/marriott.jpg",
        image2: "/client_logo/shangrila.png",
        image3: "/client_logo/shreyas.png",
        image4: "/client_logo/tamara.jpg",
        image5: "/client_logo/thepaul.jpg",
        image6: "/client_logo/aspire.png"
    };

    return (
        <div>
            <div className='text-3xl flex justify-center pt-10 pb-6 bg-white text-black'>𝑭𝒆𝒘 𝒐𝒇 𝑶𝒖𝒓 𝑪𝒍𝒊𝒆𝒏𝒕𝒔</div>
            <div className='flex flex-row flex-wrap gap-8 justify-center border-2 border-[#500724] p-4 bg-[#500724] shadow-xl'>
                {Object.keys(Imageobj).map((key) => (
                    <div key={key}>
                        <Image
                            src={Imageobj[key]} // Access the image path using the key
                            alt={`Image ${key}`} // Provide alt text if needed
                            width={200} // Set width of the image
                            height={200} // Set height of the image
                            className='shadow-xl'
                            loading='lazy'
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurClient;
