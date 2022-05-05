import Image from 'next/image';
import discordJoin from '../assets/images/footerDiscord.png';

const DiscordJoin = () => {
  return (
    <a href="https://discord.gg/Au6rp6JQn7" target="_blank" rel="noopener noreferrer" >
      <Image src={discordJoin}
        alt="imag"
        width="250px"
        height="78.18px"/>
    </a>
  );
};

export default DiscordJoin;
