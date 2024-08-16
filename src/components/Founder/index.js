
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


const founder = {
  name: 'Rakhi P',
  image: '/founderpic/author-02.jpg',
  message: '"𝘞𝘦𝘭𝘤𝘰𝘮𝘦 𝘵𝘰 𝘙𝘢𝘬𝘩𝘪𝘴 𝘍𝘢𝘴𝘩𝘪𝘰𝘯𝘴! 𝘍𝘳𝘰𝘮 𝘵𝘩𝘦 𝘷𝘦𝘳𝘺 𝘣𝘦𝘨𝘪𝘯𝘯𝘪𝘯𝘨, 𝘰𝘶𝘳 𝘷𝘪𝘴𝘪𝘰𝘯 𝘩𝘢𝘴 𝘣𝘦𝘦𝘯 𝘵𝘰 𝘤𝘳𝘦𝘢𝘵𝘦 𝘢 𝘸𝘰𝘳𝘬𝘱𝘭𝘢𝘤𝘦 𝘸𝘩𝘦𝘳𝘦 𝘪𝘯𝘯𝘰𝘷𝘢𝘵𝘪𝘰𝘯 𝘵𝘩𝘳𝘪𝘷𝘦𝘴, 𝘤𝘰𝘭𝘭𝘢𝘣𝘰𝘳𝘢𝘵𝘪𝘰𝘯 𝘧𝘭𝘰𝘶𝘳𝘪𝘴𝘩𝘦𝘴, 𝘢𝘯𝘥 𝘦𝘷𝘦𝘳𝘺 𝘪𝘯𝘥𝘪𝘷𝘪𝘥𝘶𝘢𝘭 𝘪𝘴 𝘦𝘮𝘱𝘰𝘸𝘦𝘳𝘦𝘥 𝘵𝘰 𝘢𝘤𝘩𝘪𝘦𝘷𝘦 𝘵𝘩𝘦𝘪𝘳 𝘧𝘶𝘭𝘭 𝘱𝘰𝘵𝘦𝘯𝘵𝘪𝘢𝘭. 𝘞𝘦 𝘣𝘦𝘭𝘪𝘦𝘷𝘦 𝘪𝘯 𝘧𝘰𝘴𝘵𝘦𝘳𝘪𝘯𝘨 𝘢 𝘤𝘶𝘭𝘵𝘶𝘳𝘦 𝘵𝘩𝘢𝘵 𝘷𝘢𝘭𝘶𝘦𝘴 𝘥𝘪𝘷𝘦𝘳𝘴𝘪𝘵𝘺, 𝘦𝘮𝘣𝘳𝘢𝘤𝘦𝘴 𝘤𝘳𝘦𝘢𝘵𝘪𝘷𝘪𝘵𝘺, 𝘢𝘯𝘥 𝘦𝘯𝘤𝘰𝘶𝘳𝘢𝘨𝘦𝘴 𝘤𝘰𝘯𝘵𝘪𝘯𝘶𝘰𝘶𝘴 𝘭𝘦𝘢𝘳𝘯𝘪𝘯𝘨. 𝘈𝘵 𝘙𝘢𝘬𝘩𝘪𝘴 𝘍𝘢𝘴𝘩𝘪𝘰𝘯𝘴, 𝘸𝘦 𝘢𝘳𝘦 𝘯𝘰𝘵 𝘫𝘶𝘴𝘵 𝘣𝘶𝘪𝘭𝘥𝘪𝘯𝘨 𝘢 𝘵𝘦𝘢𝘮; 𝘸𝘦 𝘢𝘳𝘦 𝘯𝘶𝘳𝘵𝘶𝘳𝘪𝘯𝘨 𝘢 𝘤𝘰𝘮𝘮𝘶𝘯𝘪𝘵𝘺 𝘰𝘧 𝘱𝘢𝘴𝘴𝘪𝘰𝘯𝘢𝘵𝘦 𝘪𝘯𝘥𝘪𝘷𝘪𝘥𝘶𝘢𝘭𝘴 𝘸𝘩𝘰 𝘢𝘳𝘦 𝘤𝘰𝘮𝘮𝘪𝘵𝘵𝘦𝘥 𝘵𝘰 𝘮𝘢𝘬𝘪𝘯𝘨 𝘢 𝘥𝘪𝘧𝘧𝘦𝘳𝘦𝘯𝘤𝘦. 𝘑𝘰𝘪𝘯 𝘶𝘴 𝘰𝘯 𝘵𝘩𝘪𝘴 𝘫𝘰𝘶𝘳𝘯𝘦𝘺 𝘢𝘴 𝘸𝘦 𝘪𝘯𝘯𝘰𝘷𝘢𝘵𝘦, 𝘨𝘳𝘰𝘸, 𝘢𝘯𝘥 𝘴𝘩𝘢𝘱𝘦 𝘵𝘩𝘦 𝘧𝘶𝘵𝘶𝘳𝘦 𝘵𝘰𝘨𝘦𝘵𝘩𝘦𝘳."',
  facebook: 'facebook-url',
  instagram: 'instagram-url',
  twitter: 'twitter-url'
};

const AboutFounder = () => {
  return (
    <section className="pb-10 pt-10 relative bg-[#fbcfe8]  "style={{ 
      backgroundImage: `url('/background/founderbg.jpg')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      objectFit: 'fill'
    }} >
      
      <div className="relative">
        <div className="absolute inset-0 z-0 opacity-20 bg-cover bg-center" ></div>
        <div className="container mx-auto grid md:grid-cols-2 gap-2 items-center justify-center p-2 relative z-10">
          <div className="flex-1 p-2">
            <Image src={founder.image} alt={founder.name} width={300} height={300} loading="lazy" className="border-4 border-[#be185d] rounded-lg mb-4 mx-auto" />
            
          </div>
          <div className="flex-3">
            <h2 className="text-3xl font-bold mb-4 text-black flex justify-center" >𝑭𝒐𝒖𝒏𝒅𝒆𝒓</h2>
            <p className="text-lg p-2 border-2 border-[#be185d] text-black rounded-xl bg-gradient-to-br from-[#fefce8] to-[#ffffff]">{founder.message}</p>
          </div>
          <Link href='https://in.linkedin.com/in/rakhi-peethamber-a8786b60'>
            <button className="border text-gray-50  duration-300 relative group cursor-pointer   overflow-hidden h-10 w-full rounded-md bg-neutral-800 p-2  font-extrabold hover:bg-[#86198f] mt-2 text-center ">

  <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-700 right-12 top-12 bg-yellow-500"></div>
  <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150  duration-700 right-20 -top-6 bg-orange-500"></div>
  <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8   rounded-full group-hover:scale-150  duration-700 right-32 top-6 bg-pink-500"></div>
  <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4   rounded-full group-hover:scale-150  duration-700 right-2 top-12 bg-red-600"></div>
  <p className="z-10 absolute bottom-2 left-2 ">Rakhi Peethamber </p>
</button>
</Link>
        </div>
      </div>
    </section>
    
  );
};

export default AboutFounder;
