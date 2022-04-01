import Image from 'next/image';
import discordJoin from '../../assets/images/footerDiscord.png';

const DiscordJoin = () => {
  return (
    <a href="#" >
      <Image src={discordJoin}
        alt="imag"
        width="250px"
        height="78.18px"/>
    </a>
  );
};

export default DiscordJoin;
