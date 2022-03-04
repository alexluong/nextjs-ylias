import { fetchChannel } from "../../libs/channels/fetchChannel";
import { ChannelHeroSection } from "../../components/channel-hero-section";

export async function getServerSideProps(context) {
  const channelId = context.params.channelId;

  const channel = await fetchChannel(channelId);

  return {
    props: { channel },
  };
}

export default function Channel(props) {
  return (
    <div>
      <ChannelHeroSection channel={props.channel} />
    </div>
  );
}
