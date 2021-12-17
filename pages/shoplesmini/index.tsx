import Image from "next/image";
import React, { useEffect } from "react";

function Home() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href =
        "https://www.shareasale.com/r.cfm?b=1856819&u=2886642&m=115803";
    }, 2000);
  }, []);

  return (
    <div>
      <div
        style={{
          width: "50%",
          marginLeft: "25%",
          marginRight: "25%",
          textAlign: "center",
        }}
      >
        {/* <h1
          style={{ color: "red", fontSize: 50, marginTop: 0, marginBottom: 0 }}
        >
          sssssss
        </h1> */}
        <div style={{ marginTop: 50 }}>
          <Image src="/lesmini.png" height={200} width={200} />
        </div>
        <div>
          <Image src="/4.svg" height={200} width={200} />
        </div>

        <p
          style={{
            marginTop: 0,
            marginBottom: 0,
            fontSize: 15,
            color: "gray",
            fontStyle: "normal",
            fontWeight: "bold",
          }}
        >
          Loading...
        </p>
      </div>
    </div>
  );
}

export default Home;
