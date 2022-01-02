import Image from "next/image";
import React, { useEffect } from "react";
import styles from "../../styles/Home.module.css";

function Home() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href =
        "https://www.shareasale.com/r.cfm?b=1465944&u=2886642&m=93611";
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
        // className={styles.nnew}
      >
        {/* <h1
          style={{ color: "red", fontSize: 50, marginTop: 0, marginBottom: 0 }}
        >
          sssssss
        </h1> */}
        <div
          className={styles.nnew}
          // style={{ marginTop: 50 }}
        >
          {/* <Image src="/nanobebe.jpg" height={250} width={250} /> */}
          <img src="nanobebe.jpg" height={250} width={250} />
        </div>
        <div style={{ marginTop: -80 }}>
          {/* <Image src="/4.svg" height={200} width={200} /> */}
          <img src="4.svg" />
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
