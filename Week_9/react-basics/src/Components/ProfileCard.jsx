export default function ProfileCard() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{ border: "1px solid grey", borderRadius: "10px", width: 250 }}
      >
        <div>
          <img
            style={{
              borderTopRightRadius: "10px",
              borderTopLeftRadius: "10px",
              height: "100%",
              width: "100%",
              objectFit: "contain",
            }}
            src="https://i.pinimg.com/originals/c8/67/3a/c8673ad4c46ade00cf3bd0049db62b16.jpg"
            alt="profile-bg"
          />
        </div>
        <div style={{ padding: 10 }}>
          <img
            width={80}
            height={80}
            style={{ borderRadius: 80, marginLeft: 10, marginTop: -45 }}
            src="https://media.licdn.com/dms/image/v2/D4D03AQF7Ho_ryeoQNA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1677988939103?e=2147483647&v=beta&t=Eqr0lCTypl8MNTmdv851GPez1ZbJ8kPivJB2iayCHnc"
            alt="profile-photo"
          />
          <h3>Ashneer Grover</h3>
          <p>Senior Analyst at Capgemini | IIIT-Bh'22</p>
          <p>Patna, Bihar</p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              width={20}
              src="https://media.licdn.com/dms/image/v2/C4E0BAQGf5YDRAgF5ow/company-logo_100_100/company-logo_100_100/0/1675696304669/capgemini_engineering_logo?e=2147483647&v=beta&t=z70ol6a3txPeMjFIIOh8MUG1jQxpNEXm-YPelqrE2P0"
              alt="logo"
            />
            Capgemini
          </div>
        </div>
      </div>
    </div>
  );
}
