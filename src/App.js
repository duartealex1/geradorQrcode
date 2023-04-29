import React, { useState } from "react";
import "./App.css";
import QRCode from "react-qr-code";
import QRCodeLink from "qrcode";

//icons react icons
//import { FiSearch } from "react-icons/fi";

function App() {
  const [link, setLink] = useState("");
  const [qrcodelink, setQrcodelink] = useState("");

  function handleGenerete(link_url) {
    QRCodeLink.toDataURL(
      link_url,
      {
        width: 600,
        margin: 3,
      },
      function (erro, url) {
        setQrcodelink(url);
      }
    );
  }
  function handleQrcode(e) {
    setLink(e.target.value);
    handleGenerete(e.target.value);
  }

  return (
    <div className="container App-header ">
      <QRCode value={link} />

      <div className="row d-flex">
        <input
          className="form-control mt-4 col-9"
          type="text"
          placeholder="digite seu link..."
          value={link}
          onChange={(e) => handleQrcode(e)}
        ></input>
        <a
          className="btn btn-primary scale"
          href={qrcodelink}
          download={`qrcode.png`}
        >
          Baixar Qrcode
        </a>
      </div>
    </div>
  );
}

export default App;
