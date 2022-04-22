export const Body = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <img
        style={{
          borderRadius: "50%",
          width: "350px",
          height: "350px",
          objectFit: "cover",
        }}
        src="https://media4.giphy.com/media/DC5oEtEdxtSJAQ7Xtg/giphy.gif?cid=ecf05e473569a54a8bcaa73f5bf2c77882208efbaab1725d&rid=giphy.gif&ct=g"
        alt="image"
      />
    </div>
  );
};
