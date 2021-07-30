import React from "react";
import Header from "../../Component/Header";

export default function Layout(props) {
  return (
    <div>
      <Header/>
      {props.children}
      <div style={{ background: "red", height: 50, marginTop: 20 }}>
        <h2>Footer</h2>
      </div>
    </div>
  );
}
