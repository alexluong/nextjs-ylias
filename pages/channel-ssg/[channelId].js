import { useRouter } from "next/router";
import { fetchChannel } from "../../libs/channels/fetchChannel";
import { fetchChannels } from "../../libs/channels/fetchChannels";

export async function getStaticPaths() {
  const channels = await fetchChannels();

  return {
    paths: channels.map((channel) => ({ params: { channelId: channel.id } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const channelId = context.params.channelId;

  const channel = await fetchChannel(channelId);

  return {
    props: { channel },
  };
}

export default function Channel(props) {
  const router = useRouter();

  return (
    <div>
      <p>
        Channel: {router.query.channelId}: {props.channel?.channelName}
      </p>
    </div>
  );
}
