"use client";
import React from "react";
import Image from "next/image";
import AboutSection from "./About";

const HistorySection: React.FC = () => {
    const events = [
        {
          date: "11-28-23",
          description:
            "BellsCoin was created by BillyM2K in 2013 and he forked it to make Dogecoin.",
          links: [
            "https://x.com/billym2k/status/408815850615869440?s=46&t=xWOkrI8x7-FS82ub-1bdoA",
            "https://bitcointalk.org/index.php?topic=349695.0",
            "https://x.com/bellscoinx/status/1810700476163481741?s=46&t=xWOkrI8x7-FS82ub-1bdoA",
            "https://x.com/billym2k/status/1732424915528417602?s=46&t=xWOkrI8x7-FS82ub-1bdoA",
          ],
          image: "/images/bells1.png",
        },
        {
          date: "12-14-23",
          description:
            "@adam_bcbride and @luke_wright resurrected the abandoned BellsCoin blockchain and publicly announced it. Thanks to its fair launch, it was not pre-mined, and there was no allocation for the team.",
          links: ["https://x.com/adamamcbride/status/1734970425778815413"],
          image: "/images/bells2.png",
        },
        {
          date: "12-29-23",
          description:
            "Decentralized BellsCoin developers updated the BellsCoin Core code, supporting BEL-20 and Bellinals (inscriptions on the blockchain).",
          links: [
            "https://discordapp.com/channels/1184582923358310431/1184587211388223508/1190053807531503696",
          ],
          image: "/images/bells3.png",
        },
        {
          date: "04-13-24",
          description:
            "By October 2024, over 150 million inscriptions were issued on the BellsCoin blockchain, becoming a playground for artists worldwide.",
          links: [
            "https://x.com/adamamcbride/status/1830622754866888866",
            "https://collection.bellscoin.com",
            "https://x.com/adamamcbride/status/1822309778812514581",
          ],
          image: "/images/bells4.png",
        },
        {
          date: "05-10-24",
          description:
            "Nintondo, the BellsCoin ecosystem’s core product, serves as an explorer, marketplace, and indexer for BEL-20 and Bellinals.",
          links: [
            "https://medium.com/@bellscoin/nintondo-utxo-splitter-1718e5e98fca",
            "https://medium.com/@bellscoin/nintondo-updates-0-2-4-2-75cff40db4d5",
            "https://x.com/BellsChain/status/1779189536443998637",
            "https://discordapp.com/channels/1184582923358310431/1184587211388223508/1277642424650432653",
          ],
          image: "/images/bells5.png",
        },
        {
          date: "07-13-24",
          description:
            "BellsCoin experienced a halving, officially entering Epoch 3 with the 129,600th block. Over 60% of the total supply was produced in Epoch 2, increasing scarcity.",
          links: ["https://x.com/BellsChain/status/1811842993579557117"],
          image: "/images/bells6.png",
        },
        {
          date: "07-21-24",
          description:
            "Merged mining with Litecoin and Dogecoin became possible through the Core 3.0 update, bringing many Scrypt PoW miners worldwide to participate.",
          links: [
            "https://x.com/BellsChain/status/1814703025769902204",
            "https://medium.com/@bellscoin/what-billym2k-said-about-bellscoin-fcbdf4056aae",
          ],
          image: "/images/bells7.png",
        },
        {
          date: "07-26-24",
          description:
            "The BellsCoin team participated in #WDMS2024 as a partner of the @BITMAINtech PoW ecosystem. The community also fostered relationships with miners through Litecoin Foundation events.",
          links: [
            "https://x.com/BellsChain/status/1816520540347342970",
            "https://x.com/BellsChain/status/1801681668560068814",
            "https://x.com/BellsChain/status/1800891401540112549",
            "https://x.com/BellsChain/status/1829813060820664645",
          ],
          image: "/images/bells8.png",
        },
        {
          date: "08-21-24",
          description:
            "With the core v3 update enabling merged mining, BellsCoin’s network hash rate reached 1.2 PH/s, one of the highest among Scrypt PoW chains.",
          links: [
            "https://x.com/keto_studio/status/1843108147952828637",
            "https://x.com/keto_studio/status/1826181422048280829",
            "https://miningpoolstats.stream/bells",
          ],
          image: "/images/bells9.png",
        },
        {
          date: "09-11-24",
          description:
            "SuitBoy Billy, a collection of 10,000 PFP inscriptions, raised 100,000 $BELLS for BillyM2K as a gesture of gratitude.",
          links: [
            "https://x.com/SuitboyBilly/status/1833596313147175178",
            "https://x.com/BillyM2k/status/1832961779011654112",
          ],
          image: "/images/bells10.png",
        },
        {
          date: "09-17-24",
          description:
            "The Taproot update on BellsCoin’s Layer 1 blockchain enabled privacy, efficiency, smaller transaction sizes, and support for smart contracts.",
          links: [
            "https://discordapp.com/channels/1184582923358310431/1184587211388223508/1285561826423341163",
            "https://x.com/NintondoWallet/status/1836680260395454906",
            "https://x.com/BellsChain/status/1836002740616536548",
          ],
          image: "/images/bells11.png",
        },
        {
          date: "09-26-24",
          description:
            "BillyM2K recognized BellsCoin, stating it was based on his code work from 11 years ago.",
          links: ["https://x.com/BillyM2k/status/1839055216160944358"],
          image: "/images/bells12.png",
        },
        {
          date: "09-26-24",
          description:
            "Binance Mining Pool announced support for merged mining of BellsCoin, alongside Litecoin and Dogecoin. Major pools such as ViaBTC and AntPool also participated.",
          links: [
            "https://x.com/binance/status/1842213850969755861",
            "https://miningpoolstats.stream/bells",
          ],
          image: "/images/bells13.png",
        },
        {
          date: "10-03-24",
          description:
            "The BellsCoin community raised over $130K within two days of a fundraising campaign. Funds were managed via multisig and transparently disclosed on-chain.",
          links: ["https://x.com/BellsChain/status/1841551360350961948"],
          image: "/images/bells14.png",
        },
        {
          date: "10-10-24",
          description:
            "Jihan Wu, founder of Bitmain, followed BellsCoin’s official Twitter account, increasing its visibility in the mining community.",
          links: ["https://x.com/keto_studio/status/1844367997504508387"],
          image: "/images/bells15.png",
        },
        {
          date: "11-16-24",
          description:
            "@Litecoin declared itself a memecoin, emphasizing that $LTC, $DOGE, and $BELLS belong to the Scrypt family and deserve equal recognition.",
          links: [
            "https://x.com/litecoin/status/1859295293893759411",
            "https://x.com/litecoin/status/1857481468903141530",
            "https://x.com/litecoin/status/1857484964989710667",
          ],
          image: "/images/bells16.png",
        },
        {
          date: "11-21-24",
          description:
            "BillyM2K stated that BellsCoin, Litecoin, and Dogecoin belong to the Scrypt family and reaffirmed that both BellsCoin and Dogecoin were coins he created.",
          links: ["https://x.com/BillyM2k/status/1859307337359688037"],
          image: "/images/bells17.png",
        },
      ];
      

  return (
<section id="about" className=" flex flex-col  py-20">
  <AboutSection/>
  <div className="container mx-auto px-4">
    <h1 className="text-5xl font-extrabold text-center text-white mb-12">
      Study $BELLS History
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {events.map((event, index) => (
        <div
          key={index}
          className={`bg-white p-6 rounded-xl shadow-lg transform opacity-0 scale-95 animate-fade-in-up`}
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className="relative">
            <Image
              src={event.image}
              alt={`Event ${index + 1}`}
              width={300}
              height={200}
              className="rounded-lg mb-4 object-cover"
            />
            <div className="absolute top-2 left-2 bg-red-500 text-white font-bold px-3 py-1 rounded">
              {event.date}
            </div>
          </div>
          <p className="text-gray-800 text-mg md:text-xl mb-4">{event.description}</p>
          <div className="text-sm text-gray-800 space-y-1 break-words">
            {event.links.map((link, linkIndex) => (
              <div key={linkIndex}>
                <a href={link} target="_blank" rel="noopener noreferrer" className="underline">
                  {link}
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Add the customized 18th item */}
      <div
        className="col-span-1 sm:col-span-2 lg:col-span-3 flex flex-col items-center justify-center p-6 rounded-xl transform opacity-0 scale-95 animate-fade-in-up"
        style={{ animationDelay: `${events.length * 0.2}s` }}
      >
        <div className="relative flex items-center justify-center w-full">
          {/* Left Image with Shaking Effect */}
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/images/bellsimg.png" // Replace with the path to the shaking image
              alt="Shaking Main Element"
              width={300}
              height={300}
              className="rounded-lg object-cover animate-shake"
            />
            <div className="bg-white text-yellow-600 font-bold rounded-xl px-4 py-2 shadow mt-4">
              I CAME INTO THE WORLD <span className="text-red-600">8 DAYS</span> BEFORE YOU DID!
            </div>
          </div>

          {/* Right Image with Smaller Text */}
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/images/sowhat.png" // Replace with the path to the smaller image
              alt="Smaller Element"
              width={150}
              height={150}
              className="rounded-lg object-cover"
            />
            <div className="bg-white text-yellow-600 font-bold rounded-xl px-4 py-2 shadow mt-4">
              SO, WHAT?
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <style jsx>{`
    @keyframes fade-in-up {
      from {
        opacity: 0;
        transform: translateY(20px) scale(0.95);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
    .animate-fade-in-up {
      animation: fade-in-up 0.8s ease-out forwards;
    }
    @keyframes shake {
      0%, 100% {
        transform: translateX(0);
      }
      25% {
        transform: translateX(-10px);
      }
      75% {
        transform: translateX(10px);
      }
    }
    .animate-shake {
      animation: shake 0.5s ease-in-out infinite;
      animation-delay: 5s;
    }
  `}</style>
</section>


  
  );
};

export default HistorySection;
