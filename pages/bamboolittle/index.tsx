import Image from "next/image";
import React, { useEffect } from "react";

function Home() {
  // useEffect(() => {
  //   setTimeout(() => {
  //     window.location.href = "https://www.facebook.com";
  //   }, 2000);
  // }, []);

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
          <Image src="/bamboolittle.png" height={250} width={250} />
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
