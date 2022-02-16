import { useRouter } from "next/router";
import { fetchChannel } from "../../libs/channels/fetchChannel";

export async function getServerSideProps(context) {
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
