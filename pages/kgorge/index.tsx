import Image from "next/image";
import React, { useEffect } from "react";
import styles from "../../styles/Home.module.css";

function Home() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href =
        "https://www.shareasale.com/r.cfm?b=1789820&u=2886665&m=111596";
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
        <div
          // style={{ marginTop: 50 }}
          className={styles.nnew}
        >
          {/* <Image src="/lesmini.png" height={200} width={200} /> */}
          <img src="kgorge.jpg" height={200} width={200} />
        </div>
        <div>
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
