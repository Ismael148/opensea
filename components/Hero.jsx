import React from 'react';

const style = {
  wrapper: `relative`,
  container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://images.unsplash.com/photo-1544273677-c433136021d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
  contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
  copyContainer: `w-1/2`,
  title: `relative text-white text-[46px] font-semibold`,
  description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
  ctaContainer: `flex`,
  accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
  button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
  cardContainer: `rounded-[3rem]`,
  infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
  author: `flex flex-col justify-center ml-4`,
  name: ``,
  infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
};

const Hero = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.contentWrapper}>
          <div className={style.copyContainer}>
            <div className={style.title}>
              Discover, collect, and sell extraordinary NFTs
            </div>
            <div className={style.description}>
              Opensea is the world&apos;s first and largest NF marketplace
            </div>
            <div className={style.ctaContainer}>
              <button className={style.accentedButton}>Explore</button>
              <button className={style.button}>Create</button>
            </div>
          </div>
          <div className={style.cardContainer}>
            <img
              className="rounded-t-lg"
              src="https://lh3.googleusercontent.com/ujepnqpnL0nDQIHsWxlCXzyw4pf01yjz1Jmb4kAQHumJAPrSEj0-e3ABMZlZ1HEpJoqwOcY_kgnuJGzfXbd2Tijri66GXUtfN2MXQA=s550"
              alt="banner-image"
            />
            <div className={style.infoContainer}>
              <img
                className="h-[2.25rem] rounded-full"
                src="data:image/jpeg;base64,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"
                alt=""
              />
              <div className={style.author}>
                <div className={style.name}>Ismael</div>
                <a
                  className="text-[#1868b7]"
                  href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/2324922113504035910649522729980423429926362207300810036887725141691069366277"
                >
                  hola-kanola
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
