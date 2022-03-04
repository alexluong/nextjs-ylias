export function ChannelHeroSection(props) {
  const channel = props.channel;
  return (
    <section style={{ background: "yellow" }}>
      <div>Hero Section:</div>
      <h1>{channel.channelName}</h1>
    </section>
  );
}
